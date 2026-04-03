
import React, { useEffect, useState } from "react";
import "./style.css";
import logo from '../pickPoint/Images/my_logistix-logo.svg'
import axios from "axios";
import Dashboardpage from "../Dashboard/dashboardpage"



export default function WeightReconciliation() {

  const [extraWeights, setExtraWeights] = useState([]);




  useEffect(() => {
    // ✅ Fetch Data from API
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:8000/reconciliation/my-list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExtraWeights(res.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {/* Fonts : Poppins, Inter, Irish Grover */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
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


      <Dashboardpage>
        {/* Main Section */}
        <main className="weight-reconciliation-main">
          <section className="weight-reconciliation-section">
            <div className="header-row">
              <h2 className="title">Weight Reconciliation</h2>
              <button className="wr-export-report-btn" id="ExportReportBtn">
                Export Report
              </button>
            </div>


            <div className="wr-filter-section">
              <div className="wr-search-part">
                <div className="wr-input-selectors">
                  <input
                    className="wr-search-bar"
                    type="text"
                    placeholder="Search BY LR/AWB"
                  />
                  <select className="wr-status-selector" required>
                    <option value="" disabled selected>
                      Select Status
                    </option>
                    <option value="">All Status</option>
                    <option value="">Open</option>
                    <option value="">Pending</option>
                    <option value="">Close</option>
                  </select>
                  <select className="wr-date-selector" required>
                    <option value="" disabled selected>
                      Select Date
                    </option>
                    <option value="">All Dates</option>
                    <option value="">Today</option>
                    <option value="">Yesterday</option>
                    <option value="">Last 7 Days</option>
                    <option value="">This Month</option>
                    <option value="">Last Month</option>
                    <option value="">Custom Range</option>
                  </select>
                </div>
                <div className="wr-buttons">
                  <button className="wr-search-btn">Search</button>
                  <button className="wr-clear-btn">Clear</button>
                </div>
              </div>
              <div className="wr-vertical-divider"></div>
              <div className="overview-part">
                <div className="overview-title">Overview</div>
                <div className="overview-items">
                  <div className="overview-item">
                    <div className="overview-label">
                      Total Weight<br />Discrepancies :
                    </div>
                    <div className="overview-value">11.52 Kgs</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      Discrepancies<br />Accepted :
                    </div>
                    <div className="overview-value">0 Kgs</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      Discrepancies<br />Rejected:
                    </div>
                    <div className="overview-value">11.52 Kgs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="wr-tab-bar">
              <button className="tab-btn active" data-tab="mismatched">
                Extra Weights{" "}
                <span className="tab-badge" id="mismatched-badge">
                  {extraWeights.length}
                </span>
              </button>
              <button className="tab-btn" data-tab="raised">
                Disputes Raised{" "}
                <span className="tab-badge" id="raised-badge">0</span>
              </button>
              <button className="tab-btn" data-tab="settled">
                Disputes Settled{" "}
                <span className="tab-badge" id="settled-badge">0</span>
              </button>
            </div>

            {/* ✅ Table with API data */}
            <div className="wr-tab-panel" id="mismatched-table">
              <div className="wr-data-section">
                <table className="wr-data-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Extra Weight (Kg)</th>
                      <th>Rate Per Kg</th>
                      <th>Weight Charge</th>
                      <th>Fuel Charge</th>
                      <th>GST</th>
                      <th>Total Extra Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extraWeights.length > 0 ? (
                      extraWeights.map((item) => (
                        <tr key={item._id}>
                          <td>{item.orderId}</td>
                          <td>{item.extraWeightKg}</td>
                          <td>{item.additionalRatePerKg}</td>
                          <td>{item.weightCharge}</td>
                          <td>{item.fuelCharge}</td>
                          <td>{item.gst}</td>
                          <td>{item.totalExtraCharge}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" style={{ textAlign: "center" }}>
                          No Records Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Raised Table */}
            <div
              className="wr-tab-panel"
              id="raised-table"
              style={{ display: "none" }}
            >
              <div className="wr-data-section">
                <table className="wr-data-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Extra Weight</th>
                      <th>Charges</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>

            {/* Settled Table */}
            <div
              className="wr-tab-panel"
              id="settled-table"
              style={{ display: "none" }}
            >
              <div className="wr-data-section">
                <table className="wr-data-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Extra Weight</th>
                      <th>Charges</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </Dashboardpage>
    </>
  );
}
