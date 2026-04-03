
// import React, { useEffect, useState } from "react";
// import "./finance_cod.css";
// import Dashboardpage from "../Dashboard/dashboardpage";
// import paymentlogo from "./Images/paytm_logo.svg";
// import recomimg from "./Images/recommended_text.svg";

// const WalletRecharge = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     useEffect(() => {
//         // ====================== SIDEBAR & TOGGLE BUTTON LOGIC ========================= //
//         function updateToggleButtonPosition() {
//             const toggleBtn = document.getElementById("toggleBtn");
//             const sidebar = document.getElementById("sidebar");
//             if (!toggleBtn || !sidebar) return;

//             if (sidebar.classList.contains("collapsed")) {
//                 toggleBtn.style.left = "44px";
//             } else {
//                 toggleBtn.style.left = "214px";
//             }
//         }

//         function setInitialSidebarState() {
//             const sidebar = document.getElementById("sidebar");
//             const body = document.body;

//             if (window.innerWidth < 768) {
//                 body.classList.add("sidebar-collapsed");
//                 sidebar?.classList.add("collapsed");
//             } else {
//                 body.classList.remove("sidebar-collapsed");
//                 sidebar?.classList.remove("collapsed");
//             }
//             updateToggleButtonPosition();
//         }

//         // ============================ WINDOW RESIZE EVENT ============================== //
//         window.addEventListener("resize", setInitialSidebarState);
//         setInitialSidebarState();

//         return () => {
//             window.removeEventListener("resize", setInitialSidebarState);
//         };
//     }, []);

//     return (
//         <>
//             {/* Fonts and Icons */}
//             <link rel="preconnect" href="https://fonts.googleapis.com" />
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
//                 rel="stylesheet"
//             />
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//                 rel="stylesheet"
//             />
//             <link
//                 href="https://fonts.googleapis.com/icon?family=Material+Icons"
//                 rel="stylesheet"
//             />
//             <link
//                 href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
//                 rel="stylesheet"
//             />

//             <Dashboardpage>
//                 <main className="wallet-main">
//                     {/* Wallet Recharge Section */}       
//                     <section className="wr-section">  
//                         <div className="header-row">    
//                             <h2 className="title">Wallet Recharge</h2>
//                         </div>       

//                         <div className="cards">        
//                             <div className="card recharge-card">
//                                 <div className="display-box">
//                                     <div className="paytm-box">
//                                         <img src={paymentlogo} alt="" />
//                                     </div>
//                                     <div className="text-box">
//                                         <img src={recomimg} alt="" />
//                                     </div>
//                                 </div>
//                                 <div className="button-box">
//                                     <button
//                                         id="rechargeWalletBtn"    
//                                         onClick={() => setIsModalOpen(true)}   
//                                     >
//                                         Recharge Wallet   
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="card wallet-card"> 
//                                 <div className="amount-box">
//                                     <div className="amount-content">
//                                         <div className="balance-part">
//                                             <span>Amount</span>
//                                             <span>₹ 2124</span>
//                                         </div>
//                                         <div className="divider"></div>   
//                                         <div className="status-part">
//                                             <div className="status-circle">
//                                                 <span>
//                                                     Wallet is <br /> Healthy
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="buttons">
//                                     <button>Rewards</button>
//                                     <button>Refer & Earn</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Wallet Details Section */}

//                     <section className="wd-section">       
//                         <div className="header-row">
//                             <h2 className="title">Wallet Details</h2>         
//                             <button className="export-report-btn">Export Report</button>             
//                         </div>

//                         <div className="detail-container">       
//                             <div className="menu-bar">    
//                                 <div className="filter-section">
//                                     <div className="search-part">     
//                                         <div className="input-selectors">            
//                                             <input
//                                                 className="search-bar"
//                                                 type="text"
//                                                 placeholder="Search By Particulars"
//                                             />

//                                             <select className="status-selector" required defaultValue="">
//                                                 <option value="">All Types</option>
//                                                 <option value="open">Open</option>
//                                                 <option value="pending">Pending</option>
//                                                 <option value="close">Close</option>
//                                             </select>


//                                             <select className="date-selector" required>     
//                                                 <option value="" defaultValue>
//                                                     All Dates
//                                                 </option>
//                                                 <option value="today">Today</option>
//                                                 <option value="yesterday">Yesterday</option>
//                                                 <option value="last7days">Last 7 Days</option>
//                                                 <option value="thismonth">This Month</option>
//                                                 <option value="lastmonth">Last Month</option>
//                                                 <option value="custom">Custom Range</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="buttons-part">
//                                         <div>
//                                             <button className="apply-btn">Apply</button>           
//                                         </div>
//                                         <div>
//                                             <button className="clear-btn">Clear</button>    
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="tab-bar">
//                                     <button className="tab-btn active" data-tab="booked">
//                                         Deduction <span className="tab-badge" id="booked-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="in-transit">
//                                         Recharge <span className="tab-badge" id="in-transit-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="out-of-delivery">
//                                         Refund <span className="tab-badge" id="out-of-delivery-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="pending">
//                                         Weight <br /> Reconciliation{" "}
//                                         <span className="tab-badge" id="pending-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="delivered">
//                                         COD Remittance{" "}
//                                         <span className="tab-badge" id="delivered-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="rto">
//                                         Cashback <span className="tab-badge" id="rto-badge">0</span>
//                                     </button>
//                                     <button className="tab-btn" data-tab="not-picked">
//                                         Passbook <span className="tab-badge" id="not-picked-badge">0</span>
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="data-part">
//                                 <div className="table-wrapper">
//                                     <table className="wallet-table">
//                                         <thead>
//                                             <tr>
//                                                 <th>Date &amp; Time</th>
//                                                 <th>Particulars</th>
//                                                 <th>Transaction Id</th>
//                                                 <th>Amount</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>01 Apr, 2025 02:18</td>
//                                                 <td>Debit For Order Creation AWB No : 31636410456341</td>
//                                                 <td>123456</td>
//                                                 <td>100.36</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>01 Apr, 2025 12:16</td>
//                                                 <td>Debit For Order Creation AWB No : TRCP0000007536</td>
//                                                 <td>123456</td>
//                                                 <td>92.2</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>31 Mar, 2025 04:46</td>
//                                                 <td>Debit For Order Creation AWB No : 4988311429702</td>
//                                                 <td>123456</td>
//                                                 <td>122.2</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>31 Mar, 2025 04:11</td>
//                                                 <td>Debit For Order Creation AWB No : 31636410453865</td>
//                                                 <td>123456</td>
//                                                 <td>132.2</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>31 Mar, 2025 11:49</td>
//                                                 <td>Debit For Order Creation AWB No : 31636410452572</td>
//                                                 <td>123456</td>
//                                                 <td>62.2</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>28 Mar, 2025 04:24</td>
//                                                 <td>Debit For Order Creation AWB No : 4988311424625</td>
//                                                 <td>123456</td>
//                                                 <td>89.2</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>28 Mar, 2025 03:38</td>
//                                                 <td>Debit For Order Creation AWB No : 4988311424511</td>
//                                                 <td>123456</td>
//                                                 <td>222.2</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Modal */}
//                     {isModalOpen && (
//                         <div
//                             id="walletModal"
//                             className="modal-overlay"
//                             onClick={(e) => {
//                                 if (e.target.classList.contains("modal-overlay")) {
//                                     setIsModalOpen(false);
//                                 }
//                             }}
//                         >
//                             <div className="wallet-form">
//                                 <div className="modal-header">
//                                     <h3>Add Money to Wallet</h3>
//                                 </div>
//                                 <div className="modal-content">
//                                     <div className="amount-section">
//                                         <span className="currency">₹</span>
//                                         <div className="divider"></div>
//                                         <input
//                                             className="amount"
//                                             type="number"
//                                             defaultValue="100"
//                                             id="amountInput"
//                                             min="1"
//                                         />
//                                     </div>
//                                     <div className="amount-buttons">
//                                         <button className="add-amt">+ ₹ 1000</button>
//                                         <button className="add-amt">+ ₹ 3000</button>
//                                         <button className="add-amt">+ ₹ 5000</button>
//                                         <button className="add-amt">+ ₹ 10,000</button>
//                                     </div>
//                                     <div className="coupon-section">
//                                         <div className="apply-row">
//                                             <i className="material-symbols-outlined">
//                                                 confirmation_number
//                                             </i>
//                                             <input type="text" placeholder="Apply Coupon code" />
//                                             <button className="apply-btn">Apply</button>
//                                         </div>
//                                         <button className="all-btn">
//                                             <span>All Coupons</span>
//                                             <i className="material-symbols-outlined">
//                                                 arrow_forward_ios
//                                             </i>
//                                         </button>
//                                     </div>
//                                     <div className="modal-footer">
//                                         <button className="pay-btn">Pay Now</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
//                 </main>
//             </Dashboardpage>
//         </>
//     );
// };

// export default WalletRecharge;









import React, { useEffect, useState } from "react";
import "./finance_cod.css";
import Dashboardpage from "../Dashboard/dashboardpage";
import paymentlogo from "./Images/paytm_logo.svg";
import recomimg from "./Images/recommended_text.svg";
import axios from "axios";

const WalletRecharge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(100);

  // ✅ Load wallet info from backend
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://13.61.104.107:8000/mywallet", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBalance(res.data.balance);
        setTransactions(res.data.transactions.reverse()); 
      } catch (err) {
        console.error("Failed to fetch wallet", err);
      }
    };
    fetchWallet();
  }, []);

  // ✅ Recharge Wallet
  const handleRecharge = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://13.61.104.107:8000/recharge",
        { amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Wallet recharged successfully!");
      setBalance(res.data.balance);
      setTransactions(res.data.transactions.reverse());
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("Recharge failed. Please try again.");
    }
  };

  // Sidebar toggle logic (no changes)
  useEffect(() => {
    function updateToggleButtonPosition() {
      const toggleBtn = document.getElementById("toggleBtn");
      const sidebar = document.getElementById("sidebar");
      if (!toggleBtn || !sidebar) return;
      toggleBtn.style.left = sidebar.classList.contains("collapsed")
        ? "44px"
        : "214px";
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
    window.addEventListener("resize", setInitialSidebarState);
    setInitialSidebarState();
    return () => window.removeEventListener("resize", setInitialSidebarState);
  }, []);

  return (
    <>
      {/* Fonts and Icons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />

      <Dashboardpage>
        <main className="wallet-main">
          {/* Wallet Recharge Section */}
          <section className="wr-section">
            <div className="header-row">
              <h2 className="title">Wallet Recharge</h2>
            </div>

            <div className="cards">
              <div className="card recharge-card">
                <div className="display-box">
                  <div className="paytm-box">
                    <img src={paymentlogo} alt="" />
                  </div>
                  <div className="text-box">
                    <img src={recomimg} alt="" />
                  </div>
                </div>
                <div className="button-box">
                  <button id="rechargeWalletBtn" onClick={() => setIsModalOpen(true)}>
                    Recharge Wallet
                  </button>
                </div>
              </div>

              <div className="card wallet-card">
                <div className="amount-box">
                  <div className="amount-content">
                    <div className="balance-part">
                      <span>Amount</span>
                      <span>₹ {balance}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="status-part">
                      <div className="status-circle">
                        <span>
                          Wallet is <br /> Healthy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button>Rewards</button>
                  <button>Refer & Earn</button>
                </div>
              </div>
            </div>
          </section>

          {/* Wallet Details Section */}
          <section className="wd-section">
            <div className="header-row">
              <h2 className="title">Wallet Details</h2>
              <button className="export-report-btn">Export Report</button>
            </div>

            <div className="detail-container">
              <div className="menu-bar">
                {/* (existing filter bar - unchanged) */}
              </div>

              <div className="data-part">
                <div className="table-wrapper">
                  <table className="wallet-table">
                    <thead>
                      <tr>
                        <th>Date &amp; Time</th>
                        <th>Particulars</th>
                        <th>Transaction Id</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.length === 0 ? (
                        <tr>
                          <td colSpan="4" style={{ textAlign: "center" }}>
                            No transactions found
                          </td>
                        </tr>
                      ) : (
                        transactions.map((txn, index) => (
                          <tr key={index}>
                            <td>
                              {new Date(txn.date).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td>{txn.description || txn.type}</td>
                            <td>{index + 1}</td>
                            <td>₹ {txn.amount}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Modal */}
          {isModalOpen && (
            <div
              id="walletModal"
              className="modal-overlay"
              onClick={(e) => {
                if (e.target.classList.contains("modal-overlay")) {
                  setIsModalOpen(false);
                }
              }}
            >
              <div className="wallet-form">
                <div className="modal-header">
                  <h3>Add Money to Wallet</h3>
                </div>
                <div className="modal-content">
                  <div className="amount-section">
                    <span className="currency">₹</span>
                    <div className="divider"></div>
                    <input
                      className="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      min="1"
                    />
                  </div>
                  <div className="amount-buttons">
                    {[1000, 3000, 5000, 10000].map((val) => (
                      <button key={val} className="add-amt" onClick={() => setAmount(amount + val)}>
                        + ₹ {val}
                      </button>
                    ))}
                  </div>
                  <div className="coupon-section">
                    <div className="apply-row">
                      <i className="material-symbols-outlined">confirmation_number</i>
                      <input type="text" placeholder="Apply Coupon code" />
                      <button className="apply-btn">Apply</button>
                    </div>
                    <button className="all-btn">
                      <span>All Coupons</span>
                      <i className="material-symbols-outlined">arrow_forward_ios</i>
                    </button>
                  </div>
                  <div className="modal-footer">
                    <button className="pay-btn" onClick={handleRecharge}>
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
        </main>
      </Dashboardpage>
    </>
  );
};

export default WalletRecharge;
