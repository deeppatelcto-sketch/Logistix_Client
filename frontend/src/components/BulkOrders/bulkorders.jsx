// import React, { useEffect } from "react";
// import "./bulk_order.css";
// import Dashboardpage from "../Dashboard/dashboardpage"

// const BulkOrder = () => {
//   // ====================== SIDEBAR & TOGGLE BUTTON LOGIC ========================= //
//   const updateToggleButtonPosition = () => {
//     const toggleBtn = document.getElementById("toggleBtn");
//     const sidebar = document.getElementById("sidebar");
//     if (!toggleBtn || !sidebar) return;

//     if (sidebar.classList.contains("collapsed")) {
//       toggleBtn.style.left = "44px";
//     } else {
//       toggleBtn.style.left = "214px";
//     }
//   };

//   const setInitialSidebarState = () => {
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
//   };

//   useEffect(() => {
//     const tabButtons = document.querySelectorAll(".tab-btn");
//     const tabPanels = document.querySelectorAll(".tab-panel");

//     function updateActiveBadge() {
//       tabButtons.forEach((btn) => {
//         const isActive = btn.classList.contains("active");
//         const badge = btn.querySelector(".tab-badge");
//         if (isActive) {
//           const tabName = btn.getAttribute("data-tab");
//           const panel = document.getElementById(tabName + "-table");
//           if (panel) {
//             const firstDataRow = panel.querySelector("table.data-table tr");
//             let colCount = 0;
//             if (firstDataRow) {
//               colCount = firstDataRow.querySelectorAll("td").length;
//             }
//             badge.textContent = colCount;
//             badge.style.display = "inline-block";
//           } else {
//             badge.style.display = "none";
//           }
//         } else {
//           badge.style.display = "none";
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

//     window.addEventListener("resize", setInitialSidebarState);
//     setInitialSidebarState();

//     return () => {
//       window.removeEventListener("resize", setInitialSidebarState);
//     };
//   }, []);

//   return (
//     <>
//       {/* Fonts & Icons */}
//       <link
//         rel="preconnect"
//         href="https://fonts.googleapis.com"
//       />
//       <link
//         rel="preconnect"
//         href="https://fonts.gstatic.com"
//         crossOrigin="anonymous"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/icon?family=Material+Icons"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
//         rel="stylesheet"
//       />
    
//     <Dashboardpage>

//       <main className="bo-main">
//         <section className="bo-section">
//           <div className="header-row">
//             <h2 className="title">Bulk Order</h2>
//           </div>

//           <div className="cards">
//             <div className="card">
//               <div className="card-header">
//                 <span className="tag">Large Package</span>
//                 <button className="btn-sample">
//                   <i className="material-symbols-outlined">download</i>
//                   <span>Download Sample</span>
//                 </button>
//               </div>
//               <div className="upload-box">
//                 <label>Upload Bulk Orders</label>
//                 <select>
//                   <option>Choose a Warehouse..</option>
//                 </select>
//                 <input type="file" />
//                 <button className="btn-upload">Upload</button>
//               </div>
//             </div>

//             <div className="card small">
//               <div className="card-header">
//                 <span className="tag">Small Package</span>
//                 <button className="btn-sample">
//                   <i className="material-symbols-outlined">download</i>
//                   <span>Download Sample</span>
//                 </button>
//               </div>
//               <div className="upload-box">
//                 <label>Upload Bulk Orders</label>
//                 <select>
//                   <option>Choose a Warehouse..</option>
//                 </select>
//                 <input type="file" />
//                 <button className="btn-upload">Upload</button>
//               </div>
//             </div>
//           </div>
//         </section>

//         <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//       </main>

//       </Dashboardpage>
//     </>
//   );
// };

// export default BulkOrder;
