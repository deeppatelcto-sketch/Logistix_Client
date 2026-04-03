


// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./style.css";
// import logo from './Images/my_logistix-logo.svg'

// export default function MyOrders() {
//   useEffect(() => {
//     // === SIDEBAR - TOGGLE BUTTON AUTO:POSITION LOGIC === //
//     function updateToggleButtonPosition() {
//       const toggleBtn = document.getElementById("toggleBtn");
//       const sidebar = document.getElementById("sidebar");
//       if (!toggleBtn || !sidebar) return;

//       if (sidebar.classList.contains("collapsed")) {
//         toggleBtn.style.left = "44px";
//       } else {
//         toggleBtn.style.left = "214px";
//       }
//     }

//     // === SIDEBAR - AUTO CLOSE BELOW WIDTH: 768px LOGIC === //
//     function setInitialSidebarState() {
//       const sidebar = document.getElementById("sidebar");
//       const body = document.body;

//       if (window.innerWidth < 768) {
//         body.classList.add("sidebar-collapsed");
//         sidebar?.classList.add("collapsed");
//       } else {
//         body.classList.remove("sidebar-collapsed");
//         sidebar?.classList.remove("collapsed");
//       }
//       updateToggleButtonPosition();
//     }

//     const sidebar = document.getElementById("sidebar");
//     const toggleBtn = document.getElementById("toggleBtn");
//     const toggleIcon = document.getElementById("toggleIcon");
//     const body = document.body;

//     setInitialSidebarState();

//     toggleBtn?.addEventListener("click", () => {
//       sidebar.classList.toggle("collapsed");
//       toggleIcon.classList.toggle("rotated");

//       if (sidebar.classList.contains("collapsed")) {
//         body.classList.add("sidebar-collapsed");
//       } else {
//         body.classList.remove("sidebar-collapsed");
//       }
//       updateToggleButtonPosition();
//     });

//     document.addEventListener("click", (e) => {
//       if (window.innerWidth < 768) {
//         const isClickInsideSidebar = sidebar.contains(e.target);
//         const isToggleButton = toggleBtn.contains(e.target);

//         if (
//           !sidebar.classList.contains("collapsed") &&
//           !isClickInsideSidebar &&
//           !isToggleButton
//         ) {
//           sidebar.classList.add("collapsed");
//           body.classList.add("sidebar-collapsed");
//           updateToggleButtonPosition();
//         }
//       }
//     });

//     // ==================== ADD/REMOVE DIMENSIONS LOGIC ==================== //
//     const wrapper = document.getElementById("dimensions-wrapper");
//     const addBtn = document.querySelector(".add-more-btn");
//     const removeBtn = document.querySelector(".remove-btn");

//     if (wrapper && addBtn && removeBtn) {
//       let count = 1;
//       removeBtn.style.display = "none";

//       function createBlock() {
//         const block = document.createElement("div");
//         block.classList.add("dimensions-content");
//         block.innerHTML = `
//           <div class="dimensions-group">
//             <label>QTY *</label>
//             <input type="text" placeholder="Qty">
//           </div>
//           <div class="dimensions-group">
//             <label>Height *</label>
//             <input type="text" placeholder="H">
//           </div>
//           <div class="dimensions-group">
//             <label>Length *</label>
//             <input type="text" placeholder="L">
//           </div>
//           <div class="dimensions-group">
//             <label>Width *</label>
//             <input type="text" placeholder="W">
//           </div>
//         `;
//         return block;
//       }

//       addBtn.addEventListener("click", () => {
//         if (count < 3) {
//           wrapper.appendChild(createBlock());
//           count++;
//           removeBtn.style.display = "inline-block";
//           if (count === 3) addBtn.style.display = "none";
//         }
//       });

//       removeBtn.addEventListener("click", () => {
//         if (count > 1) {
//           wrapper.removeChild(wrapper.lastElementChild);
//           count--;
//           addBtn.style.display = "inline-block";
//           if (count === 1) removeBtn.style.display = "none";
//         }
//       });
//     }

//     // ==================== DROPDOWN PANELS ==================== //
//     document.querySelectorAll(".dropdown-button").forEach(function (btn) {
//       btn.addEventListener("click", function () {
//         var panel = btn.closest(".delivery-type")?.nextElementSibling;
//         if (panel && panel.classList.contains("delivery-description-panel")) {
//           if (panel.style.display === "none" || panel.style.display === "") {
//             panel.style.display = "block";
//             btn.innerHTML = "Charges Bifurcation &uarr;";
//           } else {
//             panel.style.display = "none";
//             btn.innerHTML = "Charges Bifurcation &darr;";
//           }
//         }
//       });
//     });

//     document
//       .querySelectorAll(".delivery-description-panel")
//       .forEach(function (panel) {
//         panel.style.display = "none";
//       });

//     // ==================== STEPS LOGIC ==================== //
//     const steps = document.querySelectorAll(".page-header .step");
//     const cnoContainer = document.querySelector(".cno-container");
//     const shippingContainer = document.querySelector(".shipping-partners");

//     const searchBtn = document.getElementById("searchBtn");
//     const backBtn = document.querySelector(".back-button");

//     function goToStep(stepNum) {
//       cnoContainer.classList.remove("active");
//       shippingContainer.classList.remove("active");

//       steps.forEach((s) => s.classList.remove("active"));

//       const currentStep = document.querySelector(
//         `.page-header .step[data-step="${stepNum}"]`
//       );
//       if (currentStep) currentStep.classList.add("active");

//       if (stepNum === 1) {
//         cnoContainer.classList.add("active");
//       } else if (stepNum === 2) {
//         shippingContainer.classList.add("active");
//       }
//     }

//     steps.forEach((step) => {
//       step.addEventListener("click", () => {
//         const stepNum = parseInt(step.dataset.step, 10);
//         goToStep(stepNum);
//       });
//     });

//     searchBtn?.addEventListener("click", () => goToStep(2));
//     backBtn?.addEventListener("click", () => goToStep(1));

//     goToStep(1);

//     // ============================ WINDOW RESIZE EVENT ============================== //
//     window.addEventListener("resize", setInitialSidebarState);
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>My Orders</title>
//         {/* Fonts */}
//         <link
//           rel="preconnect"
//           href="https://fonts.googleapis.com"
//         />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="true"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
//           rel="stylesheet"
//         />
//         {/* Icons */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/icon?family=Material+Icons"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
//           rel="stylesheet"
//         />
//       </Helmet>

//       {/* Full HTML content */}
//       <header className="header">
//         {/* Header Left */}
//         <div className="header-left">
//           <img className="logo" src={logo} alt="logo" />
//         </div>
//         {/* Header Middle */}
//         <div className="header-middle">
//           <div className="search-container">
//             <i
//               className="material-icons-outlined search-icon"
//               id="searchIcon"
//             >
//               search
//             </i>
//             <input type="text" id="searchInput" placeholder="Search BY LRN/AWB no" />
//           </div>
//         </div>
//         {/* Header Right */}
//         <div className="header-right">
//           <button className="wallet-btn">
//             <i className="material-icons-outlined wallet-icon">account_balance_wallet</i>
//             <p>&#8377;</p>
//             <span>0.00</span>
//           </button>
//           <div className="notification">
//             <i className="material-icons-outlined notification-bell-icon">notifications</i>
//             <span className="count">2</span>
//           </div>
//           <div className="user-info">
//             <div className="welcome-text">Welcome Patel</div>
//             <div className="user-id">
//               MYLOGISTIX123
//               <i className="material-icons arrow-drop-down-icon">arrow_drop_down</i>
//             </div>
//           </div>
//           <div className="user-profile">
//             <i className="material-symbols-outlined user-profile-icon">person</i>
//           </div>
//         </div>
//       </header>

//       <div className="back-header"></div>

//       <button className="toggle-btn" id="toggleBtn">
//         <i className="material-icons right-double-arrow-icon" id="toggleIcon">
//           keyboard_double_arrow_left
//         </i>
//       </button>

//       {/* Sidebar */}
//       <nav className="sidebar" id="sidebar">
//         <div className="sidebar-content">

//           <a href="/dashboard" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">dashboard</i>
//               <span>Dashboard</span>
//             </div>
//           </a>

//           <a href="/MyOrders" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">orders</i>
//               <span>My Order</span>
//               <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//             </div>
//           </a>

//           <a href="/PickupPointPage" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">package</i>
//               <span>Pickup Point</span>
//             </div>
//           </a>

//           <a href="/PickupPage" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">hail</i>
//               <span>Pickup Request</span>
//             </div>
//           </a>

//           <a href="/WeightReconciliation" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">weight</i>
//               <span>Weight Reconcillation</span>
//             </div>
//           </a>

//           <a href="/deliveryApointment" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">package_2</i>
//               <span>Delivery Appointment</span>
//             </div>
//           </a>

//           <a href="/NdrException" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">exclamation</i>
//               <span>NDR & Exceptions</span>
//             </div>
//           </a>

//           <a href="/RateCalculator" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">calculate</i>
//               <span>Rate Calculator</span>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">payments</i>
//               <span>Finance & COD</span>
//               <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">docs</i>
//               <span>Billing</span>
//               <i class="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">contract</i>
//               <span>Price list</span>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">handyman</i>
//               <span>Integration</span>
//               <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">settings</i>
//               <span>Resource Center</span>
//               <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">support_agent</i>
//               <span>Customer Support</span>
//             </div>
//           </a>

//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <i className="material-symbols-outlined sidebar-icons">shopping_cart</i>
//               <span>Shop</span>
//             </div>
//           </a>

//         </div>
//         <div className="sidebar-footer">
//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <span className="last">Terms of Use</span>
//             </div>
//           </a>
//           <a href="#" className="sidebar-link">
//             <div className="sidebar-items">
//               <span className="last">Privacy Policy</span>
//             </div>
//           </a>
//         </div>
//       </nav>



//       <div class="top-bar">

//         <div class="first">
//           <i class="material-icons menu-icon">list_alt</i>
//           <span class="label">Total's Order :</span>
//           <span class="value">921</span>
//         </div>

//         <div class="second">
//           <i class="material-symbols-outlined menu-icon">orders</i>
//           <span class="label">Today's Order :</span>
//           <span class="value">0</span>
//         </div>

//         <div class="third">
//           <i class="material-symbols-outlined revenue-icon">finance_mode</i>
//           <span class="label">Today's Revenue : </span>
//           <span class="value"> &#8377; <span class="unit">0k</span></span>
//         </div>

//         <div class="fourth">
//           <i class="material-symbols-outlined bookmark-icon">package</i>
//           <span class="label">Total's Shipping : </span>
//           <span class="value">0 <span class="unit">kg</span></span>
//         </div>
//       </div>

//       <div class="back-topbar"></div>

//       <main class="my-orders-main">
//         <section class="my-orders-section">

//           <div class="page-header">
//             <span class="step active" data-step="1">Create New Order</span>
//             <span class="separator"> - </span>
//             <span class="step" data-step="2">Choose Shipping Partners</span>
//             <span class="separator"> - </span>
//             <span class="step" data-step="3">Create Order Detail</span>
//           </div>

//           <div class="cno-container">
//             <h1>Create New Order</h1>

//             <div class="divider"></div>

//             <div class="wd-box">
//               <div class="title">
//                 <h5>Weight & Dimensions (In cm)</h5>
//               </div>

//               <div class="input-box">
//                 <div class="input-group">
//                   <div class="name-box">
//                     <i class="material-symbols-outlined">weight</i>
//                     <span>Weight</span>
//                   </div>
//                   <div class="input-box">
//                     <input type="text" />
//                   </div>
//                 </div>
//                 <div class="input-group">
//                   <div class="name-box">
//                     <i class="material-symbols-outlined">straighten</i>
//                     <span>Length</span>
//                   </div>
//                   <div class="input-box">
//                     <input type="text" />
//                   </div>
//                 </div>
//                 <div class="input-group">
//                   <div class="name-box">
//                     <i class="material-symbols-outlined">person_play</i>
//                     <span>QTY</span>
//                   </div>
//                   <div class="input-box">
//                     <input type="text" />
//                   </div>
//                 </div>
//                 <div class="input-group">
//                   <div class="name-box">
//                     <i class="material-symbols-outlined">width_normal</i>
//                     <span>Width</span>
//                   </div>
//                   <div class="input-box">
//                     <input type="text" />
//                   </div>
//                 </div>
//                 <div class="input-group">
//                   <div class="name-box">
//                     <i class="material-symbols-outlined">height</i>
//                     <span>Height</span>
//                   </div>
//                   <div class="input-box">
//                     <input type="text" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="toggle-boxes">
//               <div class="toggle-box">
//                 <div class="toggle-title">
//                   <p>Mode & Invoice Details</p>
//                 </div>

//                 <div class="toggle-content">
//                   <div class="toggle-row">
//                     <label>Payment Mode</label>
//                     <select name="" id="">
//                       <option value="">Prepaid</option>
//                       <option value="">COD</option>
//                     </select>
//                   </div>
//                   <div class="toggle-row">
//                     <label>Invoice Value</label>
//                     <input type="text" placeholder="Enter Invoice Value" />
//                   </div>
//                 </div>
//               </div>

//               <div class="toggle-box">

//                 <div class="upper-toggle">
//                   <div class="toggle-title">
//                     <p>Insurance ?</p>

//                     <div class="check-box">
//                       <label class="checkbox">
//                         <input type="checkbox" name="insurance" value="yes" />
//                         <span>Yes</span>
//                       </label>
//                       <label class="checkbox">
//                         <input type="checkbox" name="insurance" value="no" checked />
//                         <span>No</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <hr />

//                 <div class="bottom-toggle">
//                   <div class="toggle-title">
//                     <p>Appointment Base Delivery</p>

//                   </div>
//                   <div class="switch-toggle">
//                     <label class="switch">
//                       <input type="checkbox" name="appointment" />
//                       <span class="slider"></span>
//                     </label>
//                   </div>
//                 </div>
//               </div>


//               <div class="toggle-box">
//                 <div class="toggle-title">
//                   <p>Pickup & Destination Details</p>
//                 </div>

//                 <div class="toggle-content">
//                   <div class="toggle-row">
//                     <label>Pickup Area Pincode</label>
//                     <input type="text" placeholder="Origin Pincode" />
//                   </div>
//                   <div class="toggle-row">
//                     <label>Deliver Area Pincode</label>
//                     <input type="text" placeholder="Destination Pincode" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="buttons-box">
//               <button type="button" id="searchBtn" class="search-btn">Search Courier Partner</button>
//               <button type="reset" class="reset-btn">Reset</button>
//             </div>
//           </div>

//           <div class="shipping-partners">
//             <button class="back-button">
//               <i class="material-symbols-outlined">reply</i>
//               Back To Creat Shipment
//             </button>

//             <div class="shipping-infobox">
//               <div class="location-infobox">
//                 <div class="pickup-info">
//                   <p>Pickup From</p>
//                   <p>382425,Gujarat</p>
//                 </div>

//                 <div class="arrow-box">
//                   <i class="material-symbols-outlined">east</i>
//                 </div>

//                 <div class="delivery-info">
//                   <p>Deliver To</p>
//                   <p>382481,Gujarat</p>
//                 </div>
//               </div>

//               <div class="divider"></div>

//               <div class="order-infobox">
//                 <div class="order-box">
//                   <p>Order Value</p>
//                   <p>₹500</p>
//                 </div>
//                 <div class="order-box">
//                   <p>Payment Mode</p>
//                   <p>COD</p>
//                 </div>
//                 <div class="order-box">
//                   <p>Payment Mode</p>
//                   <p>20 Kg</p>
//                 </div>
//               </div>

//             </div>

//             <div class="select-section">
//               <div class="left-section">
//                 <button class="all-btn">
//                   ALL Mode
//                 </button>

//                 <button class="all-btn">
//                   ALL Shipping Partner
//                 </button>

//                 <button class="all-btn">
//                   ALL Rating
//                 </button>
//               </div>

//               <div class="right-section">
//                 <button class="clear-btn">
//                   Clear All
//                 </button>
//               </div>
//             </div>

//             <div class="order-final-section">
//               <div class="order-content-section">
//                 <div class="left-content">


//                   <div class="logo-box">
//                     <div class="company-logo">
//                       Xpressbees<br />(LOGO)
//                     </div>

//                     <span>Xpressbees <br /> 20 Kg B2C</span>
//                   </div>

//                   <div class="charges-section">
//                     <div class="charges-box">
//                       <span>Charges</span>
//                       <div class="charges-group">
//                         <div class="charges-row">
//                           <p>Weight Charge :</p>
//                           <p>₹242.00</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>Fuel Charge :</p>
//                           <p>₹12.10</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>Freight Charge :</p>
//                           <p>₹252.00</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>COD Charge :</p>
//                           <p>₹30.00</p>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="additional-box">
//                       <span>Additional</span>
//                       <div class="additional-group">
//                         <div class="charges-row">
//                           <p>+ GST :</p>
//                           <p>₹100.00</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>Vol. Weight :</p>
//                           <p>50 Kg</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>Charged Weight :</p>
//                           <p>100 Kg</p>
//                         </div>
//                         <div class="charges-row">
//                           <p>Minimum Weight</p>
//                           <p>10 Kg</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="middle-divider"></div>

//                 <div class="right-content">
//                   <div class="confirm-section">
//                     <div class="price-box">
//                       <p>₹ 330.52</p>
//                     </div>

//                     <div class="zone-box">

//                       <p>Zone :</p>
//                       <i class="material-symbols-outlined">location_on</i>
//                       <p>A</p>
//                     </div>

//                     <div class="rating-box">
//                       <span class="star">&#9733;</span>
//                       <span class="star">&#9733;</span>
//                       <span class="star">&#9733;</span>
//                       <span class="star">&#9733;</span>
//                       <span class="star half">&#9733;</span>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               <div class="order-description-section">
//                 <div class="left-description">
//                   <div class="description-box">
//                     <i class="material-symbols-outlined">travel_explore</i>
//                     <p>Real Time Tracking</p>
//                   </div>

//                   <div class="description-box">
//                     <i class="material-symbols-outlined">phone_in_talk</i>
//                     <p>Call Before Delivery : Available</p>
//                   </div>

//                   <div class="description-box">
//                     <i class="material-symbols-outlined">payments</i>
//                     <p>POD : Instant</p>
//                   </div>
//                 </div>
//                 <div class="right-description">
//                   <div class="description-box">
//                     <p>Estimated Delivery :</p>
//                     <p class="date">06 Mar, 2025</p>
//                   </div>
//                   <div class="description-box">
//                     <p>Pickup :</p>
//                     <p class="day">Tomorrow</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </section>

//         <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//       </main>



//     </>
//   );
// }






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
                <div className="divider"></div>

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
                    <div className="toggle-content">

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
                          <i className="material-symbols-outlined">request_quote</i>
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
                          <label className="checkbox1">
                            <input
                              type="radio"
                              name="insurance"
                              checked={formData.insurance === true}
                              onChange={() => setFormData({ ...formData, insurance: true })}
                            />
                            <span>Yes</span>
                          </label>
                          <label className="checkbox1">
                            <input
                              type="radio"
                              name="insurance"
                              checked={formData.insurance === false}
                              onChange={() => setFormData({ ...formData, insurance: false })}
                            />
                            <span>No</span>
                          </label>
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
                    <div className="toggle-content">
                      <div className="input-group">
                        <div className="name-box">
                          <i className="material-symbols-outlined">local_shipping</i>
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
                          <i className="material-symbols-outlined">location_on</i>
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
                                  <p>₹{formatCurrency(r.breakdown.freightCharge || 0)}</p>
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













/* GLOBAL */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
    overflow: hidden;
}

/* BODY */
body {
    background-color: rgba(100, 155, 197, 0.05);
    overflow-x: hidden;
    height: 100%;
    font-family: 'Poppins', sans-serif;
}

/* HEADER */
.header {
    height: 80px;
    background-color: rgba(100, 155, 197, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    gap: 25px;
    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    z-index: 105;
}

/* BACKSIDE HEADER */
.back-header {
    height: 80px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

/* --- HEADER SECTIONS --- */
.header-left,
.header-middle,
.header-right {
    display: flex;
    align-items: center;
}

/* HEADER LEFT */
.header-left {
    flex: 0 0 auto;
    justify-content: flex-start;
}

/* HEADER MIDDLE */
.header-middle {
    flex: 0 0 auto;
}

/* HEADER RIGHT */
.header-right {
    flex: 0 0 auto;
    gap: 20px;
    justify-content: flex-end;
    padding-right: 15px;
}

/* LOGO */
.logo {
    height: 90px;
    margin: 0 75px 0 80px;
    padding-top: 5px;
    vertical-align: middle;
}

/* TOGGLE BUTTON */
.toggle-btn {
    position: fixed;
    top: 95px;
    left: 214px;
    margin-left: 15px;
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(100, 155, 197, 1);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    overflow: hidden;
    z-index: 105;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    transition: left 0.3s ease, transform 0.3s ease,
        background-color 0.3s ease, box-shadow 0.3s ease;
}

.toggle-btn:hover {
    background-color: rgba(80, 140, 185, 1);
    transform: scale(1.1);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.toggle-btn:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* TOGGLE ICON */
.right-double-arrow-icon {
    position: absolute;
    font-size: 18px;
    color: white;
    transform-origin: center;
    transition: transform 0.3s ease;
}

.right-double-arrow-icon.rotated {
    transform: rotate(180deg);
}


/* SEARCH BAR */
.search-container {
    position: relative;
}

.search-container input {
    width: 500px;
    padding: 10px 0 10px 40px;
    font-size: 11px;
    font-weight: 400;
    font-family: 'Poppins';
    border: none;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}

.search-container input::placeholder {
    color: rgba(100, 155, 197, 0.8);
}

.search-container input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 155, 197, 0.7) !important;
}

/* SEARCH ICON */
.search-icon {
    position: absolute;
    left: 12px;
    font-size: 17px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(100, 155, 197, 1);
}

.search-container:focus-within .search-icon {
    left: auto;
    right: 0;
    width: 40px;
    height: 100%;
    background-color: aliceblue;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
}

.search-container:focus-within input {
    padding: 10px 40px 10px 10px;
}

/* HEADER ACTIONS BUTTONS */
.wallet-btn,
.notification,
.user-profile {
    border: none;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* WALLET BUTTON */
.wallet-btn {
    background-color: rgba(100, 155, 197, 1);
    color: white;
    gap: 6px;
    font-size: 11px;
    padding: 6px 9px;
}

.wallet-btn .wallet-icon {
    font-size: 18px;
}

.wallet-btn span,
.wallet-btn p {
    font-family: 'Inter';
    font-weight: 400;
    letter-spacing: 1px;
}

/* NOTIFICATION BUTTON */
.notification {
    background-color: rgba(100, 155, 197, 1);
    color: white;
    padding: 6px;
    position: relative;
}

.notification-bell-icon {
    font-size: 18px;
}

.notification .count {
    position: absolute;
    top: 5px;
    right: 6px;
    width: 9px;
    height: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    font-size: 6px;
    font-weight: 400;
    background-color: rgba(210, 88, 27, 0.9);
    color: white;
    border-radius: 50%;
}

/* HOVER EFFECTS */
.wallet-btn:hover,
.notification:hover,
.user-profile:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* USER INFO / PROFILE */
.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-family: 'Poppins';
    font-weight: 500;
    color: rgba(100, 155, 197, 1);
}

.welcome-text {
    font-size: 15px;
    line-height: 1.3;
}

.user-id {
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 2px;
    margin-left: 7px;
}

.arrow-drop-down-icon {
    font-size: 15px;
    line-height: 1;
    vertical-align: middle;
    transform: translateY(-2px);
}

.user-profile {
    padding: 7px;
    background-color: rgba(100, 155, 197, 1);
    color: white;
    display: none;
}

.user-profile-icon {
    font-size: 18px;
}

/* SIDEBAR */
.sidebar {
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    width: 240px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    background: linear-gradient(to bottom, rgba(100, 155, 197, 1), rgba(48, 75, 95, 1));
    transition: width 0.3s ease;
    overflow: visible;
    scrollbar-width: none;
    z-index: 100;
}

.sidebar::-webkit-scrollbar {
    display: none;
}

.sidebar-content {
    flex: 0 0 auto;
}

.sidebar-link {
    display: block;
    padding: 0 15px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    color: white;
    line-height: 2.3;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.sidebar-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    transform: translateX(4px);
}

.sidebar-footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
}

.sidebar-footer .sidebar-link {
    padding: 0 15px;
    line-height: 2.3;
}

.sidebar-items {
    display: grid;
    grid-template-columns: 24px 1fr 16px;
    align-items: center;
    gap: 10px;
}

.sidebar-icons {
    font-size: 16px;
    text-align: center;
    min-width: 24px;
    transition: transform 0.3s ease, color 0.3s ease, opacity 0.3s ease;
}

.sidebar-items span {
    display: inline;
    font-size: 12px;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.sidebar-link .arrow-icon {
    height: 14px;
    display: inline;
    justify-self: end;
    opacity: 1;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.sidebar-items .last {
    grid-column: 1 / -1;
    display: block;
    width: 100%;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
}

/* COLLAPSED SIDEBAR */
.sidebar.collapsed {
    width: 70px;
    padding-top: 13.5px;
}

.sidebar.collapsed .sidebar-items {
    grid-template-columns: 1fr;
    height: 32px;
    justify-items: center;
}

.sidebar.collapsed .sidebar-items span,
.sidebar.collapsed .right-arrow-icon,
.sidebar.collapsed .sidebar-footer .last {
    display: none;
    opacity: 0;
    visibility: hidden;
}

.sidebar.collapsed .sidebar-footer {
    height: 0;
    margin: 0;
    overflow: hidden;
}

.sidebar-link .tooltip-text {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: 49px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(51, 51, 51, 0.5);
    color: rgba(255, 255, 255, 0.6);
    padding: 4px 9px;
    font-size: 11px;
    font-family: 'Poppins';
    border-radius: 9px;
    white-space: nowrap;
    pointer-events: none;
    transition: opacity 0.2s ease, background-color 0.5s ease 1s, color 0.5s ease 1s;
    z-index: 9999;
}

.sidebar-link .tooltip-text::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent rgba(51, 51, 51, 0.5) transparent transparent;
    transition: border-color 0.5s ease 1s;
}

.sidebar.collapsed .sidebar-link:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
    background-color: rgba(51, 51, 51, 0.95);
    color: white;
}

.sidebar.collapsed .sidebar-link:hover .tooltip-text::before {
    border-color: transparent rgba(51, 51, 51, 0.95) transparent transparent;
}



/* TOPBAR */
.top-bar {
    position: fixed;
    top: 80px;
    left: 240px;
    right: 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 45px;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    background: linear-gradient(to right,
            rgba(19, 100, 152, 0.8),
            rgba(210, 88, 27, 0.7),
            rgba(19, 100, 152, 0.8));
    color: white;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
        inset 0 4px 4px rgba(255, 255, 255, 0.3);
    z-index: 90;
}

/* BACKSIDE TOPBAR */
.back-topbar {
    position: fixed;
    top: 80px;
    left: 240px;
    right: 0;
    height: 50px;
    background-color: white;
    z-index: 80;
}

.first,
.second,
.third,
.fourth {
    display: flex;
    gap: 10px;
    align-items: center;
}

.menu-icon,
.revenue-icon,
.bookmark-icon {
    font-size: 18px;
}

body.sidebar-collapsed .top-bar,
body.sidebar-collapsed .back-topbar {
    left: 70px;
}

.sidebar,
.top-bar,
.back-topbar {
    transition: all 0.3s ease;
}


/* RESPONSIVE MEDIA QUERIES For HEADER, TOPBAR & SIDEBAR */
@media (max-width: 1200px) {
    .search-container input {
        width: 450px;
    }
}

@media (max-width: 1150px) {
    .search-container input {
        width: 400px;
    }
}

@media (max-width: 1100px) {
    .search-container input {
        width: 350px;
    }
}

@media (max-width: 1050px) {
    .search-container input {
        width: 300px;
    }
}

@media (max-width: 1000px) {
    .search-container input {
        width: 250px;
    }

    .notification {
        margin-right: 0;
    }
}

@media (max-width: 885px) {

    .wallet-btn span,
    .wallet-btn p {
        display: none;
    }
}

@media (max-width: 800px) {
    .header {
        gap: 20px;
    }

    .header-right {
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .header-right {
        padding-right: 25px;
    }

    .logo {
        margin-left: 25px;
        margin-right: 0;
    }

    .search-container input {
        width: 300px;
    }

    .user-info {
        display: none;
    }

    .user-profile {
        display: flex;
    }
}

@media (max-width: 650px) {
    .search-container input {
        width: 250px;
    }
}

@media (max-width: 590px) {
    .search-container input {
        width: 200px;
    }
}

@media (max-width: 550px) {
    .header {
        gap: 20px;
    }

    .header-right {
        gap: 15px;
        padding-right: 10px;
    }

    .logo {
        height: 80px;
        margin-left: 0;
    }
}

@media (max-width: 500px) {
    .header {
        gap: 15px;
    }

    .header-right {
        gap: 10px;
        padding-right: 10px;
    }

    .logo {
        height: 80px;
        margin-left: 0;
    }
}

@media (max-width: 460px) {
    .search-container input {
        width: 170px;
    }

    .search-container input::placeholder {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
}

@media (max-width: 435px) {
    .header {
        gap: 10px;
    }

    .search-container input {
        width: 150px;
    }
}

@media (max-width: 403px) {
    .search-container input {
        width: 125px;
    }
}

@media (max-width: 365px) {
    .search-container input {
        width: 100px;
    }
}

@media (max-width: 340px) {
    .search-container input {
        width: 65px;
    }
}

/* --- TOPBAR SCROLLABLE At SMALLER WIDTHS --- */
@media (max-width: 1019px) {
    .top-bar {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        flex-wrap: nowrap;
        gap: 20px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }

    .top-bar::-webkit-scrollbar {
        display: none;
    }

    .top-bar .first,
    .top-bar .second,
    .top-bar .third,
    .top-bar .fourth {
        flex: 0 0 auto;
        min-width: max-content;
    }
}



.my-orders-main {
    border-top: 1px solid transparent;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - 130px);
    margin-top: 130px;
    margin-left: 240px;
    transition: margin-left 0.3s ease;
    scrollbar-width: none;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
}

body.sidebar-collapsed .my-orders-main {
    margin-left: 70px;
}

footer {
    background-color: white;
    color: rgba(100, 155, 197, 1);
    font-family: 'poppins';
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 10px 0 10px 0;
    margin-top: auto;
}

.my-orders-section {
    margin: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.page-header {
    font-size: 14px;
    font-family: 'poppins';
    font-weight: 400;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.page-header .step {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    /* default link color */
    transition: color 0.3s;
}

.page-header .step.active {

    color: rgba(100, 155, 197, 1);
    /* active step color */
}

.page-header .separator {
    color: rgba(100, 155, 197, 1);
}


.cno-container {
    background: white;
    margin: auto;
    padding: 20px 30px 30px 30px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    width: 100%;
}

.create-order-form {
    display: flex;
    flex-direction: column;
    gap: 15px;

}

h1 {
    text-align: center;
    color: rgba(100, 155, 197, 1);
    font-size: 35px;
    font-family: 'poppins';
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

.divider {
    height: 2px;
    width: 150px;
    background: linear-gradient(to right,
            rgba(100, 155, 197, 1),
            rgba(0, 0, 0, 0.25),
            rgba(210, 88, 27, 0.7));
    border-radius: 9px;
    justify-content: center;
    align-items: center;
}


.wd-box {
    display: flex;
    flex-direction: column;
    padding: 10px 25px 30px 25px;
    border-radius: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

.wd-box .title h5 {
    font-family: 'poppins';
    font-weight: 400;
    font-size: 16px;
    color: rgba(100, 155, 197, 1);
    text-align: center;
}

.input-boxes {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-group .name-box {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
}

.input-group .name-box i {
    font-size: 16px;
    color: rgba(100, 155, 197, 1);
}

.input-group span {
    font-family: 'poppins';
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
}

.input-group input {
    width: 150px;
    background-color: rgba(100, 155, 197, 0.2);
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    font-size: 14px;
    padding: 4px 0;
}

.toggle-boxes {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
}

.toggle-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    font-family: 'poppins';
    font-weight: 400;
    flex: 1;
    padding-bottom: 20px;
    padding-left: 20px;
}

.toggle-box .toggle-title {
    color: rgba(100, 155, 197, 1);
    font-weight: 400;
    font-size: 14px;
}

.toggle-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.toggle-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.toggle-box label {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    font-weight: 400;
}

.toggle-row input,
.toggle-row select {
    border: none;
    background-color: rgba(100, 155, 197, 0.2);
    border-radius: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    padding: 3px;
}

.upper-toggle,
.bottom-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

/* Checkbox styling */
.checkbox {
    display: inline-flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    font-size: 12px;
}

.checkbox input {
    display: none;
}

.checkbox span {
    position: relative;
    padding-left: 25px;
    color: #333;
}

.checkbox span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 10px;
    height: 10px;
    border: 2px solid #5da6d5;
    border-radius: 4px;
    background: #fff;
}

.checkbox input:checked + span::before {
    background-color: #5da6d5;
    border-color: #5da6d5;
}

.checkbox input:checked + span::after {
    content: "✔";
    position: absolute;
    left: 3px;
    top: -1px;
    font-size: 14px;
    color: #fff;
}


/* Toggle switch */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
                inset 0 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 12px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(100, 155, 197, 0.2);
    border-radius: 12px;
    transition: .3s;
}

.slider::before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 5px;
    bottom: 3px;
    top:3px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
}

.switch input:checked + .slider {
    background-color: rgba(100, 155, 197, 1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
}

.switch input:checked + .slider::before {
    transform: translateX(27px);
}


/* Radio button styling */
.radio {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
}

.radio input {
  display: none; /* default radio hataya */
}

.radio span {
  position: relative;
  padding-left: 22px;
  color: #333;
}

/* outer circle */
.radio span::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 12px;
  height: 12px;
  border: 2px solid #5da6d5;
  border-radius: 50%;
  background: #fff;
  transition: 0.3s;
}

/* inner dot when checked */
.radio input:checked + span::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 6px;
  width: 6px;
  height: 6px;
  background: #5da6d5;
  border-radius: 50%;
}

.checkbox1 {
    margin-top: 10px;
}

.buttons-box {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.search-btn {
    background-color: rgba(100, 155, 197, 1);
    font-size: 14px;
    padding: 6px 0;
    width: 250px;
    font-family: 'poppins';
    font-weight: 400;
    color: white;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.search-btn:hover {
    background: #4a7ba0;       
    transform: translateY(-2px); 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3),
                inset 0 4px 6px rgba(0, 0, 0, 0.2);
}


.reset-btn {
    font-size: 14px;
    padding: 5px 0;
    width: 250px;
    font-family: 'poppins';
    font-weight: 400;
    background-color: white;
    color: rgba(100, 155, 197, 1);
    border: 1.5px solid rgba(100, 155, 197, 1);
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.reset-btn:hover {
    background: #c4def2;       
    transform: translateY(-2px); 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3),
                inset 0 4px 6px rgba(0, 0, 0, 0.2);
    border:none;
}

.shipping-partners {
    display: flex;
    flex-direction: column;
    gap: 30px;
}



.shipping-partners .back-button {
    background-color: rgba(100, 155, 197, 1);
    border: none;
    align-items: center;
    color: white;
    font-size: 14px;
    padding: 8px 15px;
    border-radius: 9px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    align-self: flex-start;
    cursor: pointer;

}

.shipping-partners .back-button i {
    font-size: 18px;
}


.shipping-partners .back-button:hover {
    background: #4a7ba0;   
    transform: translateY(-2px); 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3),
                inset 0 4px 6px rgba(0, 0, 0, 0.2);
}

.shipping-infobox {
    background-color: rgba(100, 155, 197, 0.4);
    width: 100%;
    border-radius: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    font-size: 14px;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 30px;

}

.location-infobox {
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: center;
    align-items: center;
}

.pickup-info,
.delivery-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
}

.arrow-box {
    justify-content: center;
}

.arrow-box i {
    color: rgba(0, 0, 0, 0.25);
    font-size: 25px;
}

.pickup-info p,
.delivery-info p {
    color: white;
    font-family: 'poppins';
    font-weight: 500;
}

.shipping-infobox .divider {
    width: 1px;
    background-color: rgba(0, 0, 0, 0.25);
    height: 60px;
}

.order-infobox {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.order-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
}

.order-box p {
    font-family: 'poppins';
    font-weight: 500;
    color: white;
    font-size: 14px;
}

.select-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-section {
    display: flex;
    flex-direction: row;
    gap: 25px;
}

.left-section .all-btn {
    color: rgba(100, 155, 197, 1);
    background-color: white;
    border-radius: 9px;
    border: 1.5px solid rgba(100, 155, 197, 1);
    font-size: 14px;
    width: 225px;
    padding: 5px 8px;
    text-align: left;
    cursor: pointer;
}

.right-section .clear-btn {
    color: white;
    background-color: rgba(100, 155, 197, 1);
    border-radius: 9px;
    padding: 5px 0;
    width: 125px;
    text-align: center;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    font-family: 'poppins';
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
}

.order-final-section {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 9px;
    font-family: 'poppins';
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

.order-content-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
}

.left-content {
    display: flex;
    flex-direction: row;
    width: 65%;
    gap: 25px;
    justify-content: space-between;
}

.select-btn1{
     background: #5e96be;
    border-radius: 9px;
    padding: 5px 12px;
    display: flex;
    justify-content: center;
    gap: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
                inset 0 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    color: white;
    cursor: pointer;
}

.select-btn1:hover {
    background: #4a7ba0;     
    transform: translateY(-2px); 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3),
                inset 0 4px 6px rgba(0, 0, 0, 0.2);
}

.logo-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    gap: 10px;
    aspect-ratio: 1 / 1;
    width: 170px;
    flex-shrink: 0;
}

.company-logo {
    color: rgba(100, 155, 197, 1);
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.logo-box span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 400;
}

.charges-section {
    display: flex;
    flex-direction: row;
    background-color: rgba(100, 155, 197, 0.2);
    border-radius: 9px;
    padding: 15px;
    text-align: left;
    gap: 30px;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
}

.charges-section span {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
}

.charges-section p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 10px;
}

.charges-box,
.additional-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.charges-group,
.additional-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.charges-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.additional-box {
    display: flex;
    flex-direction: column;
}

.middle-divider {
    height: 180px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.25);
}

.right-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
}

.confirm-section {
    display: flex;
    flex-direction: column;
    background-color: rgba(100, 155, 197, 1);
    padding: 20px;
    border-radius: 9px;
    gap: 7px;
    text-align: left;
}

.price-box {
    font-size: 14px;
    font-weight: 700;
    color: white;
}

.zone-box {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.zone-box  i {
    color: white;
    font-size: 15px;
}

.zone-box p {
    font-size: 12px;
    color: white;
    font-weight: 300;
}

.rating-box {
    background: #5e96be;
    border-radius: 9px;
    padding: 5px 12px;
    display: flex;
    justify-content: center;
    gap: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
                inset 0 4px 4px rgba(0, 0, 0, 0.25);
}

.star {
    font-size: 18px;
    color: rgba(252, 230, 62, 1);
}

/* Half star effect */
.star.half {
    position: relative;
    display: inline-block;
    color: lightgray; /* background star */
}

.star.half::before {
    content: "\2605"; /* ★ */
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: rgba(252, 230, 62, 1);
}

.order-description-section {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    border-top: 1px dashed rgba(0, 0, 0, 0.25);
    padding: 10px 20px;
}

.left-description,
.right-description {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.description-box {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 400;
    gap: 5px;
    align-items: center;
}

.description-box i {
    color: rgba(100, 155, 197, 1);
    font-size: 15px;
}

.description-box .date {
    color: rgba(100, 155, 197, 1);
}

.description-box .day {
    color: rgba(42, 199, 66, 1);
}

.cno-container,
.shipping-partners {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
  position: absolute;   /* keeps them stacked */
  width: 100%;
}

.cno-container.active,
.shipping-partners.active {
  opacity: 1;
  pointer-events: auto;
  position: relative;   /* restores layout */
}
