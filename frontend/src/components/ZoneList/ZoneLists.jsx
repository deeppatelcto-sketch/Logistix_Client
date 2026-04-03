import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./zone_lists.css";
import logo from './Images/my_logistix-logo.svg'
import Dashboardpage from "../Dashboard/dashboardpage"       

export default function ZoneLists() {

useEffect(() => {


  // ====================== DROPDOWN LOGIC ========================= //
  const rows = document.querySelectorAll(".list-row");
  const dropdownHandlers = [];

  rows.forEach((row) => {
    const trigger = row.querySelector(".border-box") || row.querySelector(".list-box");
    const dropdown = row.querySelector(".dropdown-content");
    const listBox = row.querySelector(".list-box");

    if (!trigger || !dropdown) return;

    trigger.style.cursor = "pointer";

    const handler = () => {
      // close all others
      rows.forEach((otherRow) => {
        const otherDropdown = otherRow.querySelector(".dropdown-content");
        const otherTrigger = otherRow.querySelector(".border-box") || otherRow.querySelector(".list-box");
        const otherListBox = otherRow.querySelector(".list-box");

        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("open");
          otherTrigger?.classList.remove("active");
          otherListBox?.classList.remove("active");
        }
      });

      // toggle current
      dropdown.classList.toggle("open");
      trigger.classList.toggle("active");
      listBox?.classList.toggle("active");
    };

    trigger.addEventListener("click", handler);
    dropdownHandlers.push({ trigger, handler });
  });

  // ✅ Cleanup
  return () => {
 

    dropdownHandlers.forEach(({ trigger, handler }) => {
      trigger.removeEventListener("click", handler);
    });
  };
}, []);


    return (
        <>
            <Helmet>
                <title>Zone Lists</title>

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
            </Helmet>

            <div>
          <Dashboardpage>
                <main className="zone-lists-main">
                    <section className="zone-lists-section">
                        <div className="header-row">
                            <h2 className="title">Zone Lists</h2>
                        </div>

                        <div className="list-container">
                            <div className="list-row">
                                <label>5 Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>11 Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>

                                                <tbody>


                                                    <tr>
                                                        <th>North</th>
                                                        <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                            Himachal Pradesh, Jammu and Kashmir</td>
                                                    </tr>
                                                    <tr>
                                                        <th>West</th>
                                                        <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                            Nagar Haveli and Daman, Daman and Diu</td>
                                                    </tr>
                                                    <tr>
                                                        <th>South</th>
                                                        <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                    </tr>
                                                    <tr>
                                                        <th>East</th>
                                                        <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                    </tr>

                                                </tbody>


                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>16 Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>24 Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>Goti Zone</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>Ekart B2B Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>Vxpress Zone</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>North</th>
                                                        <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                            Himachal Pradesh, Jammu and Kashmir</td>
                                                    </tr>
                                                    <tr>
                                                        <th>West</th>
                                                        <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                            Nagar Haveli and Daman, Daman and Diu</td>
                                                    </tr>
                                                    <tr>
                                                        <th>South</th>
                                                        <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                    </tr>
                                                    <tr>
                                                        <th>East</th>
                                                        <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>Dp World Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-row">
                                <label>Rivigo Matrix</label>
                                <div className="content-box">
                                    <div className="list-box">
                                        <div className="border-box">
                                            <span>Zone</span>
                                            <span>Cities</span>
                                            <i className="material-symbols-outlined">arrow_drop_down</i>
                                        </div>
                                    </div>

                                    <div className="dropdown-content">
                                        <div className="table-wrapper">
                                            <table>
                                                <tr>
                                                    <th>North</th>
                                                    <td>Delhi, Haryana, Rajasthan, Uttar Pradesh, Uttarakhand, Punjab, Chandigarh,
                                                        Himachal Pradesh, Jammu and Kashmir</td>
                                                </tr>
                                                <tr>
                                                    <th>West</th>
                                                    <td>Gujarat, Maharashtra, Goa, Madhya Pradesh, Silvassa, Chhattisgarh, Dadra and
                                                        Nagar Haveli and Daman, Daman and Diu</td>
                                                </tr>
                                                <tr>
                                                    <th>South</th>
                                                    <td>Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Pondicherry</td>
                                                </tr>
                                                <tr>
                                                    <th>East</th>
                                                    <td>West Bengal, Odisha, Bihar, Jharkhand, Andaman and Nicobar Islands</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>

                    <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
                </main>
            </Dashboardpage>
            </div>
        </>
    );
}         
