


// import React, { useEffect, useState } from 'react';
// import './PickupRequest.css';
// import logo from './Images/my_logistix-logo.svg';
// import axios from 'axios';
// import Dashboardpage from "../Dashboard/dashboardpage"

// const PickupRequest = () => {
//   const [pickupData, setPickupData] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const [formData, setFormData] = useState({
//     shippingPartner: '',
//     warehouse: '',
//     expectedPackageCount: '',
//     pickupDate: '',
//     pickupTime: '',
//   });


//   const [filters, setFilters] = useState({
//     requestId: "",
//     pickupDate: "",
//   });


//   // Fetch all pickups
//   const fetchPickups = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:8000/mypickups', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setPickupData(res.data);
//     } catch (err) {
//       console.error('Error fetching pickups:', err);
//     }
//   };

//   useEffect(() => {
//     fetchPickups();

//     setTimeout(() => {
//       const addRequestBtn = document.getElementById('addRequestBtn');
//       const formOverlay = document.getElementById('formOverlay');
//       const closeForm = document.getElementById('closeForm');
//       const form = document.querySelector('.form');

//       const hideForm = () => {
//         form.classList.remove('fade-in');
//         form.classList.add('fade-out');
//         setTimeout(() => {
//           formOverlay.style.display = 'none';
//           form.classList.remove('fade-out');
//         }, 300);
//       };

//       const openForm = () => {
//         formOverlay.style.display = 'flex';
//         form.classList.add('fade-in');
//       };

//       addRequestBtn?.addEventListener('click', openForm);
//       closeForm?.addEventListener('click', hideForm);

//       return () => {
//         addRequestBtn?.removeEventListener('click', openForm);
//         closeForm?.removeEventListener('click', hideForm);
//       };
//     }, 0);
//   }, []);



//   // Handle form input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id === 'partner' ? 'shippingPartner' :
//         id === 'wareHouse' ? 'warehouse' :
//           id === 'packageCount' ? 'expectedPackageCount' :
//             id]: value,
//     }));
//   };

//   // Submit new pickup
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.shippingPartner || !formData.warehouse || !formData.expectedPackageCount || !formData.pickupDate || !formData.pickupTime) {
//       alert('All fields are required');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:8000/createpickupreq', formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Pickup request added');
//       setFormData({
//         shippingPartner: '',
//         warehouse: '',
//         expectedPackageCount: '',
//         pickupDate: '',
//         pickupTime: '',
//       });
//       document.getElementById('formOverlay').style.display = 'none';
//       fetchPickups();
//     } catch (err) {
//       console.error('Failed to add pickup', err);
//       alert('Failed to add pickup');
//     }
//   };

//   return (
//     <>

//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet"
//       />
//       <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />


//       <Dashboardpage>
//         <main className="main">
//           <section className="pickup-request">
//             <div className="header-row">
//               <h2 className="pick-req">Pickup Request</h2>
//               <button className="add-request-btn" onClick={() => setShowForm(true)}>Add Request</button>
//             </div>

//             <div className="filter-section">
//               <div className="pickup-part">
//                 <input
//                   className="pickup-req-id"
//                   type="text"
//                   placeholder="Pickup Request Id"
//                   value={filters.requestId}
//                   onChange={(e) => setFilters({ ...filters, requestId: e.target.value })}
//                 />
//                 <input
//                   className="pickup-date"
//                   type="date"
//                   placeholder="Pickup Date"
//                   value={filters.pickupDate}
//                   onChange={(e) => setFilters({ ...filters, pickupDate: e.target.value })}
//                 />
//               </div>

//               <div className="button-part">
//                 <button
//                   type="button"
//                   className="apply-btn"
//                   onClick={() => {
//                     let filtered = pickupData;

//                     if (filters.requestId) {
//                       filtered = filtered.filter((item) =>
//                         item.requestId.toLowerCase().includes(filters.requestId.toLowerCase())
//                       );
//                     }

//                     if (filters.pickupDate) {
//                       const selectedDate = new Date(filters.pickupDate).toLocaleDateString();
//                       filtered = filtered.filter(
//                         (item) =>
//                           new Date(item.pickupDate).toLocaleDateString() === selectedDate
//                       );
//                     }

//                     setPickupData(filtered);
//                   }}
//                 >
//                   Apply
//                 </button>

//                 <button
//                   type="button"
//                   className="clear-btn"
//                   onClick={() => {
//                     setFilters({ requestId: "", pickupDate: "" });
//                     fetchPickups();
//                   }}
//                 >
//                   Clear
//                 </button>
//               </div>

//             </div>

//             <div className="pickup-data">
//               {/* <table className="pickup-data-table">
//               <thead>
//                 <tr>
//                   <th className="first-cell">Request ID</th>
//                   <th className="first-cell">Warehouse</th>
//                   <th className="first-cell">Pickup Date & Time</th>
//                   <th className="first-cell">Package Count</th>
//                   <th className="last-cell">Delivery Partner</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pickupData.map((item) => (
//                   <tr key={item._id}>
//                     <td className="first-column">
//                          <a href="#" className="request-id">{item.requestId}</a>
//                       <span className="request-date">
//                         {new Date(item.createdAt).toLocaleDateString()}
//                       </span>
//                     </td>
//                     <td className="second-column">                 
//                       <p className="pickup-address">{item.warehouse}</p>
//                     </td>
//                     <td className="third-column">
//                       <span className="pickup-dates">
//                         {new Date(item.pickupDate).toLocaleDateString()}
//                       </span>
//                       <span className="pickup-time">{item.pickupTime}</span>
//                     </td>
//                     <td className="fourth-column">
//                       <span className="package-count">{item.expectedPackageCount}</span>
//                     </td>
//                     <td className="fifth-column">
//                       <span className="delivery-company">{item.shippingPartner}</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table> */}

//               <table className="pickup-data-table">
//                 <thead>
//                   <tr>
//                     <th className="first-cell">Request ID</th>
//                     <th>Warehouse</th>
//                     <th>Pickup Date & Time</th>
//                     <th>Package Count</th>
//                     <th className="last-cell">Delivery Partner</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {pickupData.map((item) => (
//                     <tr key={item._id}>
//                       <td className="first-cell">
//                         <a href="#" className="request-id">{item.requestId}</a>
//                         <span className="request-date">
//                           {new Date(item.createdAt).toLocaleDateString()}
//                         </span>
//                       </td>
//                       <td>
//                         <p className="pickup-address">{item.warehouse}</p>
//                       </td>
//                       <td>
//                         <span className="pickup-dates">
//                           {new Date(item.pickupDate).toLocaleDateString()}
//                         </span>
//                         <span className="pickup-time">{item.pickupTime}</span>
//                       </td>
//                       <td>
//                         <span className="package-count">{item.expectedPackageCount}</span>
//                       </td>
//                       <td className="last-cell">
//                         <span className="delivery-company">{item.shippingPartner}</span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//             </div>
//           </section>
//         </main>

//         {/* Pickup Request Form Modal */}
//         {showForm && (

//           <div className="form-overlay" id="formOverlay">
//             <div className="form">
//               <div className="form-header">
//                 <h3>New Pickup Request</h3>
//                 <span className="close-btn" id="closeForm">&times;</span>
//               </div>
//               <form className="pickupRequestForm" onSubmit={handleSubmit}>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="partner">Shipping Partner *</label>
//                     <select id="partner" required onChange={handleChange} value={formData.shippingPartner}>
//                       <option value="">Please select</option>
//                       <option value="DELHIVERY">DELHIVERY</option>
//                       <option value="EKART">EKART</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="wareHouse">Warehouse *</label>
//                     <input type="text" id="wareHouse" placeholder="Enter Warehouse" required onChange={handleChange} value={formData.warehouse} />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="packageCount">Expected Package Count *</label>
//                     <input type="number" id="packageCount" placeholder="Enter Expected Package Count" onChange={handleChange} value={formData.expectedPackageCount} required />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="pickupDate">Pickup Date *</label>
//                     <input type="date" id="pickupDate" onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })} value={formData.pickupDate} required />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="pickupTime">Pickup Time *</label>
//                     <select id="pickupTime" onChange={handleChange} value={formData.pickupTime} required>
//                       <option value="">Select Time</option>
//                       <option value="01:00 pm - 03:00 pm">01:00 pm - 03:00 pm</option>
//                       <option value="03:00 pm - 05:00 pm">03:00 pm - 05:00 pm</option>
//                       <option value="05:00 pm - 07:00 pm">05:00 pm - 07:00 pm</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-footer">
//                   <button type="submit" className="submit-btn">Add Pickup Request</button>
//                 </div>
//               </form>
//             </div>
//           </div>

//         )}

//       </Dashboardpage>

      
//     </>
//   );
// };

// export default PickupRequest;







import React, { useEffect, useState } from 'react';
import './PickupRequest.css';
import logo from './Images/my_logistix-logo.svg';
import axios from 'axios';
import Dashboardpage from "../Dashboard/dashboardpage";

const PickupRequest = () => {
  const [pickupData, setPickupData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    shippingPartner: '',
    warehouse: '',
    expectedPackageCount: '',
    pickupDate: '',
    pickupTime: '',
  });

  const [filters, setFilters] = useState({
    requestId: "",
    pickupDate: "",
  });

  // ====================== FETCH PICKUPS ======================
  const fetchPickups = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/mypickups', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPickupData(res.data);
    } catch (err) {
      console.error('Error fetching pickups:', err);
    }
  };

  useEffect(() => {
    fetchPickups();
  }, []);

  // ====================== HANDLE FORM CHANGE ======================
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === 'partner' ? 'shippingPartner' :
        id === 'wareHouse' ? 'warehouse' :
          id === 'packageCount' ? 'expectedPackageCount' :
            id]: value,
    }));
  };

  // ====================== HANDLE FORM SUBMIT ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.shippingPartner || !formData.warehouse || !formData.expectedPackageCount || !formData.pickupDate || !formData.pickupTime) {
      alert('All fields are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/createpickupreq', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Pickup request added');

      // Refresh list
      fetchPickups();

      // Reset form
      setFormData({
        shippingPartner: '',
        warehouse: '',
        expectedPackageCount: '',
        pickupDate: '',
        pickupTime: '',
      });

      // ✅ Close modal
      setShowForm(false);
    } catch (err) {
      console.error('Failed to add pickup', err);
      alert('Failed to add pickup');
    }
  };

  return (
    <>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

      <Dashboardpage>
        <main className="main">
          <section className="pickup-request">
            <div className="header-row">
              <h2 className="pick-req">Pickup Request</h2>
              <button
                className="add-request-btn"
                onClick={() => setShowForm(true)} // ✅ opens form
              >
                Add Request
              </button>
            </div>

            {/* Filters */}
            <div className="filter-section">
              <div className="pickup-part">
                <input
                  className="pickup-req-id"
                  type="text"
                  placeholder="Pickup Request Id"
                  value={filters.requestId}
                  onChange={(e) => setFilters({ ...filters, requestId: e.target.value })}
                />
                <input
                  className="pickup-date"
                  type="date"
                  placeholder="Pickup Date"
                  value={filters.pickupDate}
                  onChange={(e) => setFilters({ ...filters, pickupDate: e.target.value })}
                />
              </div>

              <div className="button-part">
                <button
                  type="button"
                  className="apply-btn"
                  onClick={() => {
                    let filtered = pickupData;
                    if (filters.requestId) {
                      filtered = filtered.filter((item) =>
                        item.requestId.toLowerCase().includes(filters.requestId.toLowerCase())
                      );
                    }
                    if (filters.pickupDate) {
                      const selectedDate = new Date(filters.pickupDate).toLocaleDateString();
                      filtered = filtered.filter(
                        (item) =>
                          new Date(item.pickupDate).toLocaleDateString() === selectedDate
                      );
                    }
                    setPickupData(filtered);
                  }}
                >
                  Apply
                </button>

                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => {
                    setFilters({ requestId: "", pickupDate: "" });
                    fetchPickups();
                  }}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="pickup-data">
              <table className="pickup-data-table">
                <thead>
                  <tr>
                    <th className="first-cell">Request ID</th>
                    <th>Warehouse</th>
                    <th>Pickup Date & Time</th>
                    <th>Package Count</th>
                    <th className="last-cell">Delivery Partner</th>
                  </tr>
                </thead>
                <tbody>
                  {pickupData.length > 0 ? (
                    pickupData.map((item) => (
                      <tr key={item._id}>
                        <td className="first-cell">
                          <a href="#" className="request-id">{item.requestId}</a>
                          <span className="request-date">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td>
                          <p className="pickup-address">{item.warehouse}</p>
                        </td>
                        <td>
                          <span className="pickup-dates">
                            {new Date(item.pickupDate).toLocaleDateString()}
                          </span>
                          <span className="pickup-time">{item.pickupTime}</span>
                        </td>
                        <td>
                          <span className="package-count">{item.expectedPackageCount}</span>
                        </td>
                        <td className="last-cell">
                          <span className="delivery-company">{item.shippingPartner}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        No Records Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* ✅ FORM OVERLAY (Same style as DeliveryAppointment) */}
          <div className={`form-overlay ${showForm ? "active" : ""}`}>
            <div className="appointment-form">
              <div className="appointment-header">
                <h3>Add Pickup Request</h3>
                <span className="close-btn" onClick={() => setShowForm(false)}>
                  &times;
                </span>
              </div>

              <div className="appointment-body">
                <form className="add-pickup-point-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="partner">Shipping Partner *</label>
                      <input
                        type="text"
                        id="partner"
                        value={formData.shippingPartner}
                        onChange={handleChange}
                        placeholder="Enter Shipping Partner"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="wareHouse">Warehouse *</label>
                      <input
                        type="text"
                        id="wareHouse"
                        value={formData.warehouse}
                        onChange={handleChange}
                        placeholder="Enter Warehouse"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="packageCount">Expected Package Count *</label>
                      <input
                        type="number"
                        id="packageCount"
                        value={formData.expectedPackageCount}
                        onChange={handleChange}
                        placeholder="Enter Package Count"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pickupDate">Pickup Date *</label>
                      <input
                        type="date"
                        id="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pickupTime">Pickup Time *</label>
                      <input
                        type="time"
                        id="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <hr className="form-divider" />
                  <div className="form-footer">
                    <button type="submit" className="appointment-submit-btn">
                      Add Request
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
};

export default PickupRequest;
