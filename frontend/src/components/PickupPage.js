import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PickupPage.css'; // Make sure this file matches your provided UI

const PickupPage = () => {
  const [pickupData, setPickupData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    shippingPartner: '',
    warehouse: '',
    expectedPackageCount: '',
    pickupDate: '',
    pickupTime: '',
  });

  // Fetch pickup requests
  const fetchPickups = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/mypickups', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPickupData(res.data);
    } catch (err) {
      console.error('Error fetching pickups:', err);
    }
  };

  useEffect(() => {
    fetchPickups();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/createpickupreq', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowForm(false);
      fetchPickups();
    } catch (err) {
      alert('Failed to add pickup');
    }
  };

  return (
    <div className="container">
      {/* <aside className="sidebar">
        <h3>MYLOGISTIX</h3>
        <ul>
          <li>Dashboard</li>
          <li>My Order</li>
          <li className="active">Pickup Request</li>
          <li>Pickup Point</li>
          <li>Weight Reconciliation</li>
          <li>Delivery Appointment</li>
          <li>NDR & Exceptions</li>
          <li>Rate Calculator</li>
          <li>Finance & COD</li>
          <li>Billing</li>
          <li>Price List</li>
          <li>Integration</li>
          <li>Customer Support</li>
        </ul>
      </aside> */}

      <main className="main-content">
        <header className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Search BY LRN/AWB no" />
          </div>
          <div className="stats">
            <span>Today's Order: 0</span>
            <span>₹ 0.00</span>
            <span>Today's Revenue: ₹ 0k</span>
            <span>Today's Shipping: 0 kg</span>
          </div>
          <div className="user-info">Welcome Patel</div>
        </header>

        <div className="pickup-header">
          <h2>
            Pickup <span className="highlight">Request</span>
          </h2>
          <button className="add-btn" onClick={() => setShowForm(true)}>
            Add Request
          </button>
        </div>

        <input className="pickup-search" placeholder="Pickup Request Id" />

        <table className="pickup-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Pickup Point</th>
              <th>Date</th>
              <th>Count</th>
              <th>Warehouse</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            {pickupData.map((item) => (
              <tr key={item._id}>
                <td className="link">{item._id.slice(0, 9)}</td>
                <td>
                  CW 2<br />
                  E 39 SUMEL 6 NEAR HANUMANPURA BRTS DUDHESHWAR, Ahmedabad
                </td>
                <td>
                  {new Date(item.pickupDate).toLocaleDateString()}<br />
                  {item.pickupTime}
                </td>
                <td>{item.expectedPackageCount}</td>
                <td>{item.warehouse}</td>
                <td>
                  {item.shippingPartner}
                  <br />
                  <small>small</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showForm && (
        <div className="modal">
          <div className="modal-box">
            <div className="modal-header">
              <h3>New Pickup Request</h3>
              <button onClick={() => setShowForm(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <label>Shipping Partner *</label>
                <select name="shippingPartner" onChange={handleChange}>
                  <option value="">Please select</option>
                  <option value="DELHIVERY">DELHIVERY</option>
                  <option value="EKART">EKART</option>
                </select>

                <label>Warehouse *</label>
                <input name="warehouse" onChange={handleChange} />
              </div>
              <div className="form-row">
                <label>Expected Package count *</label>
                <input
                  name="expectedPackageCount"
                  type="number"
                  onChange={handleChange}
                />

                <label>Pickup Date *</label>
                <input
                  name="pickupDate"
                  type="date"
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Pickup Time *</label>
                <select name="pickupTime" onChange={handleChange}>
                  <option>01:00 pm - 03:00 pm</option>
                  <option>03:00 pm - 05:00 pm</option>
                  <option>05:00 pm - 07:00 pm</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={handleSubmit} className="submit-btn">
                Add Pickup Request
              </button>
              <button onClick={() => setShowForm(false)}>Cancel Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickupPage;
