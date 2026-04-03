// import React, { useEffect, useRef } from 'react';

// const MyLogistixFrontend = () => {
//   const toggleBtnRef = useRef(null);
//   const sidebarRef = useRef(null);
//   const toggleIconRef = useRef(null);

//   useEffect(() => {
//     const toggleSidebar = () => {
//       const sidebar = sidebarRef.current;
//       const toggleIcon = toggleIconRef.current;
//       sidebar.classList.toggle('collapsed');
//       toggleIcon.style.transform = sidebar.classList.contains('collapsed')
//         ? 'rotate(180deg)'
//         : 'rotate(0deg)';
//     };

//     const toggleBtn = toggleBtnRef.current;
//     toggleBtn.addEventListener('click', toggleSidebar);

//     return () => {
//       toggleBtn.removeEventListener('click', toggleSidebar);
//     };
//   }, []);

//   return (
//     <div>
//       <style>{/* your full CSS here unchanged */}</style>

//       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Irish+Grover&family=Poppins&display=swap" />
//       <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

//       {/* Header */}
//       <header className="header">
//         <div className="header-left">
//           <img className="logo" src="/Images/my_logistix-logo.svg" alt="logo" />
//           <button className="toggle-btn" ref={toggleBtnRef}>
//             <i className="material-icons left-double-arrow-icon" ref={toggleIconRef}>keyboard_double_arrow_left</i>
//           </button>
//           <div className="search-container">
//             <i className="material-icons-outlined search-icon">search</i>
//             <input type="text" placeholder="Search BY LRN/AWB no" />
//           </div>
//         </div>
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
//         </div>
//       </header>

//       <div className="back-header"></div>

//       {/* Sidebar */}
//       <nav className="sidebar" ref={sidebarRef}>
//         {/* Same map code */}
//         {[ /* all sidebar links */ ].map(([icon, label, hasArrow], idx) => (
//           <div className="sidebar-link" key={idx}>
//             <div className="sidebar-items">
//               {icon && <i className="material-symbols-outlined sidebar-icons">{icon}</i>}
//               <span className={icon ? '' : 'last'}>{label}</span>
//               {hasArrow && <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>}
//             </div>
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default MyLogistixFrontend;



import React, { useEffect, useRef } from 'react';
import './style.css';
import logo from '../assets/MLlogo.png';

const MyLogistixFrontend = () => {
    const toggleBtnRef = useRef(null);
    const sidebarRef = useRef(null);
    const toggleIconRef = useRef(null);

    useEffect(() => {
        const toggleSidebar = () => {
            const sidebar = sidebarRef.current;
            const toggleIcon = toggleIconRef.current;
            sidebar.classList.toggle('collapsed');
            toggleIcon.style.transform = sidebar.classList.contains('collapsed')
                ? 'rotate(180deg)'
                : 'rotate(0deg)';
        };

        const toggleBtn = toggleBtnRef.current;
        toggleBtn.addEventListener('click', toggleSidebar);

        return () => {
            toggleBtn.removeEventListener('click', toggleSidebar);
        };
    }, []);

    const sidebarItems = [
        ['dashboard', 'Dashboard'],
        ['orders', 'My Order', true],
        ['package', 'Pickup Point'],
        ['hail', 'Pickup Request'],
        ['weight', 'Weight Reconcillation'],
        ['package_2', 'Delivery Appointment'],
        ['exclamation', 'NDR & Exceptions'],
        ['calculate', 'Rate Calculator'],
        ['payments', 'Finance & COD', true],
        ['docs', 'Billing', true],
        ['contract', 'Price list'],
        ['handyman', 'Integration', true],
        ['settings', 'Resource Center', true],
        ['support_agent', 'Customer Support'],
        ['shopping_cart', 'Shop'],
        [null, 'Terms of Use'],
        [null, 'Privacy Policy']
    ];

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter&family=Irish+Grover&family=Poppins&display=swap"
                rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <img className="logo" src={logo} alt="logo" />
                    <button className="toggle-btn" ref={toggleBtnRef}>
                        <i className="material-icons left-double-arrow-icon" ref={toggleIconRef}>keyboard_double_arrow_left</i>
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

            {/* Sidebar */}
            <nav className="sidebar" ref={sidebarRef}>
                {sidebarItems.map(([icon, label, hasArrow], idx) => (
                    <div className="sidebar-link" key={idx}>
                        <div className="sidebar-items">
                            {icon && <i className="material-symbols-outlined sidebar-icons">{icon}</i>}
                            <span className={icon ? '' : 'last'}>{label}</span>
                            {hasArrow && <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>}
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default MyLogistixFrontend;






// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import { FiMenu, FiX } from 'react-icons/fi';
// import logo from '../assets/MLlogo.png';

// const MyLogistixFrontend = () => {
//     const toggleBtnRef = useRef(null);
//     const sidebarRef = useRef(null);
//     const toggleIconRef = useRef(null);

//     const [form, setForm] = useState({
//         shippingName: '',
//         warehouse: '',
//         packageCount: '',
//         pickupDate: '',
//         pickupTime: ''
//     });

//     const [pickupData, setPickupData] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [search, setSearch] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await fetch('http://localhost:8000/createpickupreq', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     shippingPartner: form.shippingName,
//                     warehouse: form.warehouse,
//                     expectedPackageCount: Number(form.packageCount),
//                     pickupDate: form.pickupDate,
//                     pickupTime: form.pickupTime
//                 }),
//             });

//             fetchPickupData();
//             setForm({ shippingName: '', warehouse: '', packageCount: '', pickupDate: '', pickupTime: '' });
//             setShowForm(false);
//         } catch (err) {
//             console.error('Error adding pickup request:', err);
//         }
//     };

//     const fetchPickupData = async () => {
//         try {
//             const res = await fetch('http://localhost:8000/pickupreq');
//             const data = await res.json();
//             setPickupData(data);
//         } catch (err) {
//             console.error('Error fetching data:', err);
//         }
//     };

//     useEffect(() => {
//         const toggleSidebar = () => {
//             const sidebar = sidebarRef.current;
//             const toggleIcon = toggleIconRef.current;
//             sidebar.classList.toggle('collapsed');
//             toggleIcon.classList.toggle('fi-x');
//             toggleIcon.classList.toggle('fi-menu');
//         };

//         const toggleBtn = toggleBtnRef.current;
//         toggleBtn.addEventListener('click', toggleSidebar);
//         fetchPickupData();

//         return () => {
//             toggleBtn.removeEventListener('click', toggleSidebar);
//         };
//     }, []);

//     return (
//         <Wrapper>
//             <Sidebar ref={sidebarRef} className="sidebar">
//                 <LogoWrapper>
//                     <img className="logo" src={logo} alt="logo" />
//                 </LogoWrapper>
//                 <NavLinks>
//                     <a href="#">Dashboard</a>
//                     <a href="#">Pickups</a>
//                     <a href="#">Settings</a>
//                 </NavLinks>
//             </Sidebar>

//             <MainSection>
//                 <Header>
//                     <ToggleBtn ref={toggleBtnRef}>
//                         <FiMenu className="fi-menu" ref={toggleIconRef} />
//                     </ToggleBtn>
//                     <h1>My Logistix Dashboard</h1>
//                 </Header>

//                 <Content>
//                     <SearchAddBar>
//                         <input
//                             type="text"
//                             placeholder="Search Pickup..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                         <button onClick={() => setShowForm(!showForm)}>+ New Pickup</button>
//                     </SearchAddBar>

//                     {showForm && (
//                         <PickupForm onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 placeholder="Shipping Name"
//                                 value={form.shippingName}
//                                 onChange={(e) => setForm({ ...form, shippingName: e.target.value })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Warehouse"
//                                 value={form.warehouse}
//                                 onChange={(e) => setForm({ ...form, warehouse: e.target.value })}
//                             />
//                             <input
//                                 type="number"
//                                 placeholder="Package Count"
//                                 value={form.packageCount}
//                                 onChange={(e) => setForm({ ...form, packageCount: e.target.value })}
//                             />
//                             <input
//                                 type="date"
//                                 value={form.pickupDate}
//                                 onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Pickup Time"
//                                 value={form.pickupTime}
//                                 onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
//                             />
//                             <button type="submit">Submit</button>
//                         </PickupForm>
//                     )}

//                     <DataTable>
//                         <thead>
//                             <tr>
//                                 <th>Shipping Partner</th>
//                                 <th>Warehouse</th>
//                                 <th>Package Count</th>
//                                 <th>Pickup Date</th>
//                                 <th>Pickup Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {pickupData
//                                 .filter((item) =>
//                                     (item.shippingPartner?.toLowerCase() || '').includes(search.toLowerCase()))
//                                 .map((item, idx) => (
//                                     <tr key={idx}>
//                                         <td>{item.shippingPartner}</td>
//                                         <td>{item.warehouse}</td>
//                                         <td>{item.expectedPackageCount}</td>
//                                         <td>{item.pickupDate}</td>
//                                         <td>{item.pickupTime}</td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </DataTable>
//                 </Content>
//             </MainSection>
//         </Wrapper>
//     );
// };

// export default MyLogistixFrontend;

// // ================= Styled Components ===================

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   overflow: hidden;
// `;

// const Sidebar = styled.div`
//   width: 250px;
//   background: #1e1e2f;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1rem;
//   transition: width 0.3s ease;

//   &.collapsed {
//     width: 70px;

//     a {
//       display: none;
//     }
//   }
// `;

// const LogoWrapper = styled.div`
//   margin-bottom: 2rem;
//   img.logo {
//     width: 150px;
//   }
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   a {
//     color: white;
//     text-decoration: none;
//     font-size: 1.1rem;
//   }
// `;

// const ToggleBtn = styled.div`
//   cursor: pointer;
//   font-size: 1.5rem;
// `;

// const MainSection = styled.div`
//   flex: 1;
//   background: #f8f8f8;
//   display: flex;
//   flex-direction: column;
// `;

// const Header = styled.header`
//   background: white;
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   border-bottom: 1px solid #ddd;
// `;

// const Content = styled.div`
//   padding: 1rem;
//   overflow-y: auto;
// `;

// const SearchAddBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1rem;

//   input {
//     padding: 0.5rem;
//     width: 60%;
//     font-size: 1rem;
//   }

//   button {
//     background: #007bff;
//     color: white;
//     border: none;
//     padding: 0.5rem 1rem;
//     font-size: 1rem;
//     cursor: pointer;
//     border-radius: 4px;
//   }
// `;

// const PickupForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1rem;

//   input {
//     padding: 0.5rem;
//     font-size: 1rem;
//   }

//   button {
//     background: #28a745;
//     color: white;
//     border: none;
//     padding: 0.5rem 1rem;
//     font-size: 1rem;
//     cursor: pointer;
//     border-radius: 4px;
//   }
// `;

// const DataTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: white;

//   th, td {
//     border: 1px solid #ddd;
//     padding: 0.75rem;
//     text-align: left;
//   }

//   th {
//     background: #f0f0f0;
//   }
// `;
