
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./style.css";
import logo from "./Images/my_logistix-logo.svg";
import deliveryMap from "./Images/delivery-map.svg";
import delhiveryLogo from "./Images/delhivery_small-logo.svg";
import Dashboardpage from "../Dashboard/dashboardpage"

export default function RateCalculator() {
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const toggleIconRef = useRef(null);
  const wrapperRef = useRef(null);

  // ---------------- STATE ----------------
  const [count, setCount] = useState(1);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    pickupPincode: "",
    deliveryPincode: "",
    weight: "",
    qty: "",
    length: "",
    width: "",
    height: "",
    paymentMode: "",
    invoiceValue: "",
    insurance: false,
    appointmentDelivery: false,
  });
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

 
  // ---------------- FORM LOGIC ----------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post("http://localhost:8000/calculate-rates", formData);
      setRates(res.data.rates || []);
      setMessage("Rates calculated successfully ✅");
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to calculate rates ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      pickupPincode: "",
      deliveryPincode: "",
      weight: "",
      qty: "",
      length: "",
      width: "",
      height: "",
      paymentMode: "",
      invoiceValue: "",
      insurance: false,
      appointmentDelivery: false,
    });
    setRates([]);
    setMessage("");
    setError("");
  };

  // ---------------- DROPDOWN ----------------
  const toggleDropdown = (index) => {
    const panel = document.getElementById(`panel-${index}`);
    const btn = document.getElementById(`btn-${index}`);
    if (!panel || !btn) return;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      btn.innerHTML = "Charges Bifurcation ↓";
    } else {
      panel.style.display = "block";
      btn.innerHTML = "Charges Bifurcation ↑";
    }
  };

  // ---------------- UI ----------------
  return (
    <>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
    
          
     <Dashboardpage>
     

      {/* MAIN CONTENT */}
      <main className="rate-calculator-main">
        <section className="rate-calculator-section">
          <div className="header-row">
            <h2 className="title">Shipping Rate Calculator</h2>
          </div>

          <div className="rate-container">
            {/* ✅ FORM */}
            <div className="calculator-box">
              <form id="CalculatorForm" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="upper-box">
                  <div className="input-box">
                    <div className="input-group">
                      <label>Origin Pincode *</label>
                      <input
                        type="text"
                        name="pickupPincode"
                        placeholder="Origin Pincode"
                        value={formData.pickupPincode}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label>Destination Pincode *</label>
                      <input
                        type="text"
                        name="deliveryPincode"
                        placeholder="Destination Pincode"
                        value={formData.deliveryPincode}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label>Payment Mode *</label>
                      <select
                        name="paymentMode"
                        value={formData.paymentMode}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Payment Mode</option>
                        <option value="Prepaid">Prepaid</option>
                        <option value="COD">COD</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label>Approx Weight (Kg) *</label>
                      <input
                        type="number"
                        name="weight"
                        placeholder="Weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label>Invoice Value *</label>
                      <input
                        type="number"
                        name="invoiceValue"
                        placeholder="Invoice Value"
                        value={formData.invoiceValue}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* DIMENSIONS */}
                  <div className="dimensions-box">
                    <p>Dimensions in cms</p>
                    <div id="dimensions-wrapper">
                      {[...Array(count)].map((_, i) => (
                        <div className="dimensions-content" key={i}>
                          <div className="dimensions-group">
                            <label>QTY *</label>
                            <input
                              type="number"
                              name="qty"
                              placeholder="Qty"
                              value={formData.qty}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="dimensions-group">
                            <label>Height *</label>
                            <input
                              type="number"
                              name="height"
                              placeholder="H"
                              value={formData.height}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="dimensions-group">
                            <label>Length *</label>
                            <input
                              type="number"
                              name="length"
                              placeholder="L"
                              value={formData.length}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="dimensions-group">
                            <label>Width *</label>
                            <input
                              type="number"
                              name="width"
                              placeholder="W"
                              value={formData.width}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="dimensions-btn-part">
                      <button
                        type="button"
                        className="add-more-btn"
                        onClick={() => count < 3 && setCount(count + 1)}
                      >
                        Add More
                      </button>
                      {count > 1 && (
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => setCount(count - 1)}
                        >
                          <i className="material-symbols-outlined close-btn">close</i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* MIDDLE BOX */}
                <div className="middle-box">
                  <div className="checkbox-group">
                    <span>Insurance ?</span>
                    <div className="check-box">
                      <label>
                        <input
                          type="radio"
                          name="insurance"
                          value="yes"
                          checked={formData.insurance === true}
                          onChange={() => setFormData({ ...formData, insurance: true })}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="insurance"
                          value="no"
                          checked={formData.insurance === false}
                          onChange={() => setFormData({ ...formData, insurance: false })}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div className="checkbox-group">
                    <span>Appointment Based Delivery ?</span>
                    <div className="check-box">
                      <label>
                        <input
                          type="radio"
                          name="appointmentDelivery"
                          value="yes"
                          checked={formData.appointmentDelivery === true}
                          onChange={() =>
                            setFormData({ ...formData, appointmentDelivery: true })
                          }
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="appointmentDelivery"
                          value="no"
                          checked={formData.appointmentDelivery === false}
                          onChange={() =>
                            setFormData({ ...formData, appointmentDelivery: false })
                          }
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="buttons-box">
                  <button type="submit" className="calculate-btn">
                    {loading ? "Calculating..." : "Calculate"}
                  </button>
                  <button type="reset" className="reset-btn">Reset</button>
                </div>
              </form>
            </div>

            {/* ✅ RESULTS */}
            <div className="partners-box">
              <div className="delivery-map">
                <h3>Our Delivery Partners</h3>
                <div className="map-container">
                  <img src={deliveryMap} alt="India Map" />
                </div>
              </div>

              <div className="delivery-summary">
                {message && <p style={{ color: "green" }}>{message}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {rates.map((rate, i) => (
                  <div key={i} className="delivery-both">
                    <div className="delivery-type">
                      <div className="delivery-logo">
                        <img src={delhiveryLogo} alt="logo" />
                      </div>
                      <div className="delivery-content">
                        <div className="delivery-description">
                          <div className="delivery-left">
                            <span className="delivery-company-name">{rate.companyName}</span>
                            <span className="delivery-weight">Charged Wt: {rate.chargedWeight}Kg</span>
                          </div>
                          <div className="delivery-right">
                            <span className="delivery-price">₹ {rate.totalRate}</span>
                            <span className="delivery-charges">
                              Min Amt: {rate.minAmount || "350+GST"}
                            </span>
                          </div>
                        </div>
                        <div className="delivery-button">
                          <button
                            className="dropdown-button"
                            id={`btn-${i}`}
                            onClick={() => toggleDropdown(i)}
                          >
                            <span>Charges Bifurcation</span>
                            <i className="material-symbols-outlined dropdown-icon">south</i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      id={`panel-${i}`}
                      className="delivery-description-panel"
                      style={{ display: "none" }}
                    >
                      <ul className="description-list">
                        {Object.entries(rate.breakdown).map(([k, v]) => (
                          <li key={k}>
                            <p>{k}:</p>
                            <p>₹ {v}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
      </main>

      </Dashboardpage>

    </>
  );
}
