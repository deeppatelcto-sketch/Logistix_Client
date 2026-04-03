import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PickupRequestPage.css";

const PickupRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    shippingPartner: "",
    expectedPackageCount: "",
    warehouse: "",
    pickupDate: "",
    pickupTime: "",
  });

  const fetchRequests = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pickupreq ");
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching pickup requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
  const finalData = {
    ...formData,
    expectedPackageCount: Number(formData.expectedPackageCount),
    pickupDate: new Date(formData.pickupDate), // ✅ Convert to Date object
  };

  try {
    await axios.post("http://localhost:8000/createpickupreq", finalData);
    setFormData({
      shippingPartner: "",
      expectedPackageCount: "",
      warehouse: "",
      pickupDate: "",
      pickupTime: "",
    });
    setOpenForm(false);
    fetchRequests();
  } catch (error) {
    console.error("Error adding pickup request:", error.response?.data || error.message);
  }
};


  return (
    <div className="pickup-container">
      <div className="pickup-header">
        <h2 className="gradient-text">Pickup Request</h2>
        <button className="add-btn" onClick={() => setOpenForm(true)}>Add Request</button>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Pickup Request Id" />
      </div>       

      <div className="pickup-table">
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Pickup Point</th>
              <th>Date</th>
              <th>Time</th>
              
              <th>Courier</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx}>
                <td style={{ color: "#2F80ED" }}>{req._id.slice(-6)}</td>
                <td>{req.warehouse}</td>
                <td>{req.pickupDate}</td>
                <td>{req.pickupTime}</td>
                
                <td><strong>{req.shippingPartner}</strong></td>
                <td><span className="badge">small</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openForm && (
        <div className="form-modal">
          <div className="form-card">
            <h3>New Pickup Request</h3>
            <div className="form-row">
              <select name="shippingPartner" value={formData.shippingPartner} onChange={handleChange}>
                <option value="">Shipping Partner *</option>
                <option value="DELHIVERY">DELHIVERY</option>
                <option value="EKART">EKART</option>
              </select>
              <input name="warehouse" placeholder="Warehouse *" value={formData.warehouse} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input name="expectedPackageCount" placeholder="Expected Package Count *" value={formData.expectedPackageCount} onChange={handleChange} />
              <input name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} />
            </div>
            <div className="form-row">
              <select name="pickupTime" value={formData.pickupTime} onChange={handleChange}>
                <option value="">Pickup Time *</option>
                <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                <option value="2:00 PM - 6:00 PM">2:00 PM - 6:00 PM</option>
              </select>
            </div>
            <div className="form-actions">
              <button onClick={handleSubmit} className="add-btn">Add Pickup Request</button>
              <button onClick={() => setOpenForm(false)} className="cancel-btn">Cancel Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickupRequestPage;

