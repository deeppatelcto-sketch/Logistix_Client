import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import logo from "../../components/Dashboard/Images/my_logistix-logo.svg";
import Dashboardpage from "../Dashboard/dashboardpage"

export default function DeliveryAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showForm, setShowForm] = useState(false);


  const [formData, setFormData] = useState({
    lrNo: "",
    appointmentDate: "",
    startTime: "",
    endTime: "",
    appointmentId: "",
    poNumber: "",
    asn: "",
    poCopy: null,
  });

  // ====================== FETCH APPOINTMENTS ======================
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT token from login
        const res = await axios.get("http://13.61.104.107:8000/myappointments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
        setFilteredAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  // ====================== HANDLE FORM INPUTS ======================
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "poCopy") {
      setFormData({ ...formData, poCopy: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // ====================== HANDLE SUBMIT ======================
  // ====================== HANDLE SUBMIT ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // JWT token
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post("http://13.61.104.107:8000/addappointment", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Appointment Added Successfully ✅");

      // Refresh table
      const res = await axios.get("http://13.61.104.107:8000/myappointments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(res.data);
      setFilteredAppointments(res.data);

      // Reset form
      setFormData({
        lrNo: "",
        appointmentDate: "",
        startTime: "",
        endTime: "",
        appointmentId: "",
        poNumber: "",
        asn: "",
        poCopy: null,
      });

      // ✅ Close modal using React state
      setShowForm(false);

    } catch (err) {
      console.error("Error adding appointment:", err);
      alert("Failed to add appointment ❌");
    }
  };


  // ====================== FILTER HANDLER ======================
  const handleSearch = () => {
    let filtered = [...appointments];

    // Filter by LR No
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((a) =>
        a.lrNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by Date Range
    if (dateFilter !== "") {
      const today = new Date();
      if (dateFilter === "today") {
        filtered = filtered.filter(
          (a) =>
            new Date(a.appointmentDate).toDateString() === today.toDateString()
        );
      } else if (dateFilter === "yesterday") {
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        filtered = filtered.filter(
          (a) =>
            new Date(a.appointmentDate).toDateString() ===
            yesterday.toDateString()
        );
      } else if (dateFilter === "last7") {
        const last7 = new Date();
        last7.setDate(today.getDate() - 7);
        filtered = filtered.filter(
          (a) => new Date(a.appointmentDate) >= last7
        );
      } else if (dateFilter === "last30") {
        const last30 = new Date();
        last30.setDate(today.getDate() - 30);
        filtered = filtered.filter(
          (a) => new Date(a.appointmentDate) >= last30
        );
      } else if (dateFilter === "month") {
        filtered = filtered.filter(
          (a) =>
            new Date(a.appointmentDate).getMonth() === today.getMonth() &&
            new Date(a.appointmentDate).getFullYear() === today.getFullYear()
        );
      } else if (dateFilter === "lastmonth") {
        const lastMonth = today.getMonth() - 1;
        filtered = filtered.filter(
          (a) =>
            new Date(a.appointmentDate).getMonth() === lastMonth &&
            new Date(a.appointmentDate).getFullYear() === today.getFullYear()
        );
      }
    }

    setFilteredAppointments(filtered);
  };

  const clearFilter = () => {
    setSearchTerm("");
    setDateFilter("");
    setFilteredAppointments(appointments);
  };



  return (
    <>
      {/* Fonts & Icons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />


      <Dashboardpage>

        {/* Delivery Appointment Section */}
        <main className="delivery-appointment-main">
          <section className="delivery-appointment-section">
            <div className="delivery-header-row">
              <h2 className="delivery-title">
                Delivery <span className="appointment-title">Appointment</span>
              </h2>
              <button
                className="add-appointment-btn"
                onClick={() => setShowForm(true)}
              >
                Add Appointment
              </button>

            </div>

            <div className="delivery-filter-row">
              <div className="input-selector-part">
                <input
                  className="delivery-search-input"
                  type="text"
                  placeholder="Search BY LR/AWB"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  className="delivery-date-select"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="">Select Date</option>
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last7">Last 7 Days</option>
                  <option value="last30">Last 30 Days</option>
                  <option value="month">This Month</option>
                  <option value="lastmonth">Last Month</option>
                </select>
              </div>

              <div className="button-part">
                <button
                  type="button"
                  className="delivery-search-btn"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button
                  type="button"
                  className="delivery-clear-btn"
                  onClick={clearFilter}
                >
                  Clear Filter
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="delivery-data-section">
              {/* <table className="delivery-data-table">
                <thead>
                  <tr>
                    <th>LR No.</th>
                    <th>Appointment Date</th>
                    <th>Slot Time</th>
                    <th>PO Number</th>
                    <th>PO Copy</th>
                    <th>ASN</th>
                    <th>Appointment ID</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((a) => (
                      <tr key={a._id}>
                        <td>
                          <a href="#" className="delivery-lr-no">
                            {a.lrNo}
                          </a>
                        </td>
                        <td>
                          {new Date(a.appointmentDate).toLocaleDateString()}
                        </td>
                        <td>
                          {a.startTime} - {a.endTime}
                        </td>
                        <td>{a.poNumber}</td>
                        <td>
                          {a.poCopy ? (
                            <a
                              href={`http://localhost:8000/${a.poCopy}`}
                              target="_blank"
                              rel="noreferrer"
                              className="delivery-po-attachment"
                            >
                              View
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td>{a.asn}</td>
                        <td>{a.appointmentId}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center" }}>
                        No Records Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table> */}

              <table className="delivery-data-table">
                <thead>
                  <tr>
                    <th className="first-cell">LR No.</th>
                    <th>Appointment Date</th>
                    <th>Slot Time</th>
                    <th>PO Number</th>
                    <th>PO Copy</th>
                    <th>ASN</th>
                    <th className="last-cell">Appointment ID</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((a) => (
                      <tr key={a._id}>
                        <td className="first-cell">
                          <a href="#" className="delivery-lr-no">
                            {a.lrNo}
                          </a>
                        </td>
                        <td>{new Date(a.appointmentDate).toLocaleDateString()}</td>
                        <td>
                          {a.startTime} - {a.endTime}
                        </td>
                        <td>{a.poNumber}</td>
                        <td>
                          {a.poCopy ? (
                            <a
                              href={`http://localhost:8000/${a.poCopy}`}
                              target="_blank"
                              rel="noreferrer"
                              className="delivery-po-attachment"
                              style={{ color: "rgba(100, 155, 197, 1)" }}
                            >
                              View
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td>{a.asn}</td>
                        <td className="last-cell">{a.appointmentId}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-data">
                        No Records Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>
          </section>

          <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>

          {/* Form Overlay */}
          {/* <div className={`form-overlay ${showForm ? "active" : ""}`} id="formOverlay">
            <div className="appointment-form">
              <div className="appointment-header">
                <h3>Register Your Appointment</h3>
                <span className="close-btn" onClick={() => setShowForm(false)}>
                  &times;
                </span>

              </div>

              <div className="appointment-body">
                <form
                  id="appointmentForm"
                  className="appointmentForm"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="lrNo">LR No *</label>
                      <input
                        type="text"
                        id="lrNo"
                        value={formData.lrNo}
                        onChange={handleChange}
                        placeholder="Select A LR No."
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="appointmentDate">Appointment Date *</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="startTime">Start Time *</label>
                      <input
                        type="time"
                        id="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endTime">End Time *</label>
                      <input
                        type="time"
                        id="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="appointmentId">Appointment ID *</label>
                      <input
                        type="text"
                        id="appointmentId"
                        value={formData.appointmentId}
                        onChange={handleChange}
                        placeholder="Appointment ID"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="poNumber">#PO *</label>
                      <input
                        type="text"
                        id="poNumber"
                        value={formData.poNumber}
                        onChange={handleChange}
                        placeholder="#PO"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="asn">ASN *</label>
                      <input
                        type="text"
                        id="asn"
                        value={formData.asn}
                        onChange={handleChange}
                        placeholder="ASN"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group wide">
                      <label htmlFor="poCopy">PO Copy</label>
                      <input
                        type="file"
                        id="poCopy"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleChange}
                      />
                      <span className="file-hint">(Max Size: 100KB)</span>
                    </div>
                  </div>

                  <hr className="form-divider" />
                  <div className="form-footer">
                    <button type="submit" className="appointment-submit-btn">
                      Add Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>    */}

          <div className={`form-overlay ${showForm ? "active" : ""}`}>
            <div className="appointment-form">
              <div className="appointment-header">
                <h3>Register Your Appointment</h3>
                <span className="close-btn" onClick={() => setShowForm(false)}>
                  &times;
                </span>
              </div>

              <div className="appointment-body">
                <form
                  id="appointmentForm"
                  className="appointmentForm"
                  onSubmit={handleSubmit}
                >
                  {/* LR No + Dummy Field */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="lrNo">LR No *</label>
                      <input
                        type="text"
                        id="lrNo"
                        value={formData.lrNo}
                        onChange={handleChange}
                        placeholder="Enter LR No."
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="appointmentDate">Appointment Date *</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  {/* Date + Start Time */}
                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="startTime">Start Time *</label>
                      <input
                        type="time"
                        id="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="endTime">End Time *</label>
                      <input
                        type="time"
                        id="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* End Time + Appointment ID */}
                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="appointmentId">Appointment ID *</label>
                      <input
                        type="text"
                        id="appointmentId"
                        value={formData.appointmentId}
                        onChange={handleChange}
                        placeholder="Enter Appointment ID"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="poNumber">#PO *</label>
                      <input
                        type="text"
                        id="poNumber"
                        value={formData.poNumber}
                        onChange={handleChange}
                        placeholder="Enter PO Number"
                        required
                      />
                    </div>
                  </div>

                  {/* PO Number + ASN */}
                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="asn">ASN *</label>
                      <input
                        type="text"
                        id="asn"
                        value={formData.asn}
                        onChange={handleChange}
                        placeholder="Enter ASN"
                        required
                      />
                      <span className="file-hint">(Max Size: 100KB)</span>

                    </div>

                    <div className="form-group">
                      <label htmlFor="poCopy">PO Copy</label>
                      <input
                        type="file"
                        id="poCopy"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleChange}
                      />
                      <span className="file-hint">(Max Size: 100KB)</span>
                    </div>
                  </div>

                  <hr className="form-divider" />
                  <div className="form-footer">
                    <button type="submit" className="appointment-submit-btn">
                      Add Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>




        </main>

      </Dashboardpage>
    </>
  );
}
