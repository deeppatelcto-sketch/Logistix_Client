// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./rest_apis.css"; // <-- update this path as per your project

// import  Dashboardpage from "../Dashboard/dashboardpage"

// export default function IntegrationPage() {
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

//     // ========================= DOM CONTENT LOADED INIT ============================== //

//     const sidebar = document.getElementById("sidebar");
//     const toggleBtn = document.getElementById("toggleBtn");
//     const toggleIcon = document.getElementById("toggleIcon");
//     const body = document.body;

//     setInitialSidebarState();

//     window.addEventListener("resize", setInitialSidebarState);

//     toggleBtn?.addEventListener("click", () => {
//       sidebar.classList.toggle("collapsed");
//       toggleIcon.classList.toggle("rotated");

//       if (sidebar.classList.contains("collapsed")) {
//         body.classList.add("sidebar-collapsed");
//       } else {
//         body.classList.remove("sidebar-collapsed");
//       }

//       updateToggleButtonPosition();
//     });

//     document.addEventListener("click", (e) => {
//       if (window.innerWidth < 768) {
//         const isClickInsideSidebar = sidebar.contains(e.target);
//         const isToggleButton = toggleBtn.contains(e.target);

//         if (
//           !sidebar.classList.contains("collapsed") &&
//           !isClickInsideSidebar &&
//           !isToggleButton
//         ) {
//           sidebar.classList.add("collapsed");
//           body.classList.add("sidebar-collapsed");
//           updateToggleButtonPosition();
//         }
//       }
//     });

//     return () => {
//       window.removeEventListener("resize", setInitialSidebarState);
//     };
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Integration</title>

//         {/* Fonts : Poppins, Inter, Irish Grover */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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

//     < Dashboardpage>

//       <main className="integration-main">
//         <section className="integration-section">
//           <div className="header-row">
//             <h2 className="title">Rest API Integration</h2>
//           </div>

//           <div className="cards-container">
//             <div className="card">
//               <h4>B2C API</h4>
//               <p>
//                 As the name implies, B2C orders are delivered directly to the end
//                 customers. If you have smaller batches of products or sell items
//                 with a limited shelf-life whose weight is less than and equal to
//                 10kg then B2C might be the best option for eCommerce integration.
//               </p>
//               <button>Get Started</button>
//             </div>

//             <div className="card">
//               <h4>B2B API</h4>
//               <p>
//                 In B2B, the products are delivered straight to a business or a
//                 retail store in this case. The typical order volume is
//                 substantially higher than in B2C/ whose weight is greater than and
//                 equal to 20kg, ensuring that the business receiving the orders has
//                 adequate inventory to sell.
//               </p>
//               <button>Get Started</button>
//             </div>
//           </div>
//         </section>

//         <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//       </main>

//       </Dashboardpage>
//     </>
//   );
// }








import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./rest_apis.css"; // <-- update this path as per your project

import  Dashboardpage from "../Dashboard/dashboardpage"

export default function IntegrationPage() {
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

    // ========================= DOM CONTENT LOADED INIT ============================== //

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const toggleIcon = document.getElementById("toggleIcon");
    const body = document.body;

    setInitialSidebarState();

    window.addEventListener("resize", setInitialSidebarState);

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

    document.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isToggleButton = toggleBtn.contains(e.target);

        if (
          !sidebar.classList.contains("collapsed") &&
          !isClickInsideSidebar &&
          !isToggleButton
        ) {
          sidebar.classList.add("collapsed");
          body.classList.add("sidebar-collapsed");
          updateToggleButtonPosition();
        }
      }
    });

    return () => {
      window.removeEventListener("resize", setInitialSidebarState);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Integration</title>

        {/* Fonts : Poppins, Inter, Irish Grover */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Irish+Grover&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
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
      </Helmet>

    < Dashboardpage>

      <main className="integration-main">
        <section className="integration-section">
          <div className="integration-header-row">
            <h2 className="integration-title">Rest API Integration</h2>
          </div>

          <div className="integration-cards-container">
            <div className="integration-card">
              <h4>B2C API</h4>
              <p>
                As the name implies, B2C orders are delivered directly to the end
                customers. If you have smaller batches of products or sell items
                with a limited shelf-life whose weight is less than and equal to
                10kg then B2C might be the best option for eCommerce integration.
              </p>
              <button>Get Started</button>
            </div>

            <div className="integration-card">
              <h4>B2B API</h4>
              <p>
                In B2B, the products are delivered straight to a business or a
                retail store in this case. The typical order volume is
                substantially higher than in B2C/ whose weight is greater than and
                equal to 20kg, ensuring that the business receiving the orders has
                adequate inventory to sell.
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </section>

        <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
      </main>

      </Dashboardpage>
    </>
  );
}