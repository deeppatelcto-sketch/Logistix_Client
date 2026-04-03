// import React, { useEffect } from "react";
// import Dashboardpage from '../Dashboard/dashboardpage'
// import './all_orders.css';


// export default function AllOrders() {
//   useEffect(() => {
//     // ====================== SIDEBAR & TOGGLE BUTTON LOGIC ========================= //
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

//     // ============================ TAB PANEL LOGIC ============================== //
//     function initTabs() {
//       const tabButtons = document.querySelectorAll(".tab-btn");
//       const tabPanels = document.querySelectorAll(".tab-panel");

//       function updateActiveBadge() {
//         tabButtons.forEach((btn) => {
//           const isActive = btn.classList.contains("active");
//           const badge = btn.querySelector(".tab-badge");
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
//         });
//       }

//       tabButtons.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           tabButtons.forEach((b) => b.classList.remove("active"));
//           this.classList.add("active");
//           tabPanels.forEach((panel) => (panel.style.display = "none"));
//           const thisTab = this.getAttribute("data-tab");
//           const activePanel = document.getElementById(thisTab + "-table");
//           if (activePanel) {
//             activePanel.style.display = "";
//           }
//           updateActiveBadge();
//         });
//       });

//       tabPanels.forEach((panel, idx) => {
//         panel.style.display = idx === 0 ? "" : "none";
//       });
//       tabButtons.forEach((btn, idx) => {
//         if (idx === 0) btn.classList.add("active");
//         else btn.classList.remove("active");
//       });
//       updateActiveBadge();
//     }

//     document.addEventListener("DOMContentLoaded", initTabs);
//     setInitialSidebarState();
//     window.addEventListener("resize", setInitialSidebarState);

//     return () => {
//       window.removeEventListener("resize", setInitialSidebarState);
//     };
//   }, []);

//   return (
//     <>
//       {/* Google Fonts & Icons */}
//       <link
//         rel="preconnect"
//         href="https://fonts.googleapis.com"
//         crossOrigin="anonymous"
//       />
//       <link
//         rel="preconnect"
//         href="https://fonts.gstatic.com"
//         crossOrigin="anonymous"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Irish+Grover&family=Poppins:wght@100..900&display=swap"
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
//       <link rel="stylesheet" href="all_orders.css" />

//      <Dashboardpage>

//       <main className="all-orders-main">
//         <section className="all-orders-section">
//             <div className="header-row">
//                 <h2 className="title">All Orders</h2>

//                 <div className="buttons-part">
//                     <button className="create-order-btn" id="">
//                         <i className="material-symbols-outlined">download</i>
//                         <span>Create New Orders</span>
//                     </button>

//                     <button className="mis-report-btn" id="">
//                         <i className="material-symbols-outlined">download</i>
//                         <span>MIS Report</span>
//                     </button>
//                 </div>
//             </div>

//             <div className="filter-section">
//                 <div className="search-part">
//                     <div className="input-selectors">
//                         <input className="search-bar" type="text" placeholder="Search By order_id or tracking_id"/>
//                         <select className="status-selector" required>
//                             <option value="" selected>All Payments</option>
//                             <option value="">Open</option>
//                             <option value="">Pending</option>
//                             <option value="">Close</option>
//                         </select>
//                         <select className="date-selector" required>
//                             <option value="" selected>All Shipping Partners </option >
//                             <option value="">All Dates</option>
//                             <option value="">Today</option>
//                             <option value="">Yesterday</option>
//                             <option value="">Last 7 Days</option>
//                             <option value="">This Month</option>
//                             <option value="">Last Month</option>
//                             <option value="">Custom Range</option>
//                         </select>
//                     </div>

//                 </div>
//                 <div className="vertical-divider"></div>
//                 <div className="button-part">
//                     <button className="apply-btn">Apply</button>
//                 </div>
//             </div>

//             <div class="tab-bar">
//                 <button className="tab-btn active" data-tab="booked">
//                     Booked <span className="tab-badge" id="booked-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="in-transit">
//                     In-Transit <span className="tab-badge" id="in-transit-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="out-of-delivery">
//                     Out of Delivery <span className="tab-badge" id="out-of-delivery-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="pending">
//                     Pending <span className="tab-badge" id="pending-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="delivered">
//                     Delivered <span className="tab-badge" id="delivered-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="rto">
//                     RTO <span className="tab-badge" id="rto-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="not-picked">
//                     Not Picked <span className="tab-badge" id="not-picked-badge">0</span>
//                 </button>
//                 <button className="tab-btn" data-tab="lost">
//                     Lost <span className="tab-badge" id="lost-badge">0</span>
//                 </button>
//             </div>

//             <div className="tab-panel" id="booked-table">
//                 <div className="data-section">
//                     <div className="data-table-wrapper">
//                         <table className="data-table">
//                             <tr>
//                                 <th>LR/AWB NO.</th>
//                                 <td>21002010 Harshil</td>
//                                 <td>21002011 Jigna</td>
//                                 <td>21002012 Margi</td>
//                                 <td>21002013 Dharmik</td>
//                                 <td>21002014 Yash</td>
//                             </tr>
//                             <tr>
//                                 <th>MANIFESTED DATE</th>
//                                 <td>3 Day Ago 27 Feb, 2025</td>
//                                 <td>3 Day Ago 27 Feb, 2025</td>
//                                 <td>4 Day Ago 26 Feb, 2025</td>
//                                 <td>5 Day Ago 25 Feb, 2025</td>
//                                 <td>6 Day Ago 24 Feb, 2025</td>
//                             </tr>
//                             <tr>
//                                 <th>CONSIGNEE</th>
//                                 <td>AMRISHBHAI PATEL AT BHAGVANJI MAVDI POST ANTROLI KAPADWANJ KHEDA</td>
//                                 <td>SARAVANAN M 19A INDRA NAGAR EXTENSION 19 COIMBATORE TAMILNADU</td>
//                                 <td>SARAVANAN M 19A INDRA NAGAR EXTENSION 19 COIMBATORE TAMILNADU</td>
//                                 <td>SARAVANAN M 19A INDRA NAGAR EXTENSION 19 COIMBATORE TAMILNADU</td>
//                                 <td>SARAVANAN M 19A INDRA NAGAR EXTENSION 19 COIMBATORE TAMILNADU</td>
//                             </tr>
//                             <tr>
//                                 <th>TYPE</th>
//                                 <td>Franchise To Pay</td>
//                                 <td>Prepaid</td>
//                                 <td>To_Pay</td>
//                                 <td>Prepaid</td>
//                                 <td>To_Pay</td>
//                             </tr>
//                             <tr>
//                                 <th>BOX</th>
//                                 <td>1</td>
//                                 <td>1</td>
//                                 <td>1</td>
//                                 <td>1</td>
//                                 <td>1</td>
//                             </tr>
//                             <tr>
//                                 <th>ACTION</th>
//                                 <td>
//                                     <div class="buttons">
//                                         <button className="download-icon"><i className="material-symbols-outlined">download</i></button>
//                                         <button className="clone-btn">Clone</button>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="buttons">
//                                         <button className="download-icon"><i className="material-symbols-outlined">download</i></button>
//                                         <button className="clone-btn">Clone</button>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="buttons">
//                                         <button className="download-icon"><i className="material-symbols-outlined">download</i></button>
//                                         <button className="clone-btn">Clone</button>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="buttons">
//                                         <button className="download-icon"><i className="material-symbols-outlined">download</i></button>
//                                         <button className="clone-btn">Clone</button>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="buttons">
//                                         <button className="download-icon"><i className="material-symbols-outlined">download</i></button>
//                                         <button className="clone-btn">Clone</button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         </table>

//                     </div>
//                 </div>
//             </div>

//             <div className="tab-panel" id="in-transit-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="out-of-delivery-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="pending-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                             <td>2</td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                             <td>3</td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                             <td>4</td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                             <td>5</td>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="delivered-table" style={{display:"none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="rto-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="not-picked-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-panel" id="lost-table" style={{display: "none"}}>
//                 <div className="data-table-wrapper">
//                     <table className="data-table">
//                         <tr>
//                             <th>Zone</th>
//                         </tr>
//                         <tr>
//                             <th>Weight</th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Weight <br/> Charge
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 GST
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Total
//                             </th>
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//         </section>
//         <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
//       </main>

//       </Dashboardpage>
//     </>
//   );
// }




import React, { useEffect, useState } from "react";
import Dashboardpage from '../Dashboard/dashboardpage'
import './all_orders.css';

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [activeTab, setActiveTab] = useState("booked");

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/myorders', {   
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        setFilteredOrders(data);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders based on search and status
  useEffect(() => {
    let filtered = orders;

    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, orders]);

  // Map backend status to frontend tabs
  const statusToTabMap = {
    'pending': 'pending',
    'readytoship': 'booked',
    'shipped': 'in-transit',
    'delivered': 'delivered',
    'cancelled': 'rto',
    'Drafted': 'pending'
  };

  // Get orders for current tab
  const getOrdersForTab = (tab) => {
    return filteredOrders.filter(order => {
      const mappedTab = statusToTabMap[order.status] || 'pending';
      return mappedTab === tab;
    });
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return '1 Day Ago';
    return `${diffDays - 1} Days Ago ${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Update badge counts
  const updateBadgeCounts = () => {
    const tabs = ['booked', 'in-transit', 'out-of-delivery', 'pending', 'delivered', 'rto', 'not-picked', 'lost'];
    
    tabs.forEach(tab => {
      const badge = document.getElementById(`${tab}-badge`);
      if (badge) {
        const ordersCount = getOrdersForTab(tab).length;
        badge.textContent = ordersCount;
      }
    });
  };

  useEffect(() => {
    updateBadgeCounts();
  }, [filteredOrders, activeTab]);

  useEffect(() => {
    // ====================== SIDEBAR & TOGGLE BUTTON LOGIC ========================= //
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

    // ============================ TAB PANEL LOGIC ============================== //
    function initTabs() {
      const tabButtons = document.querySelectorAll(".tab-btn");
      const tabPanels = document.querySelectorAll(".tab-panel");

      function updateActiveBadge() {
        tabButtons.forEach((btn) => {
          const isActive = btn.classList.contains("active");
          const badge = btn.querySelector(".tab-badge");
          if (isActive) {
            const tabName = btn.getAttribute("data-tab");
            const ordersCount = getOrdersForTab(tabName).length;
            badge.textContent = ordersCount;
            badge.style.display = "inline-block";
          } else {
            badge.style.display = "none";
          }
        });
      }

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          const tabName = this.getAttribute("data-tab");
          handleTabClick(tabName);
          
          tabButtons.forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          tabPanels.forEach((panel) => (panel.style.display = "none"));
          const activePanel = document.getElementById(tabName + "-table");
          if (activePanel) {
            activePanel.style.display = "";
          }
          updateActiveBadge();
        });
      });

      tabPanels.forEach((panel, idx) => {
        panel.style.display = idx === 0 ? "" : "none";
      });
      tabButtons.forEach((btn, idx) => {
        if (idx === 0) btn.classList.add("active");
        else btn.classList.remove("active");
      });
      updateActiveBadge();
    }

    document.addEventListener("DOMContentLoaded", initTabs);
    setInitialSidebarState();
    window.addEventListener("resize", setInitialSidebarState);

    return () => {
      window.removeEventListener("resize", setInitialSidebarState);
    };
  }, []);

  // Render table rows for orders
  const renderTableRows = (orders) => {
    if (orders.length === 0) {
      return (
        <tr>
          <td colSpan="6" style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
            No orders found
          </td>
        </tr>
      );
    }

    // Transpose the data for horizontal display
    const headers = ['LR/AWB NO.', 'MANIFESTED DATE', 'CONSIGNEE', 'TYPE', 'BOX', 'ACTION'];
    const rows = [];

    // Create header row
    rows.push(
      <tr key="header">
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );

    // Create data rows
    orders.forEach((order, orderIndex) => {
      const rowData = [
        order.orderId,
        formatDate(order.createdAt),
        `Delivery Pincode: ${order.deliveryPincode || 'N/A'}`,
        order.paymentMode?.toUpperCase() || 'N/A',
        order.qty || 1,
        <div key={orderIndex} className="action-buttons">
          <button className="download-icon">
            <i className="material-symbols-outlined">download</i>
          </button>
          <button className="clone-btn">Clone</button>
        </div>
      ];

      rows.push(
        <tr key={orderIndex}>
          {rowData.map((data, dataIndex) => (
            <td key={dataIndex}>{data}</td>
          ))}
        </tr>
      );
    });

    return rows;
  };

  if (loading) {
    return (
      <Dashboardpage>
        <main className="all-orders-main">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            Loading orders...
          </div>
        </main>
      </Dashboardpage>
    );
  }

  return (
    <>
      {/* Google Fonts & Icons */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
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
      <link rel="stylesheet" href="all_orders.css" />

      <Dashboardpage>
        <main className="all-orders-main">
          <section className="all-orders-section">
            <div className="header-row">
              <h2 className="title">All Orders</h2>
              <div className="buttons-part">
                <button className="create-order-btn">
                  <i className="material-symbols-outlined">download</i>
                  <span>Create New Orders</span>
                </button>
                <button className="mis-report-btn">
                  <i className="material-symbols-outlined">download</i>
                  <span>MIS Report</span>
                </button>
              </div>
            </div>

            <div className="filter-section">
              <div className="search-part">
                <div className="input-selectors">
                  <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search By order_id or tracking_id"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select 
                    className="status-selector" 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="readytoship">Ready to Ship</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <select className="date-selector">
                    <option value="">All Shipping Partners</option>
                    <option value="">All Dates</option>
                    <option value="">Today</option>
                    <option value="">Yesterday</option>
                    <option value="">Last 7 Days</option>
                    <option value="">This Month</option>
                    <option value="">Last Month</option>
                    <option value="">Custom Range</option>
                  </select>
                </div>
              </div>
              <div className="vertical-divider"></div>
              <div className="button-part">
                <button 
                  className="apply-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </div>

            <div className="tab-bar">
              <button className={`tab-btn ${activeTab === 'booked' ? 'active' : ''}`} data-tab="booked">
                Booked <span className="tab-badge" id="booked-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'in-transit' ? 'active' : ''}`} data-tab="in-transit">
                In-Transit <span className="tab-badge" id="in-transit-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'out-of-delivery' ? 'active' : ''}`} data-tab="out-of-delivery">
                Out of Delivery <span className="tab-badge" id="out-of-delivery-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`} data-tab="pending">
                Pending <span className="tab-badge" id="pending-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'delivered' ? 'active' : ''}`} data-tab="delivered">
                Delivered <span className="tab-badge" id="delivered-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'rto' ? 'active' : ''}`} data-tab="rto">
                RTO <span className="tab-badge" id="rto-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'not-picked' ? 'active' : ''}`} data-tab="not-picked">
                Not Picked <span className="tab-badge" id="not-picked-badge">0</span>
              </button>
              <button className={`tab-btn ${activeTab === 'lost' ? 'active' : ''}`} data-tab="lost">
                Lost <span className="tab-badge" id="lost-badge">0</span>
              </button>
            </div>

            {/* Booked Tab */}
            <div className="tab-panel" id="booked-table" style={{ display: activeTab === 'booked' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('booked'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* In-Transit Tab */}
            <div className="tab-panel" id="in-transit-table" style={{ display: activeTab === 'in-transit' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('in-transit'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Out of Delivery Tab */}
            <div className="tab-panel" id="out-of-delivery-table" style={{ display: activeTab === 'out-of-delivery' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('out-of-delivery'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pending Tab */}
            <div className="tab-panel" id="pending-table" style={{ display: activeTab === 'pending' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('pending'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Delivered Tab */}
            <div className="tab-panel" id="delivered-table" style={{ display: activeTab === 'delivered' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('delivered'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RTO Tab */}
            <div className="tab-panel" id="rto-table" style={{ display: activeTab === 'rto' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('rto'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Not Picked Tab */}
            <div className="tab-panel" id="not-picked-table" style={{ display: activeTab === 'not-picked' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('not-picked'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Lost Tab */}
            <div className="tab-panel" id="lost-table" style={{ display: activeTab === 'lost' ? '' : 'none' }}>
              <div className="data-section">
                <div className="data-table-wrapper">
                  <table className="data-table">
                    <tbody>
                      {renderTableRows(getOrdersForTab('lost'))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
        </main>
      </Dashboardpage>
    </>
  );
}