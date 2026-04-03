import React, { useEffect } from "react";
import "./resource_center.css";
import logo from './Images/my_logistix-logo.svg'
import pincodeimg from './Images/pincode-location.svg'
import Dashboardpage from "../Dashboard/dashboardpage"

export default function ResourceCenter() {


  return (
    <>
      {/* Fonts and Icons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Irish+Grover&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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

      <main className="resource-center-main">
        <section className="resource-center-section" id="channel-integration">
          <div className="header-row">
            <h2 className="title">Resource Center</h2>
            <button className="export-pincode-btn" id="exportPincodeBtn">
              Export Pincode List
            </button>
          </div>

          <div className="search-section">
            <div className="search-title">
              <span>Search Pincode</span>
            </div>
            <div className="search-bar-part">
              <div className="search-bar">
                <input type="text" placeholder="Check Pincode Serviceability" />
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={pincodeimg} alt="" />
          </div>
        </section>

        <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
      </main>

      </Dashboardpage>
    </>
  );
}
