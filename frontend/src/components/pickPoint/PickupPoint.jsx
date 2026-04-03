
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./style1.css";
import logo from "./Images/my_logistix-logo.svg";
import Dashboardpage from "../Dashboard/dashboardpage"

const PickupPointPage = () => {
  const [pickupPoints, setPickupPoints] = useState([]);
  const [selectedPickupPoint, setSelectedPickupPoint] = useState(null);
  const [showGetInfo, setShowGetInfo] = useState(false);
  const [showMobileUpdate, setShowMobileUpdate] = useState(false);
  const [newMobile, setNewMobile] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPickupPoints, setFilteredPickupPoints] = useState([]);

  const [formData, setFormData] = useState({
    pickupPointName: "",
    contactName: "",
    contactNumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    email: "",
    addressType: "",
    latitude: "",
    longitude: "",
  });

  // ---------------- FETCH PICKUP POINTS ----------------
  const fetchPickupPoints = async () => {
    try {
      const res = await fetch("http://13.61.104.107:8000/mypickuppoints", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) {
        throw new Error("Unauthorized or invalid token");
      }
      const data = await res.json();
      setPickupPoints(data);
      setFilteredPickupPoints(data);
    } catch (err) {
      console.error("Error fetching pickup points:", err);
    }
  };

  // ---------------- CREATE PICKUP POINT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://13.61.104.107:8000/createpickuppoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchPickupPoints();
        document.getElementById("AddPickupPoint").style.display = "none";
        setFormData({
          pickupPointName: "",
          contactName: "",
          contactNumber: "",
          address: "",
          pincode: "",
          city: "",
          state: "",
          email: "",
          addressType: "",
          latitude: "",
          longitude: "",
        });
      } else {
        const errorData = await res.json();
        console.error("Failed to create pickup point:", errorData);
      }
    } catch (err) {
      console.error("Error creating pickup point:", err);
    }
  };

  const handleMobileUpdate = async () => {
    try {
      const response = await fetch(
        `http://13.61.104.107:8000/updatepoint/${selectedPickupPoint._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ contactNumber: newMobile }),
        }
      );

      if (response.ok) {
        alert("Mobile Number Updated Successfully ✅");
        setShowMobileUpdate(false);
        setPickupPoints((prev) =>
          prev.map((p) =>
            p._id === selectedPickupPoint._id
              ? { ...p, contactNumber: newMobile }
              : p
          )
        );
      } else {
        alert("Update Failed ❌");
      }
    } catch (error) {
      console.error("Error updating mobile:", error);
    }
  };

  // ---------------- DELETE PICKUP POINT ----------------
  const deletePickupPoint = async (id) => {
    try {
      const res = await fetch(`http://13.61.104.107:8000/deletepickuppoint/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        await fetchPickupPoints();
      }
    } catch (err) {
      console.error("Error deleting pickup point:", err);
    }
  };

  // ---------------- TOGGLE STATUS ----------------
  const toggleStatus = async (id) => {
    try {
      const res = await fetch(`http://13.61.104.107:8000/status/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        await fetchPickupPoints();
      }
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleApplySearch = () => {
    if (!searchTerm.trim()) {
      setFilteredPickupPoints(pickupPoints);
    } else {
      const lower = searchTerm.toLowerCase();
      setFilteredPickupPoints(
        pickupPoints.filter(
          (p) =>
            p.pickupPointName.toLowerCase().includes(lower) ||
            p.pincode.toString().includes(lower) ||
            p.city.toLowerCase().includes(lower)
        )
      );
    }
  };

  // ---------------- HANDLE FORM INPUT ----------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    fetchPickupPoints();


    const body = document.body;


    // --- GET INFO POPUP ---
    const getInfoBtns = document.querySelectorAll(".get-info-btn");
    const modal = document.getElementById("getInfo");
    const closeBtn = document.getElementById("GetInfoClosePopUp");
    const closeFooterBtn = document.getElementById("GetInfoClosePopUpFooter");

    getInfoBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    [closeBtn, closeFooterBtn].forEach((btn) => {
      btn?.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // --- ADD PICKUP POINT POPUP ---
    const addPickupBtn = document.getElementById("addPickupPointBtn");
    const popup = document.getElementById("AddPickupPoint");
    const closeFormBtn = document.getElementById("closeForm");

    addPickupBtn?.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    closeFormBtn?.addEventListener("click", () => {
      popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

    // --- MOBILE UPDATE POPUP ---
    document.querySelectorAll(".num-update-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("mobileUpdatePopup").classList.add("active");
      });
    });

    const closeMobileUpdateBtn = document.getElementById("closeMobileUpdatePopup");
    closeMobileUpdateBtn?.addEventListener("click", () => {
      document.getElementById("mobileUpdatePopup").classList.remove("active");
    });

    window.addEventListener("click", (e) => {
      const mobilePopup = document.getElementById("mobileUpdatePopup");
      if (e.target === mobilePopup) {
        mobilePopup.classList.remove("active");
      }
    });

    // ✅ Cleanup
    return () => {
    };
  }, []);

  return (
    <>
      {/* Head Elements using Helmet */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        {/* Fonts - Poppins, Inter & Outfit */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </Helmet>

      <Dashboardpage>
        <main className="main">
          <section className="pickup-point">
            <div className="header-row">
              <h2>Pickup Point</h2>
              <button className="add-pickup-point-btn" id="addPickupPointBtn">
                Add Pickup Point
              </button>
            </div>

            <div className="bar-box1">
              <div className="search-bar1">
                <i className="material-symbols-outlined">search</i>
                <input
                  type="text"
                  placeholder="Search by Warehouse Name/Pin code"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="apply-box1">
                <button className="apply-btn1" onClick={handleApplySearch}>
                  Apply
                </button>
              </div>
            </div>


            <div className="pickup-point-data">
              <table className="pickup-point-table">
                <thead>
                  <tr>
                    <th className="first-cell">Pickup Point</th>
                    <th>Contact Name</th>
                    <th>Contact No.</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th className="status-cell">Status</th>
                    <th className="action-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(filteredPickupPoints) && filteredPickupPoints.length > 0 ? (
                    filteredPickupPoints.map((pickup) => (
                      <tr key={pickup._id}>
                        <td>{pickup.pickupPointName}</td>
                        <td>{pickup.contactName}</td>
                        <td>{pickup.contactNumber}</td>
                        <td>{pickup.city}</td>
                        <td>{pickup.pincode}</td>
                        <td className="status-cell">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={pickup.status}
                              onChange={() => toggleStatus(pickup._id)}
                            />
                            <span className="slider"></span>
                          </label>
                        </td>


                        <td className="action-cell">
                          <button
                            className="get-info-btn"
                            onClick={() => {
                              setSelectedPickupPoint(pickup);
                              setShowGetInfo(true);
                            }}
                          >
                            Get Info
                          </button>
                          <button
                            className="num-update-btn"
                            onClick={() => {
                              setSelectedPickupPoint(pickup);
                              setShowMobileUpdate(true);
                            }}
                          >
                            Mobile No. Update
                          </button>
                          <button
                            className="get-info-btn"
                            onClick={() => deletePickupPoint(pickup._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-data">
                        No Pickup Points Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>


          </section>
        </main>

        {/* ADD PickUp Point */}
        <div className="add-pickup-point" id="AddPickupPoint">
          <div className="form">
            <div className="form-header">
              <h3>Add New Pickup Point</h3>
              <span className="close-btn" id="closeForm">
                &times;
              </span>
            </div>

            <form
              id="AddPickupPointForm"
              className="add-pickup-point-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupPointName">Pickup Point Name *</label>
                  <input
                    type="text"
                    id="pickupPointName"
                    value={formData.pickupPointName}
                    onChange={handleChange}
                    placeholder="Pickup Point Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Enter contact Name"
                  />
                </div>


              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number *</label>
                  <input
                    type="number"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter contact NUmber"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="number"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter Pincode"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city Name"
                  />
                </div>

              </div>


              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <select id="state" value={formData.state} onChange={handleChange}>
                    <option value="">Select a State</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="rajasthan">Rajasthan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="latitude">Latitude *</label>
                  <input
                    type="number"
                    id="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="Enter latitude"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="longitude">Longitude *</label>
                  <input
                    type="number"
                    id="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="Enter longitude"
                  />
                </div>


                 <div className="form-group">
                  <label htmlFor="addressType">Address Type *</label>
                  <select
                    id="addressType"
                    value={formData.addressType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Office">Office</option>
                    <option value="Home">Home</option>
                  </select>

                </div>
              </div>
              <hr className="form-divider" />
              <div className="form-footer">
                <button type="submit" className="submit-btn">
                  Add Pickup point
                </button>
              </div>
            </form>
          </div>
        </div>


        {/* GET INFO Pop-Up */}
        {showGetInfo && selectedPickupPoint && (
          <div id="getInfo" className="get-info-popup" style={{ display: "flex" }}>
            <div className="get-info-content">
              <div className="get-info-header">
                <h2>Pickup Point Detail</h2>
                <span
                  className="get-info-close-btn"
                  onClick={() => setShowGetInfo(false)}
                >
                  &times;
                </span>
              </div>
              <div className="get-info-body">
                <div className="info-row">
                  <div className="info-block">
                    <span>Pickup Point Name</span>
                    <p>{selectedPickupPoint.pickupPointName}</p>
                  </div>
                  <div className="info-block">
                    <span>Contact Name</span>
                    <p>{selectedPickupPoint.contactName}</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-block">
                    <span>Phone Number</span>
                    <p>{selectedPickupPoint.contactNumber}</p>
                  </div>
                  <div className="info-block">
                    <span>Address</span>
                    <p>{selectedPickupPoint.address}</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-block">
                    <span>Pincode</span>
                    <p>{selectedPickupPoint.pincode}</p>
                  </div>
                  <div className="info-block">
                    <span>City</span>
                    <p>{selectedPickupPoint.city}</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-block">
                    <span>State</span>
                    <p>{selectedPickupPoint.state}</p>
                  </div>
                </div>
              </div>
              <div className="get-info-footer">

              </div>
            </div>
          </div>
        )}


        {/* Mobile Number Update Pop-Up */}
        {showMobileUpdate && selectedPickupPoint && (
          <div
            className={`mobile-update-popup ${showMobileUpdate ? "active" : ""}`}
            id="mobileUpdatePopup"
          >
            <div className="popup-content">
              <div className="popup-header">
                <h2>Mobile Number Update</h2>
                <span
                  className="close-btn"
                  onClick={() => setShowMobileUpdate(false)}
                >
                  &times;
                </span>
              </div>

              <div className="popup-body">
                <div className="info-row">
                  <div className="info-block">
                    <span className="infoclass">Pickup Point Name</span>
                    <p>{selectedPickupPoint.pickupPointName}</p>
                  </div>
                  <div className="info-block">
                    <span className="infoclass">Contact Name</span>
                    <p>{selectedPickupPoint.contactName}</p>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-block full-width">
                    <span className="infoclass">Phone Number</span>
                    <input
                      type="number"
                      value={newMobile}
                      onChange={(e) => setNewMobile(e.target.value)}
                      placeholder={selectedPickupPoint.contactNumber}
                    />
                  </div>
                </div>
              </div>

              <div className="popup-footer">
                <button className="update-btn" onClick={handleMobileUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

      </Dashboardpage>
    </>
  );
};

export default PickupPointPage;






// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import "./style1.css";
// import logo from "./Images/my_logistix-logo.svg";
// import Dashboardpage from "../Dashboard/dashboardpage";

// const PickupPointPage = () => {
//   const [pickupPoints, setPickupPoints] = useState([]);
//   const [filteredPickupPoints, setFilteredPickupPoints] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showForm, setShowForm] = useState(false); // ✅ for popup form
//   const [formData, setFormData] = useState({
//     pickupPointName: "",
//     contactName: "",
//     contactNumber: "",
//     address: "",
//     pincode: "",
//     city: "",
//     state: "",
//     email: "",
//     addressType: "",
//     latitude: "",
//     longitude: "",
//   });

//   // ---------------- FETCH PICKUP POINTS ----------------
//   const fetchPickupPoints = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/mypickuppoints", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       const data = await res.json();
//       setPickupPoints(data);
//       setFilteredPickupPoints(data);
//     } catch (err) {
//       console.error("Error fetching pickup points:", err);
//     }
//   };

//   // ---------------- CREATE PICKUP POINT ----------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:8000/createpickuppoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         await fetchPickupPoints();
//         setShowForm(false); // ✅ close form
//         setFormData({
//           pickupPointName: "",
//           contactName: "",
//           contactNumber: "",
//           address: "",
//           pincode: "",
//           city: "",
//           state: "",
//           email: "",
//           addressType: "",
//           latitude: "",
//           longitude: "",
//         });
//         alert("Pickup Point Added Successfully ✅");
//       } else {
//         const errorData = await res.json();
//         console.error("Failed to create pickup point:", errorData);
//         alert("Failed to create pickup point ❌");
//       }
//     } catch (err) {
//       console.error("Error creating pickup point:", err);
//     }
//   };

//   const handleSearchChange = (e) => setSearchTerm(e.target.value);
//   const handleApplySearch = () => {
//     if (!searchTerm.trim()) return setFilteredPickupPoints(pickupPoints);
//     const lower = searchTerm.toLowerCase();
//     setFilteredPickupPoints(
//       pickupPoints.filter(
//         (p) =>
//           p.pickupPointName.toLowerCase().includes(lower) ||
//           p.pincode.toString().includes(lower) ||
//           p.city.toLowerCase().includes(lower)
//       )
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   useEffect(() => {
//     fetchPickupPoints();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Pickup Point</title>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//           rel="stylesheet"
//         />
//       </Helmet>

//       <Dashboardpage>
//         <main className="main">
//           <section className="pickup-point">
//             <div className="header-row">
//               <h2>Pickup Point</h2>
//               <button
//                 className="add-pickup-point-btn"
//                 onClick={() => setShowForm(true)} // ✅ open modal
//               >
//                 Add Pickup Point
//               </button>
//             </div>

//             <div className="bar-box1">
//               <div className="search-bar1">
//                 <i className="material-symbols-outlined">search</i>
//                 <input
//                   type="text"
//                   placeholder="Search by Warehouse Name/Pin code"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//               </div>
//               <div className="apply-box1">
//                 <button className="apply-btn1" onClick={handleApplySearch}>
//                   Apply
//                 </button>
//               </div>
//             </div>

//             {/* ✅ Pickup Table */}
//             <div className="pickup-point-data">
//               <table className="pickup-point-table">
//                 <thead>
//                   <tr>
//                     <th className="first-cell">Pickup Point</th>
//                     <th>Contact Name</th>
//                     <th>Contact No.</th>
//                     <th>City</th>
//                     <th>Pincode</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredPickupPoints.length > 0 ? (
//                     filteredPickupPoints.map((pickup) => (
//                       <tr key={pickup._id}>
//                         <td>{pickup.pickupPointName}</td>
//                         <td>{pickup.contactName}</td>
//                         <td>{pickup.contactNumber}</td>
//                         <td>{pickup.city}</td>
//                         <td>{pickup.pincode}</td>
//                         <td>{pickup.status ? "Active" : "Inactive"}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="no-data">
//                         No Records Found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* ✅ Add Pickup Form Popup */}
//           <div className={`form-overlay ${showForm ? "active" : ""}`}>
//             <div className="appointment-form">
//               <div className="appointment-header">
//                 <h3>Register Pickup Point</h3>
//                 <span className="close-btn" onClick={() => setShowForm(false)}>
//                   &times;
//                 </span>
//               </div>

//               <div className="appointment-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="pickupPointName">Pickup Point Name *</label>
//                       <input
//                         type="text"
//                         id="pickupPointName"
//                         value={formData.pickupPointName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="contactName">Contact Name *</label>
//                       <input
//                         type="text"
//                         id="contactName"
//                         value={formData.contactName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="contactNumber">Contact Number *</label>
//                       <input
//                         type="text"
//                         id="contactNumber"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="email">Email</label>
//                       <input
//                         type="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="address">Address *</label>
//                       <input
//                         type="text"
//                         id="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="pincode">Pincode *</label>
//                       <input
//                         type="text"
//                         id="pincode"
//                         value={formData.pincode}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="city">City *</label>
//                       <input
//                         type="text"
//                         id="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="state">State *</label>
//                       <input
//                         type="text"
//                         id="state"
//                         value={formData.state}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="addressType">Address Type</label>
//                       <input
//                         type="text"
//                         id="addressType"
//                         value={formData.addressType}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <hr className="form-divider" />
//                   <div className="form-footer">
//                     <button type="submit" className="appointment-submit-btn">
//                       Add Pickup Point
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <footer>Copyright © 2025 MYLOGISTIX.</footer>
//         </main>
//       </Dashboardpage>
//     </>
//   );
// };

// export default PickupPointPage;
