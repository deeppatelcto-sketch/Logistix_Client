// import React from "react";
// import "./style.css"; 
// import calculatorIcon from "./Images/calculator(BLUE)-icon.svg";
// import walletIcon from "./Images/wallet(BLUE)-icon.svg";
// import pickupIcon from "./Images/pickup(BLUE)-icon.svg";
// import orderIcon from "./Images/order(BLUE)-icon.svg";
// import weightIcon from "./Images/weight_monitor(BLUE).svg";
// import bookmarkIcon from "./Images/bookmark(BLUE)-icon.svg";
// import girlImage from "./Images/girl-image2.png";
// import Dashboardpage from "../Dashboard/dashboardpage"

// const MYDashboard = () => {
//   return (
//     <Dashboardpage>
//     <main className="main">
//       <section className="dashboard">
//         <div className="row-1">
//           <div className="quick-actions">
//             <div className="action-card top-left">
//               <img src={calculatorIcon} alt="" />
//               <p>Rate<br />Calculator</p>
//             </div>  

//             <div className="action-card top-right-2">
//               <img src={walletIcon} alt="" />
//               <p>Wallet<br />Recharge</p>
//             </div>

//             <div className="action-card top-right">
//               <img src={pickupIcon} alt="" />
//               <p>Pickup<br />Request</p>
//             </div>

//             <div className="action-card bottom-left">
//               <img src={orderIcon} alt="" />
//               <p>Order<br />Creation</p>
//             </div>

//             <div className="action-card bottom-left-2">
//               <img src={weightIcon} alt="" />
//               <p>Weight<br />Dispute</p>
//             </div>

//             <div className="action-card bottom-right">
//               <img src={bookmarkIcon} alt="" />
//               <p>Pickup<br />Point</p>
//             </div>
//           </div>

//           <div className="pickup-container">
//             <h2>Today Pickup's</h2>
//             <div className="pickup-cards">
//               <div className="pickup-card card1">
//                 <p>2100124</p>
//                 <p><strong>#BOX</strong> : 1</p>
//                 <p>Sarjan Tower,<br />Vandematram<br />Gota, Ahmedabad</p>
//               </div>
//               <div className="pickup-card card2">
//                 <p>2100125</p>
//                 <p><strong>#BOX :</strong> 1</p>
//                 <p>Ganesh Skyline,<br />Vandemataram<br />Gota, Ahmedabad</p>
//               </div>
//             </div>
//             <button className="add-pickup-req-btn">Add Pickup Request</button>
//           </div>
//         </div>

//         <div className="row-2">
//           <div className="latest-orders">
//             <h4>Latest Orders</h4>
//             <table className="latest-orders-table">
//               <thead>
//                 <tr>
//                   <th>LR/ AWB NO</th>
//                   <th className="consignee">CONSIGNEE</th>
//                   <th className="manifested-on">MANIFESTED ON</th>
//                   <th className="status">STATUS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>221222</td>
//                   <td className="name-address" style={{ textAlign: "left" }}>
//                     MR. Harshil Patel<br />Ahmedabad, Gujarat
//                   </td>
//                   <td className="date">21 Feb, 2025</td>
//                   <td className="status"><span className="status-badge">Manifested</span></td>
//                 </tr>
//                 <tr>
//                   <td>221221</td>
//                   <td className="name-address">MR. Suman Patel<br />Surat, Gujarat</td>
//                   <td className="date">16 Feb, 2025</td>
//                   <td className="status"><span className="status-badge">Delivered</span></td>
//                 </tr>
//                 <tr>
//                   <td>221220</td>
//                   <td className="name-address">MR. Aman Patel<br />Rajkot, Gujarat</td>
//                   <td className="date">11 Feb, 2025</td>
//                   <td className="status"><span className="status-badge">Delivered</span></td>
//                 </tr>
//                 <tr>
//                   <td>221219</td>
//                   <td className="name-address">MR. Raj Patel<br />Katch, Gujarat</td>
//                   <td className="date">8 Feb, 2025</td>
//                   <td className="status"><span className="status-badge">Delivered</span></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="bookings-remmitence">
//             <div className="your-bookings">
//               <div className="header-part">
//                 <h4 className="heading">Your Bookings</h4>
//                 <button>
//                   This Month <i className="material-symbols-outlined drop-down-arrow-icon">arrow_drop_down</i>
//                 </button>
//               </div>
//               <div className="orders-grids">
//                 <div className="order-grid-1">
//                   Todays Order <br /> <span>2</span>
//                 </div>
//                 <div className="order-grid-2">
//                   Overall Orders <br /> <span>101</span>
//                 </div>
//               </div>
//             </div>

//             <div className="remittance">
//               <div className="remittance-label">Remmitence</div>
//               <div className="remittance-cards">
//                 <div className="remit-card">
//                   <p>Last<br />Remittance</p>
//                   <span className="price">$80</span>
//                 </div>
//                 <div className="remit-card middle-remit-card">
//                   <p>New <br />Remittance</p>
//                   <span className="date">28 Feb, 2025</span>
//                 </div>
//                 <div className="remit-card">
//                   <p>Upcoming <br /> Remittance</p>
//                   <span className="price">$30</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>

//       <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
//     </main>
//     </Dashboardpage>
//   );
// };

// export default MYDashboard;
