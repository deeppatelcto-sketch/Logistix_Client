

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./style.css";
import logo from './Images/my_logistix-logo.svg'
import Dashboardpage from "../Dashboard/dashboardpage"

export default function MyOrders() {
  const [formData, setFormData] = useState({
    weight: "",
    length: "",
    width: "",
    height: "",
    qty: "",
    paymentMode: "prepaid",
    invoiceValue: "",
    insurance: false,
    appointmentDelivery: false,
    pickupPincode: "",
    deliveryPincode: "",
  });

  const [rates, setRates] = useState([]);
  const [zone, setZone] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // === HANDLE FORM INPUT ===
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // === FETCH RATES ===
  const handleSearchPartners = async () => {
    const { pickupPincode, deliveryPincode, weight } = formData;
    if (!pickupPincode || !deliveryPincode || !weight) {
      alert("Please fill Pickup Pincode, Delivery Pincode and Weight");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8000/calculate-rates",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // backend should return { rates: [...], zone: "X" }
      setRates(res.data.rates || []);
      setZone(res.data.zone || "");
      setStep(2);
    } catch (err) {
      console.error("Error fetching rates:", err.response?.data || err);
      alert("Failed to fetch courier partners");
    } finally {
      setLoading(false);
    }
  };

  // === CREATE ORDER ===
  const handleSelectCourier = async (partner) => {
    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...formData,
        zone,
        finalRate: partner.totalRate,
        selectedCourierCompany: partner.companyName,
        status: "pending",
      };

      const res = await axios.post(
        "http://localhost:8000/create-order",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(`✅ Order Created: ${res.data?.order?.orderId || "Success"}`);
      setStep(3);
    } catch (err) {
      console.error("Error creating order:", err.response?.data || err);
      alert("Failed to create order");
    }
  };




  // === Helper for currency format ===
  const formatCurrency = (val) => parseFloat(val || 0).toFixed(2);

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


      <Helmet>
        <title>My Orders</title>
      </Helmet>
      <Dashboardpage>
        <main className="my-orders-main">
          <section className="my-orders-section">
            {/* Progress Steps */}
            <div className="page-header">
              <span className={`step ${step === 1 ? "active" : ""}`} data-step="1">
                Create New Order
              </span>
              <span className="separator"> - </span>
              <span className={`step ${step === 2 ? "active" : ""}`} data-step="2">
                Choose Shipping Partners
              </span>
              <span className="separator"> - </span>
              <span className={`step ${step === 3 ? "active" : ""}`} data-step="3">
                Order Created
              </span>
            </div>

            {/* STEP 1: FORM */}
            {step === 1 && (
              <div className="cno-container active ">
                <h1>Create New Order</h1>
                <div className="divider1"></div>

                {/* Weight & Dimensions */}
                <div className="wd-box">
                  <div className="title">
                    <h5>Weight & Dimensions (In cm)</h5>
                  </div>

                  <div className="input-boxes">
                    <div className="input-group">
                      <div className="name-box">
                        <i className="material-symbols-outlined">weight</i>
                        <span>Weight</span>
                      </div>
                      <div className="input-box">
                        <input
                          type="text"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder="Weight"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="name-box">
                        <i className="material-symbols-outlined">straighten</i>            
                        <span>Length</span>
                      </div>
                      <div className="input-box">
                        <input
                          type="text"
                          name="length"
                          value={formData.length}
                          onChange={handleChange}
                          placeholder="Length"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="name-box">
                        <i className="material-symbols-outlined">width_normal</i>
                        <span>Width</span>
                      </div>
                      <div className="input-box">
                        <input
                          type="text"
                          name="width"
                          value={formData.width}
                          onChange={handleChange}
                          placeholder="Width"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="name-box">
                        <i className="material-symbols-outlined">height</i>
                        <span>Height</span>
                      </div>
                      <div className="input-box">
                        <input
                          type="text"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          placeholder="Height"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <div className="name-box">
                        <i className="material-symbols-outlined">person_play</i>
                        <span>Qty</span>
                      </div>
                      <div className="input-box">
                        <input
                          type="text"
                          name="qty"
                          value={formData.qty}
                          onChange={handleChange}
                          placeholder="Qty"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggle Sections */}
                <div className="toggle-boxes">
                  {/* Mode & Invoice */}
                  <div className="toggle-box">
                    <div className="toggle-title">
                      <p>Mode & Invoice Details</p>
                    </div>
                    <div className="toggle-content input-boxes">
                      <div className="input-group">
                        <div className="name-box">
                          <i className="material-symbols-outlined">payments</i>
                          <span>Payment Mode</span>
                        </div>
                        <div className="input-box">       
                          <select
                            name="paymentMode"
                            value={formData.paymentMode}
                            onChange={handleChange}
                          >
                            <option value="prepaid">Prepaid</option>
                            <option value="cod">COD</option>
                          </select>
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="name-box">
                          <i className="material-symbols-outlined">receipt_long</i>
                          <span>Invoice Value</span>
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            name="invoiceValue"
                            value={formData.invoiceValue}
                            onChange={handleChange}
                            placeholder="Enter Invoice Value"         
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insurance + Appointment */}
                  <div className="toggle-box">
                    <div className="upper-toggle">
                      <div className="toggle-title">
                        <p>Insurance ?</p>
                        <div className="check-box">
                            <input
                              type="radio"
                              name="insurance"
                              checked={formData.insurance === true}
                              onChange={() => setFormData({ ...formData, insurance: true })}
                            />
                            <span className="spanclass">Yes</span>
                            <input
                              type="radio"
                              name="insurance"
                              checked={formData.insurance === false}
                              onChange={() => setFormData({ ...formData, insurance: false })}
                            />
                            <span className="spanclass">No</span>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="bottom-toggle">
                      <div className="toggle-title">
                        <p>Appointment Base Delivery</p>
                      </div>
                      <div className="switch-toggle">
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="appointmentDelivery"
                            checked={formData.appointmentDelivery}
                            onChange={handleChange}
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Pickup & Delivery */}
                  <div className="toggle-box">
                    <div className="toggle-title">
                      <p>Pickup & Destination Details</p>      
                    </div>
                    <div className="toggle-content input-boxes">
                      <div className="input-group">
                        <div className="name-box">
                          <i className="material-symbols-outlined">location_on</i>
                          <span>Pickup Pincode</span>
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            name="pickupPincode"
                            value={formData.pickupPincode}
                            onChange={handleChange}
                            placeholder="Origin Pincode"
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="name-box">
                          <i className="material-symbols-outlined">flag</i>
                          <span>Delivery Pincode</span>
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            name="deliveryPincode"
                            value={formData.deliveryPincode}
                            onChange={handleChange}
                            placeholder="Destination Pincode"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Buttons */}
                <div className="buttons-box">
                  <button
                    onClick={handleSearchPartners}
                    className="search-btn"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Search Partner"}
                  </button>
                  <button
                    type="reset"
                    className="reset-btn"
                    onClick={() =>
                      setFormData({
                        weight: "",
                        length: "",
                        width: "",
                        height: "",
                        qty: "",
                        paymentMode: "prepaid",
                        invoiceValue: "",
                        insurance: false,
                        appointmentDelivery: false,
                        pickupPincode: "",
                        deliveryPincode: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </div>
              </div>

            )}

            {/* STEP 2: RATES DISPLAY */}
            {step === 2 && (
              <div className="shipping-partners active">
                {/* Back Button */}
                <button onClick={() => setStep(1)} className="back-button">
                  <i className="material-symbols-outlined">reply</i>
                  Back To Create Shipment
                </button>

                {/* Shipment Info Section */}
                <div className="shipping-infobox">
                  <div className="location-infobox">
                    <div className="pickup-info">
                      <p>Pickup From</p>
                      <p>{formData.pickupPincode}, Gujarat</p>
                    </div>

                    <div className="arrow-box">
                      <i className="material-symbols-outlined">east</i>
                    </div>

                    <div className="delivery-info">
                      <p>Deliver To</p>
                      <p>{formData.deliveryPincode}, Gujarat</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="order-infobox">
                    <div className="order-box">
                      <p>Order Value</p>
                      <p>₹{formData.invoiceValue || 0}</p>
                    </div>
                    <div className="order-box">
                      <p>Payment Mode</p>
                      <p>{formData.paymentMode?.toUpperCase()}</p>
                    </div>
                    <div className="order-box">
                      <p>Weight</p>
                      <p>{formData.weight || 0} Kg</p>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="select-section">
                  <div className="left-section">
                    <button className="all-btn">ALL Mode</button>
                    <button className="all-btn">ALL Shipping Partner</button>
                    <button className="all-btn">ALL Rating</button>
                  </div>
                  <div className="right-section">
                    <button className="clear-btn">Clear All</button>
                  </div>
                </div>

                {/* Courier Partners Section */}
                {rates.length > 0 ? (
                  rates.map((r, idx) => (
                    <div key={idx} className="order-final-section">
                      <div className="order-content-section">
                        {/* Left Content */}
                        <div className="left-content">
                          <div className="logo-box">
                            <div className="company-logo">
                              <img src={r.companiesLogo} alt={r.companyName} width="60" />
                            </div>
                            <span>
                              {r.companyName} <br /> {formData.weight} Kg B2C
                            </span>
                          </div>

                          <div className="charges-section">
                            <div className="charges-box">
                              <span>Charges</span>
                              <div className="charges-group">
                                <div className="charges-row">
                                  <p>Weight Charge :</p>
                                  <p>₹{formatCurrency(r.breakdown.weightCharge)}</p>
                                </div>
                                <div className="charges-row">
                                  <p>Fuel Charge :</p>
                                  <p>₹{formatCurrency(r.breakdown.fuelCharge)}</p>
                                </div>
                                <div className="charges-row">
                                  <p>Freight Charge :</p>
                                  <p>₹{formatCurrency(r.breakdown.freight|| 0)}</p>
                                </div>
                                <div className="charges-row">
                                  <p>COD Charge :</p>
                                  <p>₹{formatCurrency(r.breakdown.codCharge || 0)}</p>
                                </div>
                              </div>
                            </div>

                            <div className="additional-box">
                              <span>Additional</span>
                              <div className="additional-group">
                                <div className="charges-row">
                                  <p>+ GST :</p>
                                  <p>₹{formatCurrency(r.breakdown.gst)}</p>
                                </div>
                                <div className="charges-row">
                                  <p>Vol. Weight :</p>
                                  <p>{r.breakdown.volWeight || 0} Kg</p>
                                </div>
                                <div className="charges-row">
                                  <p>Charged Weight :</p>
                                  <p>{r.breakdown.chargedWeight || 0} Kg</p>
                                </div>
                                <div className="charges-row">
                                  <p>Minimum Weight :</p>
                                  <p>{r.breakdown.minWeight || 0} Kg</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="middle-divider"></div>

                        {/* Right Content */}
                        <div className="right-content">
                          <div className="confirm-section">
                            <div className="price-box">
                              <p>₹ {formatCurrency(r.totalRate)}</p>
                            </div>

                            <div className="zone-box">
                              <p>Zone :</p>
                              <i className="material-symbols-outlined">location_on</i>
                              <p>{zone}</p>
                            </div>

                            {/* Rating Stars */}
                            <div className="rating-box">
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star half">&#9733;</span>
                            </div>

                            <button onClick={() => handleSelectCourier(r)} className="select-btn">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Extra Description */}
                      <div className="order-description-section">   
                        <div className="left-description">
                          <div className="description-box">
                            <i className="material-symbols-outlined">travel_explore</i>
                            <p>Real Time Tracking</p>
                          </div>
                          <div className="description-box">
                            <i className="material-symbols-outlined">phone_in_talk</i>
                            <p>Call Before Delivery : Available</p>
                          </div>
                          <div className="description-box">
                            <i className="material-symbols-outlined">payments</i>
                            <p>POD : Instant</p>
                          </div>
                        </div>
                        <div className="right-description">
                          <div className="description-box">
                            <p>Estimated Delivery :</p>
                            <p className="date">{r.estimatedDelivery || "06 Mar, 2025"}</p>
                          </div>
                          <div className="description-box">
                            <p>Pickup :</p>
                            <p className="day">{r.pickupDay || "Tomorrow"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No courier partners found</p>
                )}
              </div>
            )}


            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <div className="cno-container active">
                <h2>✅ Order Created Successfully!</h2>
              </div>
            )}


          </section>
        </main>
      </Dashboardpage>
    </>
  );
}





