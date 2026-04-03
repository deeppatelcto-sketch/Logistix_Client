// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./style.css";
// import logo from './Images/my_logistix-logo.svg';

// const NdrException = () => {
//     useEffect(() => {
//      const toggleBtn = document.getElementById("toggleBtn");
//      const sidebar = document.getElementById("sidebar");
//      const toggleIcon = document.getElementById("toggleIcon");
//      const sidebarFooter = document.querySelector(".sidebar-footer");
//      const body = document.body;

//      if (!toggleBtn || !sidebar || !toggleIcon) return;

//      const updateToggleButtonPosition = () => {
//        if (sidebar.classList.contains("collapsed")) {
//          toggleBtn.style.left = "44px";
//        } else {
//          toggleBtn.style.left = "214px";
//        }
//      };

//      const setInitialSidebarState = () => {
//        if (window.innerWidth < 768) {
//          body.classList.add("sidebar-collapsed");
//          sidebar.classList.add("collapsed");
//          sidebarFooter.style.display = "none";
//        } else {
//          body.classList.remove("sidebar-collapsed");
//          sidebar.classList.remove("collapsed");
//          sidebarFooter.style.display = "block";
//        }
//        updateToggleButtonPosition();
//      };

//      const toggleSidebar = () => {
//        sidebar.classList.toggle("collapsed");
//        toggleIcon.classList.toggle("rotated");
//        body.classList.toggle("sidebar-collapsed");

//        if (sidebar.classList.contains("collapsed")) {
//          sidebarFooter.style.display = "none";
//        } else {
//          sidebarFooter.style.display = "block";
//        }
//        updateToggleButtonPosition();
//      };

//      // ✅ initialize
//      setInitialSidebarState();
//      toggleBtn.addEventListener("click", toggleSidebar);
//      window.addEventListener("resize", setInitialSidebarState);

//      return () => {
//        toggleBtn.removeEventListener("click", toggleSidebar);
//        window.removeEventListener("resize", setInitialSidebarState);
//      };
//    }, []);

//     return (
//         <>
//             <Helmet>
//                 <title>NDR & Exeption</title>
//                 {/* Fonts */}
//                 <link rel="preconnect" href="https://fonts.googleapis.com" />
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
//                     rel="stylesheet"
//                 />
//                 {/* Icons */}
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//                     rel="stylesheet"
//                 />
//                 <link
//                     href="https://fonts.googleapis.com/icon?family=Material+Icons"
//                     rel="stylesheet"
//                 />
//                 <link
//                     href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
//                     rel="stylesheet"
//                 />
//             </Helmet>

//             <header className="header">
//                 <div className="header-left">
//                     <img className="logo" src={logo} alt="logo" />
//                 </div>
//                 <div className="header-middle">
//                     <div className="search-container">
//                         <i className="material-icons-outlined search-icon" id="searchIcon">
//                             search
//                         </i>
//                         <input type="text" id="searchInput" placeholder="Search BY LRN/AWB no" />
//                     </div>
//                 </div>
//                 <div className="header-right">
//                     <button className="wallet-btn">
//                         <i className="material-icons-outlined wallet-icon">
//                             account_balance_wallet
//                         </i>
//                         <p>&#8377;</p>
//                         <span>0.00</span>
//                     </button>
//                     <div className="notification">
//                         <i className="material-icons-outlined notification-bell-icon">
//                             notifications
//                         </i>
//                         <span className="count">2</span>
//                     </div>
//                     <div className="user-info">
//                         <div className="welcome-text">Welcome Patel</div>
//                         <div className="user-id">
//                             MYLOGISTIX123
//                             <i className="material-icons arrow-drop-down-icon">arrow_drop_down</i>
//                         </div>
//                     </div>
//                     <div className="user-profile">
//                         <i className="material-symbols-outlined user-profile-icon">person</i>
//                     </div>
//                 </div>
//             </header>

//             <div className="back-header"></div>

//             <button className="toggle-btn" id="toggleBtn">
//                 <i className="material-icons right-double-arrow-icon" id="toggleIcon">
//                     keyboard_double_arrow_left
//                 </i>
//             </button>

//             {/* Sidebar */}
//             <nav className="sidebar" id="sidebar">
//                 <div className="sidebar-content">

//                     <a href="/dashboard" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">dashboard</i>
//                             <span>Dashboard</span>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">orders</i>
//                             <span>My Order</span>
//                             <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                         </div>
//                     </a>

//                     <a href="/PickupPointPage" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">package</i>
//                             <span>Pickup Point</span>
//                         </div>
//                     </a>

//                     <a href="/PickupPage" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">hail</i>
//                             <span>Pickup Request</span>
//                         </div>
//                     </a>

//                     <a href="/WeightReconciliation" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">weight</i>
//                             <span>Weight Reconcillation</span>
//                         </div>
//                     </a>

//                     <a href="/deliveryApointment" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">package_2</i>
//                             <span>Delivery Appointment</span>
//                         </div>
//                     </a>

//                     <a href="/NdrException" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">exclamation</i>
//                             <span>NDR & Exceptions</span>
//                         </div>
//                     </a>

//                     <a href="/RateCalculator" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">calculate</i>
//                             <span>Rate Calculator</span>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">payments</i>
//                             <span>Finance & COD</span>
//                             <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">docs</i>
//                             <span>Billing</span>
//                             <i class="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">contract</i>
//                             <span>Price list</span>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">handyman</i>
//                             <span>Integration</span>
//                             <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">settings</i>
//                             <span>Resource Center</span>
//                             <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">support_agent</i>
//                             <span>Customer Support</span>
//                         </div>
//                     </a>

//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <i className="material-symbols-outlined sidebar-icons">shopping_cart</i>
//                             <span>Shop</span>
//                         </div>
//                     </a>


//                     {/* ... other links (same as your HTML) ... */}

//                 </div>
//                 <div className="sidebar-footer">
//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <span className="last">Terms of Use</span>
//                         </div>
//                     </a>
//                     <a href="#" className="sidebar-link">
//                         <div className="sidebar-items">
//                             <span className="last">Privacy Policy</span>
//                         </div>
//                     </a>
//                 </div>
//             </nav>

//             {/* Top Bar */}
//             <div className="top-bar">
//                 <div className="first">
//                     <i className="material-icons menu-icon">list_alt</i>
//                     <span className="label">Total's Order :</span>
//                     <span className="value">921</span>
//                 </div>
//                 <div className="second">
//                     <i className="material-symbols-outlined menu-icon">orders</i>
//                     <span className="label">Today's Order :</span>
//                     <span className="value">0</span>
//                 </div>
//                 <div className="third">
//                     <i className="material-symbols-outlined revenue-icon">finance_mode</i>
//                     <span className="label">Today's Revenue : </span>
//                     <span className="value">
//                         {" "}
//                         &#8377; <span className="unit">0k</span>
//                     </span>
//                 </div>
//                 <div className="fourth">
//                     <i className="material-symbols-outlined bookmark-icon">package</i>
//                     <span className="label">Total's Shipping : </span>
//                     <span className="value">
//                         0 <span className="unit">kg</span>
//                     </span>
//                 </div>
//             </div>

//             <div className="back-topbar"></div>

//             <main className="ndr-exeption-main">
//                 <section className="ndr-exeption-section">
//                     <div className="header-row">
//                         <h2 className="title">NDR & Exeption</h2>
//                     </div>

//                     <div className="tab-bar">
//                         <button className="tab-btn active" data-tab="mismatched">
//                             Open <span className="tab-badge" id="open-badge">0</span>
//                         </button>
//                         <button className="tab-btn" data-tab="raised">
//                             Pending <span className="tab-badge" id="pending-badge">0</span>
//                         </button>
//                     </div>

//                     <div className="tab-panel" id="open-table">
//                         <div className="data-section">
//                             <table className="data-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Date</th>
//                                         <th>Tracking No.</th>
//                                         <th>Last Update</th>
//                                         <th>Reason</th>
//                                         <th>Attempts</th>
//                                         <th>Mode</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>30 Mar 2025</td>
//                                         <td><a href="#" className="awb-lr-link">4988311416774</a></td>
//                                         <td>Bhanupratappur_Kanhargaon_D (Chhattisgarh)30-03-2025 16:42</td>
//                                         <td>Consignee Unavailable </td>
//                                         <td>2 </td>
//                                         <td>COD</td>
//                                         <td><button className="take-action-btn" id="takeActionBtn">Take Action</button></td>
//                                     </tr>
//                                     <tr>
//                                         <td>30 Mar 2025</td>
//                                         <td><a href="#" className="awb-lr-link">4688311415674</a></td>
//                                         <td>Mohali_Kharar1_D (Punjab)30-03-2025 18:14</td>
//                                         <td>Shipment Received at Facility</td>
//                                         <td>0</td>
//                                         <td>COD</td>
//                                         <td><button className="take-action-btn" id="takeActionBtn">Take Action</button></td>
//                                     </tr>
//                                     <tr>
//                                         <td>30 Mar 2025</td>
//                                         <td><a href="#" className="awb-lr-link">4288311415674</a></td>
//                                         <td>Mohali_Kharar1_D (Punjab)30-03-2025 18:14</td>
//                                         <td>Shipment Received at Facility</td>
//                                         <td>0</td>
//                                         <td>Prepaid</td>
//                                         <td><button className="take-action-btn" id="takeActionBtn">Take Action</button></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="bottom-bar">
//                             <div className="pagination">
//                                 <button className="page-btn" id="prev-btn">Previous</button>
//                                 <span id="page-info">1</span>
//                                 <button className="page-btn" id="next-btn">Next</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="tab-panel" id="pending-table" style={{ display: "none" }}>
//                         <div className="data-section">
//                             <table className="data-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Date</th>
//                                         <th>Tracking No.</th>
//                                         <th>Last Update</th>
//                                         <th>Reason</th>
//                                         <th>Attempts</th>
//                                         <th>Mode</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody></tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </section>

//                 <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//             </main>
//         </>
//     );
// };

// export default NdrException;




import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import logo from "./Images/my_logistix-logo.svg";
import axios from "axios";
import Dashboardpage from "../Dashboard/dashboardpage"

const NdrException = () => {
    const [ndrList, setNdrList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ✅ Fetch NDR data from backend
        const fetchNDR = async () => {
            try {
                const token = localStorage.getItem("token"); // user ka JWT token
                const res = await axios.get("http://13.61.104.107:8000/myNDR", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setNdrList(res.data);
            } catch (error) {
                console.error("Failed to fetch NDR:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNDR();
    }, []);

    return (
        <>
            <Helmet>
                <title>NDR & Exception</title>
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </Helmet>


            <Dashboardpage>

                <main className="ndr-exeption-main">
                    <section className="ndr-exeption-section">
                        <div className="header-row">
                            <h2 className="title">NDR & Exception</h2>
                        </div>

                        <div className="tab-bar2">
                            <button className="tab-btn1 active">
                                Open <span className="tab-badge">{ndrList.length}</span>
                            </button>
                        </div>

                        <div className="tab-panel" id="open-table">         
                            <div className="data-section">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : ndrList.length === 0 ? (
                                    <p>No NDR entries found.</p>
                                ) : (
                                    <table className="pickup-point-table">
                                        <thead>
                                            <tr>
                                                <th className="first-cell">Date</th>
                                                <th>Tracking No.</th>
                                                <th>Last Update</th>
                                                <th>Reason</th>
                                                <th>Attempts</th>
                                                <th>Mode</th>
                                                <th className="action-cell">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ndrList.map((ndr) => (
                                                <tr key={ndr._id}>
                                                    <td>{ndr.date}</td>
                                                    <td>
                                                        <a href="#" className="awb-lr-link">
                                                            {ndr.orderId?.orderId || "N/A"}
                                                        </a>
                                                    </td>
                                                    <td>{ndr.lastUpdate}</td>
                                                    <td>{ndr.reason}</td>
                                                    <td>{ndr.attempts}</td>
                                                    <td>{ndr.mode}</td>
                                                    <td className="action-cell">
                                                        <button
                                                            className="get-info-btn"
                                                            onClick={() => alert("Take action on " + ndr._id)}
                                                        >
                                                            Take Action
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </section>
                </main>

            </Dashboardpage>
        </>
    );
};

export default NdrException;
