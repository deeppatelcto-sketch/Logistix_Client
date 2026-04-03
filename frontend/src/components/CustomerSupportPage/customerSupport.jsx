// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./customer_supports.css";
// import logo from './Images/my_logistix-logo.svg'

// export default function CustomerSupports() {
//     // === SIDEBAR - TOGGLE BUTTON AUTO:POSITION LOGIC === //
//     function updateToggleButtonPosition() {
//         const toggleBtn = document.getElementById("toggleBtn");
//         const sidebar = document.getElementById("sidebar");
//         if (!toggleBtn || !sidebar) return;

//         if (sidebar.classList.contains("collapsed")) {
//             toggleBtn.style.left = "44px";
//         } else {
//             toggleBtn.style.left = "214px";
//         }
//     }

//     // === SIDEBAR - AUTO CLOSE BELOW WIDTH: 768px LOGIC === //
//     function setInitialSidebarState() {
//         const sidebar = document.getElementById("sidebar");
//         const body = document.body;

//         if (window.innerWidth < 768) {
//             body.classList.add("sidebar-collapsed");
//             sidebar?.classList.add("collapsed");
//         } else {
//             body.classList.remove("sidebar-collapsed");
//             sidebar?.classList.remove("collapsed");
//         }
//         updateToggleButtonPosition();
//     }

//     useEffect(() => {
//         const sidebar = document.getElementById("sidebar");
//         const toggleBtn = document.getElementById("toggleBtn");
//         const toggleIcon = document.getElementById("toggleIcon");
//         const body = document.body;

//         // Initial state
//         setInitialSidebarState();

//         // Toggle Sidebar
//         toggleBtn?.addEventListener("click", () => {
//             sidebar.classList.toggle("collapsed");
//             toggleIcon.classList.toggle("rotated");

//             if (sidebar.classList.contains("collapsed")) {
//                 body.classList.add("sidebar-collapsed");
//             } else {
//                 body.classList.remove("sidebar-collapsed");
//             }
//             updateToggleButtonPosition();
//         });

//         // Tab Switching
//         const tabBtns = document.querySelectorAll(".tab-btn");
//         const dataContainers = document.querySelectorAll(".data-container");

//         document.getElementById("open-tab").classList.add("active");
//         document.querySelector('[data-tab="open"]').classList.add("active");

//         tabBtns.forEach((btn) => {
//             btn.addEventListener("click", () => {
//                 dataContainers.forEach((container) =>
//                     container.classList.remove("active")
//                 );
//                 tabBtns.forEach((b) => b.classList.remove("active"));

//                 const tab = btn.getAttribute("data-tab");
//                 document.getElementById(tab + "-tab").classList.add("active");
//                 btn.classList.add("active");
//             });
//         });

//         // Modal Logic
//         const newRequestBtn = document.getElementById("newRequestBtn");
//         const modal = document.getElementById("newRequestModal");
//         const closeModal = document.getElementById("closeModal");

//         newRequestBtn?.addEventListener("click", () => {
//             modal.style.display = "flex";
//         });

//         closeModal?.addEventListener("click", () => {
//             modal.style.display = "none";
//         });

//         window.addEventListener("click", (e) => {
//             if (e.target === modal) {
//                 modal.style.display = "none";
//             }
//         });

//         // Resize Event
//         window.addEventListener("resize", setInitialSidebarState);

//         return () => {
//             window.removeEventListener("resize", setInitialSidebarState);
//         };
//     }, []);

//     useEffect(() => {
//       const toggleBtn = document.getElementById("toggleBtn");
//       const sidebar = document.getElementById("sidebar");
//       const toggleIcon = document.getElementById("toggleIcon");
//       const sidebarFooter = document.querySelector(".sidebar-footer");
//       const body = document.body;

//       if (!toggleBtn || !sidebar || !toggleIcon) return;

//       const updateToggleButtonPosition = () => {
//         if (sidebar.classList.contains("collapsed")) {
//           toggleBtn.style.left = "44px";
//         } else {
//           toggleBtn.style.left = "214px";
//         }
//       };

//       const setInitialSidebarState = () => {
//         if (window.innerWidth < 768) {
//           body.classList.add("sidebar-collapsed");
//           sidebar.classList.add("collapsed");
//           sidebarFooter.style.display = "none";
//         } else {
//           body.classList.remove("sidebar-collapsed");
//           sidebar.classList.remove("collapsed");
//           sidebarFooter.style.display = "block";
//         }
//         updateToggleButtonPosition();
//       };

//       const toggleSidebar = () => {
//         sidebar.classList.toggle("collapsed");
//         toggleIcon.classList.toggle("rotated");
//         body.classList.toggle("sidebar-collapsed");

//         if (sidebar.classList.contains("collapsed")) {
//           sidebarFooter.style.display = "none";
//         } else {
//           sidebarFooter.style.display = "block";
//         }
//         updateToggleButtonPosition();
//       };

//       // ✅ initialize
//       setInitialSidebarState();
//       toggleBtn.addEventListener("click", toggleSidebar);
//       window.addEventListener("resize", setInitialSidebarState);

//       return () => {
//         toggleBtn.removeEventListener("click", toggleSidebar);
//         window.removeEventListener("resize", setInitialSidebarState);
//       };
//     }, []);

//     return (
//         <>
//             <Helmet>
//                 <title>Customer Supports</title>
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
//                 {/* Header Left */}
//                 <div className="header-left">
//                     <img className="logo" src={logo} alt="" />
//                 </div>
//                 {/* Header Middle */}
//                 <div className="header-middle">
//                     <div className="search-container">
//                         <i className="material-icons-outlined search-icon" id="searchIcon">
//                             search
//                         </i>
//                         <input type="text" id="searchInput" placeholder="Search BY LRN/AWB no" />
//                     </div>
//                 </div>
//                 {/* Header Right */}
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
//                 <i
//                     className="material-icons right-double-arrow-icon"
//                     id="toggleIcon"
//                 >
//                     keyboard_double_arrow_left
//                 </i>
//             </button>

//             {/* Sidebar */}
//             <nav className="sidebar" id="sidebar">
//               <div className="sidebar-content">

//                 <a href="/dashboard" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">dashboard</i>
//                     <span>Dashboard</span>
//                   </div>
//                 </a>

//                 <a href="/MyOrders" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">orders</i>
//                     <span>My Order</span>
//                     <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                   </div>
//                 </a>

//                 <a href="/PickupPointPage" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">package</i>
//                     <span>Pickup Point</span>
//                   </div>
//                 </a>

//                 <a href="/PickupPage" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">hail</i>
//                     <span>Pickup Request</span>
//                   </div>
//                 </a>

//                 <a href="/WeightReconciliation" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">weight</i>
//                     <span>Weight Reconcillation</span>
//                   </div>
//                 </a>

//                 <a href="/deliveryApointment" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">package_2</i>
//                     <span>Delivery Appointment</span>
//                   </div>
//                 </a>

//                 <a href="/NdrException" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">exclamation</i>
//                     <span>NDR & Exceptions</span>
//                   </div>
//                 </a>

//                 <a href="/RateCalculator" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">calculate</i>
//                     <span>Rate Calculator</span>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">payments</i>
//                     <span>Finance & COD</span>
//                     <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">docs</i>
//                     <span>Billing</span>
//                     <i class="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">contract</i>
//                     <span>Price list</span>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">handyman</i>
//                     <span>Integration</span>
//                     <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">settings</i>
//                     <span>Resource Center</span>
//                     <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">support_agent</i>
//                     <span>Customer Support</span>
//                   </div>
//                 </a>

//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <i className="material-symbols-outlined sidebar-icons">shopping_cart</i>
//                     <span>Shop</span>
//                   </div>
//                 </a>


//                 {/* ... other links (same as your HTML) ... */}

//               </div>
//               <div className="sidebar-footer">
//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <span className="last">Terms of Use</span>
//                   </div>
//                 </a> 
//                 <a href="#" className="sidebar-link">
//                   <div className="sidebar-items">
//                     <span className="last">Privacy Policy</span>
//                   </div>
//                 </a>
//               </div>
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

//             {/* Main Section */}
//             <main className="customer-supports-main">
//                     <section class="customer-supports-section" id="">
//                         <div class="header-row">
//                             <h2 class="title">Pincode Serviceability</h2>
//                             <button class="new-request-btn" id="newRequestBtn">
//                                 <i class="material-symbols-outlined">add</i>
//                                 New Request
//                             </button>
//                         </div>

//                         <div class="tab-bar">
//                             <button class="tab-btn" data-tab="open">Open</button>
//                             <button class="tab-btn" data-tab="pending">Pending</button>
//                             <button class="tab-btn" data-tab="close">Close</button>
//                         </div>

//                         <div class="data-container" id="open-tab">
//                             <div class="table-wrapper">
//                                 <table class="data-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Date</th>
//                                             <th>Ticket Id</th>
//                                             <th>Category</th>
//                                             <th>Subject</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>

//                                 <div class="table-footer">
//                                     <div class="entry-info">
//                                         Showing 1 to 4 of 4 entries
//                                     </div>
//                                     <div class="pagination">
//                                         <button class="page-btn" id="prev-btn">Previous</button>
//                                         <span id="page-info">1</span>
//                                         <button class="page-btn" id="next-btn">Next</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="data-container" id="pending-tab">
//                             <div class="table-wrapper">
//                                 <table class="data-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Date</th>
//                                             <th>Ticket Id</th>
//                                             <th>Category</th>
//                                             <th>Subject</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>

//                                 <div class="table-footer">
//                                     <div class="entry-info">
//                                         Showing 1 to 4 of 4 entries
//                                     </div>
//                                     <div class="pagination">
//                                         <button class="page-btn" id="prev-btn">Previous</button>
//                                         <span id="page-info">1</span>
//                                         <button class="page-btn" id="next-btn">Next</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="data-container" id="close-tab">
//                             <div class="table-wrapper">
//                                 <table class="data-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Date</th>
//                                             <th>Ticket Id</th>
//                                             <th>Category</th>
//                                             <th>Subject</th>
//                                             <th>Rating</th>
//                                             <th>Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td></td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td></td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td></td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                         <tr>
//                                             <td>04 Feb 2025 12:24 PM</td>
//                                             <td>551395</td>
//                                             <td>Delivery Related</td>
//                                             <td>64603980037461</td>
//                                             <td></td>
//                                             <td><button class="view-btn" id="viewBtn">View</button></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>

//                                 <div class="table-footer">
//                                     <div class="entry-info">
//                                         Showing 1 to 4 of 4 entries
//                                     </div>
//                                     <div class="pagination">
//                                         <button class="page-btn" id="prev-btn">Previous</button>
//                                         <span id="page-info">1</span>
//                                         <button class="page-btn" id="next-btn">Next</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     <div id="newRequestModal" class="modal">
//                         <div class="new-request-form">
//                             <div class="form-header">
//                                 <h3>Create New Request</h3>
//                                 <span class="close-btn" id="closeModal">&times;</span>
//                             </div>

//                             <div class="form-body">
//                                 <form class="new-req-form">
//                                     <select>
//                                         <option>Select Issue Category</option>
//                                     </select>

//                                     <select>
//                                         <option>Select Issue Sub-Category</option>
//                                     </select>

//                                     <input type="text" placeholder="Please Enter Subject" />

//                                     <textarea placeholder="Please Enter Description"></textarea>

//                                     <span class="choose-file">
//                                         <input type="file" />
//                                         <p class="note">(Max size: 100KB)</p>
//                                     </span>
//                                 </form>
//                             </div>
//                             <div class="form-footer">
//                                 <button type="submit" class="submit-btn">Submit</button>
//                             </div>
//                         </div>
//                     </div>




//                 <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//             </main>
//         </>
//     );
// }




import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./customer_supports.css";
import logo from './Images/my_logistix-logo.svg';
import Dashboardpage from "../Dashboard/dashboardpage"

export default function CustomerSupports() {
    const [tickets, setTickets] = useState({ Open: [], Pending: [], Closed: [] });
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [reply, setReply] = useState("");
    const [replyFile, setReplyFile] = useState(null);
    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        subject: "",
        description: "",
        file: null
    });

    // === Fetch tickets ===
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const token = localStorage.getItem("token"); // ✅ token from localStorage
                const res = await fetch("http://localhost:8000/allmyticket", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();

                if (Array.isArray(data)) {
                    const grouped = { Open: [], Pending: [], Closed: [] };
                    data.forEach(ticket => {
                        grouped[ticket.status]?.push(ticket);
                    });
                    setTickets(grouped);
                }
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        fetchTickets();
    }, []);


    const handleView = async (ticketId) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:8000/getticketuser/${ticketId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok) {
                setSelectedTicket(data); // ✅ open detail modal
            } else {
                alert(data.message || "Error fetching ticket detail");
            }
        } catch (error) {
            console.error("Error fetching ticket detail:", error);
        }
    };

    // === Submit reply ===
    const handleReplySubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const form = new FormData();
            form.append("reply", reply);
            if (replyFile) form.append("file", replyFile);

            const res = await fetch(
                `http://localhost:8000/reply/${selectedTicket.ticketId}`,
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                    body: form,
                }
            );

            const data = await res.json();
            if (res.ok) {
                alert("Reply submitted!");
                setReply("");
                setReplyFile(null);
                setSelectedTicket(null);
                handleView(selectedTicket.ticketId);

            } else {
                alert(data.message || "Error submitting reply");
            }
        } catch (error) {
            console.error("Error submitting reply:", error);
        }
    };

    // === Handle form input ===
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    // === Submit new ticket ===
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const form = new FormData();
            form.append("category", formData.category);
            form.append("subCategory", formData.subCategory);
            form.append("subject", formData.subject);
            form.append("description", formData.description);
            if (formData.file) form.append("file", formData.file);

            const res = await fetch("http://localhost:8000/create", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: form
            });

            const data = await res.json();
            if (res.ok) {
                alert("Ticket Created!");
                window.location.reload(); // ✅ refresh tickets
            } else {
                alert(data.message || "Error creating ticket");
            }
        } catch (error) {
            console.error("Error submitting ticket:", error);
        }
    };

    // === Sidebar + UI logic (your code) ===
    function updateToggleButtonPosition() {
        const toggleBtn = document.getElementById("toggleBtn");
        const sidebar = document.getElementById("sidebar");
        if (!toggleBtn || !sidebar) return;

        if (sidebar.classList.contains("collapsed")) {
            toggleBtn.style.left = "44px";
        } else {
            toggleBtn.style.left = "214px";
        }
    }

    function setInitialSidebarState() {
        const sidebar = document.getElementById("sidebar");
        const body = document.body;

        if (window.innerWidth < 768) {
            body.classList.add("sidebar-collapsed");
            sidebar?.classList.add("collapsed");
        } else {
            body.classList.remove("sidebar-collapsed");
            sidebar?.classList.remove("collapsed");
        }
        updateToggleButtonPosition();
    }

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        const toggleBtn = document.getElementById("toggleBtn");
        const toggleIcon = document.getElementById("toggleIcon");
        const body = document.body;

        setInitialSidebarState();

        toggleBtn?.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
            toggleIcon.classList.toggle("rotated");

            if (sidebar.classList.contains("collapsed")) {
                body.classList.add("sidebar-collapsed");
            } else {
                body.classList.remove("sidebar-collapsed");
            }
            updateToggleButtonPosition();
        });

        const tabBtns = document.querySelectorAll(".tab-btn1");
        const dataContainers = document.querySelectorAll(".data-container");

        document.getElementById("open-tab").classList.add("active");
        document.querySelector('[data-tab="open"]').classList.add("active");

        tabBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                dataContainers.forEach((container) =>
                    container.classList.remove("active")
                );
                tabBtns.forEach((b) => b.classList.remove("active"));

                const tab = btn.getAttribute("data-tab");
                document.getElementById(tab + "-tab").classList.add("active");
                btn.classList.add("active");
            });
        });

        const newRequestBtn = document.getElementById("newRequestBtn");
        const modal = document.getElementById("newRequestModal");
        const closeModal = document.getElementById("closeModal");

        newRequestBtn?.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        closeModal?.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        window.addEventListener("resize", setInitialSidebarState);

        return () => {
            window.removeEventListener("resize", setInitialSidebarState);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Customer Supports</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
            </Helmet>

            <Dashboardpage>
                <main className="customer-supports-main">
                    <section className="customer-supports-section" id="">
                        <div className="header-row">
                            <h2 className="title">Pincode Serviceability</h2>
                            <button className="new-request-btn" id="newRequestBtn">
                                <i className="material-symbols-outlined">add</i>
                                New Request
                            </button>
                        </div>

                        <div className="tab-bar1">
                            <button className="tab-btn1" data-tab="open">Open</button>
                            <button className="tab-btn1" data-tab="pending">Pending</button>
                            <button className="tab-btn1" data-tab="close">Close</button>              
                        </div>

                        {/* Open Tickets */}
                        <div className="data-container" id="open-tab">
                            <div className="table-wrapper">
                                <table className="pickup-point-table">
                                    <thead>
                                        <tr>
                                            <th className="first-cell">Date</th>
                                            <th>Ticket Id</th>
                                            <th>Category</th>
                                            <th>Subject</th>
                                            <th className="action-cell">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.Open.map((t) => (
                                            <tr key={t.ticketId}>
                                                <td>{new Date(t.createdAt).toLocaleString()}</td>
                                                <td>{t.ticketId}</td>
                                                <td>{t.category}</td>
                                                <td>{t.subject}</td>
                                                <td className="action-cell">
                                                    <button
                                                        className="get-info-btn"
                                                        onClick={() => handleView(t.ticketId)}
                                                        style={{ marginLeft: "-3px" }}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>

                        {/* Pending Tickets */}
                        <div className="data-container" id="pending-tab">
                            <div className="table-wrapper">
                                <table className="pickup-point-table">
                                    <thead>
                                        <tr>
                                            <th className="first-cell">Date</th>
                                            <th>Ticket Id</th>
                                            <th>Category</th>
                                            <th>Subject</th>
                                            <th className="action-cell">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.Pending.map((t) => (
                                            <tr key={t.ticketId}>
                                                <td>{new Date(t.createdAt).toLocaleString()}</td>
                                                <td>{t.ticketId}</td>
                                                <td>{t.category}</td>
                                                <td>{t.subject}</td>
                                                <td className="action-cell">
                                                    <button
                                                        className="get-info-btn"
                                                        onClick={() => handleView(t.ticketId)}
                                                        style={{ marginLeft: "-3px" }}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* Closed Tickets */}
                        <div className="data-container" id="close-tab">
                            <div className="table-wrapper">
                                <table className="pickup-point-table">
                                    <thead>
                                        <tr>
                                            <th className="first-cell">Date</th>
                                            <th>Ticket Id</th>
                                            <th>Category</th>
                                            <th>Subject</th>
                                            <th className="action-cell">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.Closed.map((t) => (
                                            <tr key={t.ticketId}>
                                                <td>{new Date(t.createdAt).toLocaleString()}</td>
                                                <td>{t.ticketId}</td>
                                                <td>{t.category}</td>
                                                <td>{t.subject}</td>
                                                <td className="action-cell">
                                                    <button
                                                        className="get-info-btn"
                                                        onClick={() => handleView(t.ticketId)}
                                                        style={{ marginLeft: "-3px" }}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </section>

                    {/* Modal - Create Ticket */}
                    <div id="newRequestModal" className="modal">
                        <div className="new-request-form">
                            <div className="form-header">
                                <h3>Create New Request</h3>
                                <span className="close-btn" id="closeModal">&times;</span>
                            </div>

                            <div className="form-body">
                                <form className="new-req-form" onSubmit={handleSubmit}>
                                    <select name="category" onChange={handleChange} required>
                                        <option value="">Select Issue Category</option>
                                        <option value="Delivery">Delivery Related</option>
                                        <option value="Pickup">Pickup Related</option>
                                    </select>

                                    <select name="subCategory" onChange={handleChange} required>
                                        <option value="">Select Issue Sub-Category</option>
                                        <option value="Delay">Delay</option>
                                        <option value="Lost">Lost Package</option>
                                    </select>

                                    <input type="text" name="subject" placeholder="Please Enter Subject" onChange={handleChange} required />
                                    <textarea name="description" placeholder="Please Enter Description" onChange={handleChange} required />
                                    <span className="choose-file">
                                        <input type="file" name="file" onChange={handleChange} />
                                        <p className="note">(Max size: 100KB)</p>
                                    </span>
                                    <div className="form-footer">
                                        <button type="submit" className="submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                    {selectedTicket && (
                        <div className="modal" style={{ display: "flex" }}>
                            <div className="ticket-detail-box">
                                <div className="form-header">
                                    <h3>Support Ticket</h3>
                                    <span
                                        className="close-btn"
                                        onClick={() => setSelectedTicket(null)}
                                    >
                                        &times;
                                    </span>
                                </div>

                                {/* Ticket Info */}
                                <div className="ticket-info">
                                    <p><b>Created Date:</b> {new Date(selectedTicket.createdAt).toLocaleString()}</p>
                                    <p><b>Category:</b> {selectedTicket.category}</p>
                                    <p><b>Sub Category:</b> {selectedTicket.subCategory}</p>
                                    <p><b>Subject:</b> {selectedTicket.subject}</p>
                                    <p><b>Ticket ID:</b> {selectedTicket.ticketId}</p>
                                    <p><b>Query:</b> {selectedTicket.query}</p>
                                    <p>
                                        <b>Status:</b>{" "}
                                        <span className={`status ${selectedTicket.status.toLowerCase()}`}>
                                            {selectedTicket.status}
                                        </span>
                                    </p>
                                </div>


                                <div className="replies-thread">
                                    <h4>Conversation</h4>
                                    {selectedTicket.replies && selectedTicket.replies.length > 0 ? (
                                        selectedTicket.replies.map((r, idx) => (
                                            <div key={idx} className={`reply-box ${r.sender === "Admin" ? "admin" : "user"}`}>
                                                <p><b>{r.sender}:</b> {r.message}</p>
                                                {r.fileUrl && (
                                                    <a href={r.fileUrl} target="_blank" rel="noreferrer">
                                                        📎 Attachment
                                                    </a>
                                                )}
                                                <span className="time">
                                                    {new Date(r.createdAt).toLocaleString()}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="no-replies">No replies yet</p>
                                    )}
                                </div>

                                {/* Reply Form */}
                                <div className="ticket-reply">
                                    <form onSubmit={handleReplySubmit}>
                                        <textarea
                                            value={reply}
                                            onChange={(e) => setReply(e.target.value)}
                                            placeholder="Reply *"
                                            required
                                        />
                                        <input
                                            type="file"
                                            onChange={(e) => setReplyFile(e.target.files[0])}
                                        />
                                        <button type="submit" className="submit-btn">
                                            Submit
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    )}

                    <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
                </main>
            </Dashboardpage>
        </>
    );
}





