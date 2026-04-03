
import React, { useEffect, useState } from 'react';
import './dashboard.css';
import logo from './Images/my_logistix-logo.svg';
import axios from 'axios';

const Dashboardpage = ({ children }) => {
  const [pickupData, setPickupData] = useState([]);
  const [isResourceOpen, setIsResourceOpen] = useState(false);

  const [formData, setFormData] = useState({
    shippingPartner: '',
    warehouse: '',
    expectedPackageCount: '',
    pickupDate: '',
    pickupTime: '',
  });

  // Fetch all pickups
  const fetchPickups = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/mypickups', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPickupData(res.data);
    } catch (err) {
      console.error('Error fetching pickups:', err);
    }
  };

  useEffect(() => {
    fetchPickups();

    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;
    const sidebarFooter = document.querySelector('.sidebar-footer');

    const updateToggleButtonPosition = () => {
      if (!toggleBtn || !sidebar) return;
      if (sidebar.classList.contains('collapsed')) {
        toggleBtn.style.left = '44px';
      } else {
        toggleBtn.style.left = '214px';
      }
    };

    // ✅ Set initial state
    const setInitialSidebarState = () => {
      if (window.innerWidth < 768) {
        body.classList.add("sidebar-collapsed");
        sidebar?.classList.add('collapsed');
      } else {
        body.classList.remove("sidebar-collapsed");
        sidebar?.classList.remove('collapsed');
      }
      updateToggleButtonPosition();
    };

    // ✅ Toggle sidebar
    const toggleSidebar = () => {
      sidebar.classList.toggle('collapsed');
      toggleIcon.classList.toggle('rotated');
      body.classList.toggle('sidebar-collapsed');

      if (sidebar.classList.contains('collapsed')) {
        sidebarFooter.style.display = 'none';
      } else {
        sidebarFooter.style.display = 'block';
      }
      updateToggleButtonPosition();
    };

    // Run on mount
    setInitialSidebarState();
    toggleBtn?.addEventListener('click', toggleSidebar);
    window.addEventListener("resize", setInitialSidebarState);

    // Form Overlay Logic
    const addRequestBtn = document.getElementById('addRequestBtn');
    const formOverlay = document.getElementById('formOverlay');
    const closeForm = document.getElementById('closeForm');
    const form = document.querySelector('.form');

    const hideForm = () => {
      form.classList.remove('fade-in');
      form.classList.add('fade-out');
      setTimeout(() => {
        formOverlay.style.display = 'none';
        form.classList.remove('fade-out');
      }, 300);
    };

    const openForm = () => {
      formOverlay.style.display = 'flex';
      form.classList.add('fade-in');
    };

    addRequestBtn?.addEventListener('click', openForm);
    closeForm?.addEventListener('click', hideForm);
    const handleWindowClick = (e) => {
      if (e.target === formOverlay) hideForm();
    };
    window.addEventListener('click', handleWindowClick);

    // Cleanup
    return () => {
      toggleBtn?.removeEventListener('click', toggleSidebar);
      window.removeEventListener("resize", setInitialSidebarState);
      addRequestBtn?.removeEventListener('click', openForm);
      closeForm?.removeEventListener('click', hideForm);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === 'partner' ? 'shippingPartner' :
        id === 'wareHouse' ? 'warehouse' :
          id === 'packageCount' ? 'expectedPackageCount' :
            id]: value,
    }));
  };

  // Submit new pickup
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.shippingPartner || !formData.warehouse || !formData.expectedPackageCount || !formData.pickupDate || !formData.pickupTime) {
      alert('All fields are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/createpickupreq', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Pickup request added');
      setFormData({
        shippingPartner: '',
        warehouse: '',
        expectedPackageCount: '',
        pickupDate: '',
        pickupTime: '',
      });
      document.getElementById('formOverlay').style.display = 'none';
      fetchPickups();
    } catch (err) {
      console.error('Failed to add pickup', err);
      alert('Failed to add pickup');
    }
  };

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

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img className="logo" src={logo} alt="logo" />
          <button className="toggle-btn" id="toggleBtn">
            <i className="material-icons left-double-arrow-icon" id="toggleIcon">
              keyboard_double_arrow_left
            </i>
          </button>

          <div className="search-container">
            <i className="material-icons-outlined search-icon">search</i>
            <input type="text" placeholder="Search BY LRN/AWB no" />
          </div>

        </div>

        <div className="header-right">
          <button className="wallet-btn">
            <i className="material-icons-outlined wallet-icon">account_balance_wallet</i>
            <p>&#8377;</p>
            <span>0.00</span>
          </button>
          <div className="notification">
            <i className="material-icons-outlined notification-bell-icon">notifications</i>
            <span className="count">2</span>
          </div>
          <div className="user-info">
            <div className="welcome-text">Welcome Patel</div>
            <div className="user-id">
              MYLOGISTIX123
              <i className="material-icons arrow-drop-down-icon">arrow_drop_down</i>
            </div>
          </div>
        </div>
      </header>

      <div className="back-header"></div>

      {/* SIDEBAR */}
      <nav className="sidebar" id="sidebar">
        <div className="sidebar-content">


          <a href="/dashboard" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">dashboard</i>
              <span>Dashboard</span>
            </div>
          </a>

          <a href="/MyOrders" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">orders</i>
              <span>My Order</span>
              <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
            </div>
          </a>

          <a href="/PickupPointPage" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">package</i>
              <span>Pickup Point</span>
            </div>
          </a>

          <a href="/PickupPage" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">hail</i>
              <span>Pickup Request</span>
            </div>
          </a>

          <a href="/WeightReconciliation" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">weight</i>
              <span>Weight Reconcillation</span>
            </div>
          </a>

          <a href="/deliveryApointment" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">package_2</i>
              <span>Delivery Appointment</span>
            </div>
          </a>

          <a href="/NdrException" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">exclamation</i>
              <span>NDR & Exceptions</span>
            </div>
          </a>

          <a href="/RateCalculator" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">calculate</i>
              <span>Rate Calculator</span>
            </div>
          </a>

          {/* <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">payments</i>
              <span>Finance & COD</span>
              <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
            </div>
          </a> */}

          <div
            className="sidebar-link"
            onClick={() => setIsResourceOpen(!isResourceOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">settings</i>
              <span>Finance & COD</span>
              <i className="material-symbols-outlined right-arrow-icon">
                {isResourceOpen ? "expand_more" : "keyboard_arrow_right"}
              </i>
            </div>
          </div>

          {/* Submenu items */}
          {isResourceOpen && (
            <div className="submenu">
              <a href="/WalletRecharge" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Wallet</span>
                </div>
              </a>
              {/* <a href="/ZoneLists" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Zone Lists</span>
                </div>
              </a>
              <a href="/resource-center/webinars" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Webinars</span>
                </div>
              </a> */}
            </div>
          )}


          <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">docs</i>
              <span>Billing</span>
              <i class="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
            </div>
          </a>

          <a href="/PriceList" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">contract</i>
              <span>Price list</span>
            </div>
          </a>

          <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">handyman</i>
              <span>Integration</span>
              <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
            </div>
          </a>

          <div
            className="sidebar-link"
            onClick={() => setIsResourceOpen(!isResourceOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">settings</i>
              <span>Resource Center</span>
              <i className="material-symbols-outlined right-arrow-icon">
                {isResourceOpen ? "expand_more" : "keyboard_arrow_right"}
              </i>
            </div>
          </div>

          {/* Submenu items */}
          {isResourceOpen && (
            <div className="submenu">
              <a href="/PincodeServiciability" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Pincode Serviceability</span>
                </div>
              </a>
              <a href="/ZoneLists" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Zone Lists</span>
                </div>
              </a>
              <a href="/resource-center/webinars" className="sidebar-link">
                <div className="sidebar-items">
                  <span>Webinars</span>
                </div>
              </a>
            </div>
          )}


          <a href="/customerSupports" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">support_agent</i>
              <span>Customer Support</span>
            </div>
          </a>

          <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <i className="material-symbols-outlined sidebar-icons">shopping_cart</i>
              <span>Shop</span>
            </div>
          </a>


          {/* ... other links (same as your HTML) ... */}

        </div>



        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <span className="last">Terms of Use</span>
            </div>
          </a>
          <a href="#" className="sidebar-link">
            <div className="sidebar-items">
              <span className="last">Privacy Policy</span>
            </div>
          </a>
        </div>
      </nav>

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="first">
          <i className="material-icons menu-icon">list_alt</i>
          <span className="label">Total's Order :</span>
          <span className="value">921</span>
        </div>
        <div className="first">
          <i className="material-icons menu-icon">list_alt</i>
          <span className="label">Today's Order :</span>
          <span className="value">0</span>
        </div>
        <div className="third">
          <i className="material-symbols-outlined revenue-icon">finance_mode</i>
          <span className="label">Today's Revenue : </span>
          <span className="value"> &#8377; <span className="unit">0k</span></span>
        </div>
        <div className="fourth">
          <i className="material-symbols-outlined bookmark-icon">package</i>
          <span className="label">Total's Shipping : </span>
          <span className="value">0 <span className="unit">kg</span></span>
        </div>
      </div>

      <div className="back-topbar"></div>

      <main className="dashboard-main">
        {children}
      </main>

      <main className="main">
        <section className="dashboard">
          {/* ==== ROW 1 ==== */}
          <div className="row-1">
            <div className="quick-actions">
              <div className="action-card top-left">
                <img src="Images/calculator(BLUE)-icon.svg" alt="" />
                <p>
                  Rate <br /> Calculator
                </p>
              </div>

              <div className="action-card top-right-2">
                <img src="Images/wallet(BLUE)-icon.svg" alt="" />
                <p>
                  Wallet <br /> Recharge
                </p>
              </div>

              <div className="action-card top-right">
                <img src="Images/pickup(BLUE)-icon.svg" alt="" />
                <p>
                  Pickup <br /> Request
                </p>
              </div>

              <div className="action-card bottom-left">
                <img src="Images/order(BLUE)-icon.svg" alt="" />
                <p>
                  Order <br /> Creation
                </p>
              </div>

              <div className="action-card bottom-left-2">
                <img src="Images/weight_monitor(BLUE).svg" alt="" />
                <p>
                  Weight <br /> Dispute
                </p>
              </div>

              <div className="action-card bottom-right">
                <img src="Images/bookmark(BLUE)-icon.svg" alt="" />
                <p>
                  Pickup <br /> Point
                </p>
              </div>
            </div>

            <div className="pickup-container">
              <h2>Today Pickup's</h2>
              <div className="pickup-cards">
                <div className="pickup-card card1">
                  <p>2100124</p>
                  <p>
                    <strong>#BOX</strong> : 1
                  </p>
                  <p>
                    Sarjan Tower,
                    <br /> Vandematram
                    <br /> Gota, Ahmedabad
                  </p>
                </div>
                <div className="pickup-card card2">
                  <p>2100125</p>
                  <p>
                    <strong>#BOX :</strong> 1
                  </p>
                  <p>
                    Ganesh Skyline,
                    <br /> Vandemataram
                    <br /> Gota, Ahmedabad
                  </p>
                </div>
              </div>
              <button className="add-pickup-req-btn">Add Pickup Request</button>
            </div>
          </div>

          <div className="row-2">
            <div className="latest-orders">
              <h4>Latest Orders</h4>
              <table className="latest-orders-table">
                <thead>
                  <tr>
                    <th>LR/ AWB NO</th>
                    <th className="consignee">CONSIGNEE</th>
                    <th className="manifested-on">MANIFESTED ON</th>
                    <th className="status">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>221222</td>
                    <td className="name-address" style={{ textAlign: "left" }}>
                      MR. Harshil Patel<br />Ahmedabad,
                      Gujarat</td>
                    <td className="date">21 Feb, 2025</td>
                    <td className="status"><span className="status-badge">Manifested</span></td>
                  </tr>
                  <tr>
                    <td>221221</td>
                    <td className="name-address">MR. Suman Patel<br />Surat, Gujarat</td>
                    <td className="date">16 Feb, 2025</td>
                    <td className="status"><span className="status-badge">Delivered</span></td>
                  </tr>
                  <tr>
                    <td>221220</td>
                    <td className="name-address">MR. Aman Patel<br />Rajkot, Gujarat</td>
                    <td className="date">11 Feb, 2025</td>
                    <td className="status"><span className="status-badge">Delivered</span></td>
                  </tr>
                  <tr>
                    <td>221219</td>
                    <td className="name-address">MR. Raj Patel<br />Katch, Gujarat</td>
                    <td className="date">8 Feb, 2025</td>
                    <td className="status"><span className="status-badge">Delivered</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bookings-remmitence">
              <div className="your-bookings">
                <div className="header-part">
                  <h4 className="heading">Your Bookings</h4>
                  <button>This Month <i
                    className="material-symbols-outlined drop-down-arrow-icon">arrow_drop_down</i></button>
                </div>
                <div className="orders-grids">
                  <div className="order-grid-1">
                    Todays Order <br /> <span>2</span>
                  </div>
                  <div className="order-grid-2">
                    Overall Orders <br /> <span>101</span>
                  </div>
                </div>
              </div>

              <div className="remittance">
                <div className="remittance-label">Remmitence</div>
                <div className="remittance-cards">
                  <div className="remit-card">
                    <p>Last<br />Remittance</p>
                    <span className="price">$80</span>
                  </div>
                  <div className="remit-card middle-remit-card">
                    <p>New <br />Remittance</p>
                    <span className="date">28 Feb, 2025</span>
                  </div>
                  <div className="remit-card">
                    <p>Upcoming <br /> Remittance</p>
                    <span className="price">$30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-3">
            <div className="order-analytics">
              <table className="order-data">
                <thead>
                  <tr>
                    <th>Order <br /> Performance</th>
                    <th>Order <br /> Revenue</th>
                    <th>Order <br /> Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manifested <br /> <span>7</span></td>
                    <td>This Week <br /> <span>$ 7.4k</span></td>
                    <td>This Week <br /> <span>247.23Kg</span></td>
                  </tr>

                  <tr>
                    <td>In-Transit <br /> <span>10</span></td>
                    <td>This Month <br /> <span>$ 26.14k</span></td>
                    <td>This Month <br /> <span>523.35Kg</span></td>
                  </tr>

                  <tr>
                    <td>Pending <br /> <span>1</span></td>
                    <td>Last 3 Month <br /> <span>$ 172k</span></td>
                    <td>Last 3 Month <br /> <span>3.2 Ton</span></td>
                  </tr>
                  <tr>
                    <td>OFD <br /> <span>1</span></td>
                    <td>Last 6 Month <br /> <span>$ 272k</span></td>
                    <td>Last 6 Month <br /> <span>3.6k Ton</span></td>
                  </tr>

                  <tr>
                    <td>Delivered <br /> <span>730</span></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>RTO <br /> <span>200</span> </td>
                    <td></td>
                    <td></td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="ndr-cod">
              <table className="ndr-cod-table">
                <thead>
                  <tr>
                    <th>NDR & <br />Exception</th>
                    <th>COD & <br />Franchise<br />Remittance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ndr-cod-title">
                    <td>Total NDR</td>
                    <td>Total COD</td>
                  </tr>

                  <tr>
                    <td>Total NDR<br />Request <br /> <span>1</span></td>
                    <td>Total<br />Remittance <br /> <span>$ 1077.32k</span></td>
                  </tr>

                  <tr>
                    <td>Reattempt<br />Request <br /> <span>0</span></td>
                    <td>COD<br />Remittance <br /> <span>$ 1022.12k</span></td>
                  </tr>

                  <tr className="ndr-cod-last">
                    <td>Open<br />NDR <br /> <span>1</span></td>
                    <td>Franchise<br />Profit <br /> <span>$ 55.22k</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row-4">
            <div className="shipping-container">
              <div className="shipping-content">
                <h3>Shipping Plans</h3>
                <p>Reducing shipment costs, offering shipping plans, extensive Service coverage, and faster
                  delivery times are our primary strengths in E-commerce logistics.</p>
                <button>Shipping Plans</button>
              </div>
              <div className="shipping-display">
                <img src="Images/girl-image2.png" alt="" />
              </div>
            </div>

            <div className="weight-container">
              <div className="header-part">
                <div className="label">
                  The total weight of shipments in feb month
                </div>
                <button className="report-button"><i
                  className="material-symbols-outlined downloads-icon">download</i>Report</button>
              </div>

              <div className="weight-content">

                <div className="weight-box">
                  <i className="material-symbols-outlined direction-icon">north</i>
                  <span className="dir">North</span>
                  <span className="weight">0 kg</span>
                </div>
                <div className="weight-box">
                  <i className="material-symbols-outlined direction-icon">west</i>
                  <span className="dir">West</span>
                  <span className="weight">135 kg</span>
                </div>
                <div className="weight-box">
                  <i className="material-symbols-outlined direction-icon">south</i>
                  <span className="dir">South</span>
                  <span className="weight">15 Kg</span>
                </div>
                <div className="weight-box">
                  <i className="material-symbols-outlined direction-icon">east</i>
                  <span className="dir">East</span>
                  <span className="weight">45 Kg</span>
                </div>
                <div className="weight-box">
                  <i className="material-symbols-outlined direction-icon">north_east</i>
                  <span className="dir">East</span>
                  <span className="weight">45 Kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row-5">
            <div className="shipment-overview">
              <h3>Shipment Overview By Courier</h3>
              <h2>This is the total weight of shipment in feb month.</h2>

              <table className="shipment-overview-table">
                <thead>
                  <tr>
                    <th>Courier Name</th>
                    <th>Manifested</th>
                    <th>In-Transit</th>
                    <th>Pending</th>
                    <th>OFD</th>
                    <th>Delivered</th>
                    <th>RTO</th>
                    <th>Lost</th>
                    <th>Total<br />Shipment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="delivery-company">DELIVERY</td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>13</td>
                    <td>0</td>
                    <td>0</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">DELIVERY</td>
                    <td>0</td>
                    <td>6</td>
                    <td>1</td>
                    <td>4</td>
                    <td>322</td>
                    <td>1</td>
                    <td>0</td>
                    <td>334</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">AMAZON</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>16</td>
                    <td>0</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">DTDC</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>55</td>
                    <td>286</td>
                    <td>0</td>
                    <td>343</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">Ecom Express</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>286</td>
                    <td>55</td>
                    <td>0</td>
                    <td>345</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">eKart</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>16</td>
                    <td>23</td>
                    <td>0</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">Shree Maruti</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>13</td>
                    <td>0</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td className="delivery-company">BLUE DART</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>23</td>
                    <td>1</td>
                    <td>0</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row-6">
            <div className="data-report">
              <div className="performance-report">
                <div className="header-part">
                  <h3>Performance Report</h3>
                  <p>The total shipments during a user's active period on our website.</p>
                </div>
                <div className="graph-part">
                  <div className="graph-header">
                    <span>
                      <div className="bar b2b"></div>B2B Shipment
                    </span>
                    <span>
                      <div className="bar b2c"></div>B2C Shipment
                    </span>
                  </div>
                  <canvas id="barChart"></canvas>
                </div>

              </div>

              <div className="order-status-report">
                <div className="header-part">
                  <h2>Order Status Report</h2>
                </div>
                <div className="chart-part">
                  <canvas id="pieChart"></canvas>
                </div>
              </div>
            </div>

            <div className="shipping-weight">
              <div className="header-part">
                <h3>Load Against Shipping Partners</h3>
                <p>This is the total weight of shipments in Feb Month.</p>
              </div>
              <div className="content-part">
                <div className="shipment-row">
                  <span className="company">DELHIVERY</span>
                  <span className="weight">164 Kg</span>
                </div>
                <div className="shipment-row">
                  <span className="company">DELHIVERY</span>
                  <span className="weight">164 Kg</span>
                </div>
                <div className="shipment-row">
                  <span className="company">Ecom Express</span>
                  <span className="weight">11.5 Kg</span>
                </div>
                <div className="shipment-row">
                  <span className="company">eKart</span>
                  <span className="weight">12.5 Kg</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
      </main>
    </>
  );
};

export default Dashboardpage;    
