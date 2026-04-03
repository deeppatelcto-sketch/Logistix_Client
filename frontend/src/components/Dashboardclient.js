// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api'; // Update this path to where your axios instance is

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [dashboardData, setDashboardData] = useState(null);
//   const [error, setError] = useState(null);

//   const logout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const res = await API.get('/dashboard'); // token will be sent from axios interceptor or manually
//         setDashboardData(res.data);
//       } catch (err) {
//         console.error('Error loading dashboard:', err);
//         setError(err.response?.data?.message || 'Something went wrong');
//       }
//     };

//     fetchDashboard();
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to Dashboard 🎉</h2>
//       {dashboardData && (
//         <div>
//           <p>{dashboardData.message}</p>
//           {dashboardData.user && (
//             <pre>{JSON.stringify(dashboardData.user, null, 2)}</pre>
//           )}
//         </div>
//       )}
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 import this
import './style.css';
import logo from '../assets/MLlogo.png';

const MyLogistixFrontend = () => {
    const toggleBtnRef = useRef(null);
    const sidebarRef = useRef(null);
    const toggleIconRef = useRef(null);
    const navigate = useNavigate(); // 👈 hook for navigation

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
        ['hail', 'Pickup Request', '/PickupPage'], // 👈 Add route here
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

    const handleNavigation = (route) => {
        if (route) navigate(route);
    };

   return (
    <div>
        {/* Toggle Button */}
        <div id="toggleBtn" ref={toggleBtnRef} className="toggle-button">
            <span ref={toggleIconRef} className="material-symbols-outlined" id="toggleIcon">
                menu
            </span>
        </div>

        {/* Sidebar */}
        <nav className="sidebar" ref={sidebarRef}>
            {sidebarItems.map(([icon, label, route], idx) => (
                <div
                    className="sidebar-link"
                    key={idx}
                    onClick={() => handleNavigation(route)}
                    style={{ cursor: route ? 'pointer' : 'default' }}
                >
                    <div className="sidebar-items">
                        {icon && <i className="material-symbols-outlined sidebar-icons">{icon}</i>}
                        <span className={icon ? '' : 'last'}>{label}</span>
                        {route && route !== true && (
                            <i className="material-symbols-outlined right-arrow-icon">keyboard_arrow_right</i>
                        )}
                    </div>
                </div>
            ))}
        </nav>
    </div>
);

};

export default MyLogistixFrontend;
