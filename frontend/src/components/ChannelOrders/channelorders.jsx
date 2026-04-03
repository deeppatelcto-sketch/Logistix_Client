// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./channel_order.css";
// import Dashboardpage from "../Dashboard/dashboardpage"

// export default function ChannelOrder() {
//   // ====================== SIDEBAR & TOGGLE BUTTON LOGIC ========================= //
//   function updateToggleButtonPosition() {
//     const toggleBtn = document.getElementById("toggleBtn");
//     const sidebar = document.getElementById("sidebar");
//     if (!toggleBtn || !sidebar) return;

//     if (sidebar.classList.contains("collapsed")) {
//       toggleBtn.style.left = "44px";
//     } else {
//       toggleBtn.style.left = "214px";
//     }
//   }

//   function setInitialSidebarState() {
//     const sidebar = document.getElementById("sidebar");
//     const body = document.body;

//     if (window.innerWidth < 768) {
//       body.classList.add("sidebar-collapsed");
//       sidebar?.classList.add("collapsed");
//     } else {
//       body.classList.remove("sidebar-collapsed");
//       sidebar?.classList.remove("collapsed");
//     }
//     updateToggleButtonPosition();
//   }

//   useEffect(() => {
//     const tabButtons = document.querySelectorAll(".tab-btn");
//     const tabPanels = document.querySelectorAll(".tab-panel");

//     function updateActiveBadge() {
//       tabButtons.forEach((btn) => {
//         const isActive = btn.classList.contains("active");
//         const badge = btn.querySelector(".tab-badge");
//         if (badge) {
//           if (isActive) {
//             const tabName = btn.getAttribute("data-tab");
//             const panel = document.getElementById(tabName + "-table");
//             if (panel) {
//               const firstDataRow = panel.querySelector("table.data-table tr");
//               let colCount = 0;
//               if (firstDataRow) {
//                 colCount = firstDataRow.querySelectorAll("td").length;
//               }
//               badge.textContent = colCount;
//               badge.style.display = "inline-block";
//             } else {
//               badge.style.display = "none";
//             }
//           } else {
//             badge.style.display = "none";
//           }
//         }
//       });
//     }

//     tabButtons.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         tabButtons.forEach((b) => b.classList.remove("active"));
//         this.classList.add("active");
//         tabPanels.forEach((panel) => (panel.style.display = "none"));
//         const thisTab = this.getAttribute("data-tab");
//         const activePanel = document.getElementById(thisTab + "-table");
//         if (activePanel) {
//           activePanel.style.display = "";
//         }
//         updateActiveBadge();
//       });
//     });

//     tabPanels.forEach((panel, idx) => {
//       panel.style.display = idx === 0 ? "" : "none";
//     });
//     tabButtons.forEach((btn, idx) => {
//       if (idx === 0) btn.classList.add("active");
//       else btn.classList.remove("active");
//     });
//     updateActiveBadge();

//     setInitialSidebarState();
//     window.addEventListener("resize", setInitialSidebarState);

//     return () => {
//       window.removeEventListener("resize", setInitialSidebarState);
//     };
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Channel Order</title>
//         {/* Fonts : Poppins, Inter, Irish Grover */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Irish+Grover&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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

//       <Dashboardpage>

//       <main className="co-main">
//         <section className="co-section">
//           <div className="header-row">
//             <h2 className="title">Channel Order</h2>
//           </div>

//           <div className="filter-section">
//             <div className="select-part">
//               <select>
//                 <option value="">All Status</option>
//               </select>
//               <select>
//                 <option value="">All Payments</option>
//               </select>
//               <select>
//                 <option value="">All Channels</option>
//               </select>
//               <select>
//                 <option value="">Last 30 Days</option>
//               </select>
//             </div>
//             <div className="button-part">
//               <button className="apply-btn">Apply</button>
//             </div>
//           </div>

//           <div className="data-section">
//             <div className="table-wrapper">
//               <table className="data-table">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>AWB No.</th>
//                     <th>ORDER ID</th>
//                     <th>MANIFESTED DATE</th>
//                     <th>LAST SCAN LOCATION</th>
//                     <th>PAYMENT MODE</th>
//                     <th>STATUS</th>
//                     <th>ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>
//         <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
//       </main>

//       </Dashboardpage>
//     </>
//   );
// }
