// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import "./style.css";
// import logo from "./Images/my_logistix-logo.svg";
// import delhiveryLogo from "./Images/delhivery-logo.svg";
// import amazonLogo from "./Images/amazon-logo.svg";
// import dtdcLogo from "./Images/dtdc-logo.svg";
// import Dashboardpage from "../Dashboard/dashboardpage"    

// export default function PriceList() {
//   useEffect(() => {

//     // === TAB & CONTENT SWITCHING LOGIC === //
//     const b2cBtn = document.querySelector(".b2c-btn");                  
//     const b2bBtn = document.querySelector(".b2b-btn");
//     const b2cContent = document.querySelector(".b2c-content");
//     const b2bContent = document.querySelector(".b2b-content");

//     function showB2C() {
//       b2cBtn.classList.add("active");
//       b2bBtn.classList.remove("active");
//       b2cContent.style.display = "block";
//       if (b2bContent) b2bContent.style.display = "none";
//     }

//     function showB2B() {
//       b2bBtn.classList.add("active");
//       b2cBtn.classList.remove("active");
//       if (b2bContent) b2bContent.style.display = "block";
//       b2cContent.style.display = "none";
//     }

//     b2cBtn?.addEventListener("click", showB2C);
//     b2bBtn?.addEventListener("click", showB2B);

//     showB2C(); // default

//     return () => {
//       b2cBtn?.removeEventListener("click", showB2C);
//       b2bBtn?.removeEventListener("click", showB2B);
//     };
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Price List</title>
//         {/* Fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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

//     <Dashboardpage>
//       <main className="price-list-main">
//         <section className="price-list-section">
//           <div className="header-row">
//             <h2 className="title">Price List</h2>
//           </div>

//           <div className="toggle-buttons">
//             <button className="b2c-btn">B2C</button>
//             <button className="b2b-btn">B2B</button>
//           </div>

//           {/* B2C Content */}
//           <div className="b2c-content">
//             <div className="b2c-table-container">
//               <table className="b2c-data-table">
//                 <thead>
//                   <tr>
//                     <th>Couriers</th>
//                     <th>Mode</th>
//                     <th>Min. Weight</th>
//                     <th>Zone A<br/>Within City Upto | Add.</th>
//                     <th>Zone B<br/>Within state Upto | Add.</th>
//                     <th>Zone C1<br/>Metro-Metro Upto | Add.</th>
//                     <th>Zone C2<br/>Metro - Metro Upto | Add.</th>
//                     <th>Zone D<br/>Rest of India Upto | Add.</th>
//                     <th>Zone E<br/>Rest of India Upto | Add.</th>
//                     <th>Zone F<br/>Jammu, NE, North East Excluding <br/> Manipur Upto | Add.</th>
//                     <th>Zone G<br/>Kashmir, Sikkim, Ladakh, <br/> Andaman & Nicobar Upto | Add.</th>
//                     <th>COD<br/> Charge / %</th>
//                     <th>RAC<br/>Fuel Surcharge</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="courier-cell">
//                         <img
//                           src={delhiveryLogo}
//                           className="delivery-company-logo"
//                           alt="Delhivery"
//                         />
//                         Small
//                       </div>
//                     </td>
//                     <td>surface</td>
//                     <td>0.5 Kg</td>
//                     <td>₹ 27 | 25</td>
//                     <td>₹ 29 | 27</td>
//                     <td>₹ 37 | 35</td>
//                     <td>₹ 37 | 35</td>
//                     <td>₹ 40 | 37</td>
//                     <td>₹ 40 | 37</td>
//                     <td>₹ 61 | 49</td>
//                     <td>₹ 56 | 53</td>
//                     <td>₹ 35 | 15%</td>
//                     <td>5%</td>
//                   </tr>
//                   {/* copy rest of rows same as your HTML */}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bottom-table">
//               <h6>E Kart 10 Kg Overheads</h6>
//               <div className="oda-table-container">
//                 <table className="oda-handling-table">
//                   <thead>
//                     <tr>
//                       <th>ODA charge</th>
//                       <th>Handling Charge</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>INR 2/Kg or 500 Per Docket Which is Higher</td>
//                       <td>
//                         (&gt;32-90 Kg, Rs 25),(&gt;90-200 Kg, Rs 250), (&gt;200Kg,
//                         Rs 2500)
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </section>

//         <footer>Copyright &#169; 2025 MYLOGISTIX. </footer>
//       </main>
//     </Dashboardpage>
//     </>
//   );
// }





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./style.css";
import logo from "./Images/my_logistix-logo.svg";
import delhiveryLogo from "./Images/delhivery-logo.svg";
import amazonLogo from "./Images/amazon-logo.svg";
import dtdcLogo from "./Images/dtdc-logo.svg";
import Dashboardpage from "../Dashboard/dashboardpage";

export default function PriceList() {
  const [courierRates, setCourierRates] = useState([]);

  useEffect(() => {
    // API se data fetch
    axios.get("http://localhost:8000/CourierRateList")
      .then(res => setCourierRates(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Price List</title>
        {/* Fonts & Icons */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Irish+Grover&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Dashboardpage>
        <main className="price-list-main">
          <section className="price-list-section">
            <div className="header-row">
              <h2 className="title">Price List</h2>
            </div>

            <div className="toggle-buttons">
              <button className="b2c-btn">B2C</button>
              <button className="b2b-btn">B2B</button>
            </div>

            {/* B2C Content */}
            <div className="b2c-content">
              <div className="b2c-table-container">
                <table className="b2c-data-table">
                  <thead>
                    <tr>
                      <th>Couriers</th>
                      <th>Mode</th>
                      <th>Min. Weight</th>
                      <th>Zone A<br />Within City Upto | Add.</th>
                      <th>Zone B<br />Within state Upto | Add.</th>
                      <th>Zone C1<br />Metro-Metro Upto | Add.</th>
                      <th>Zone C2<br />Metro-Metro Upto | Add.</th>
                      <th>Zone D1<br />Rest of India Upto | Add.</th>
                      <th>Zone D2<br />Rest of India Upto | Add.</th>
                      <th>Zone E<br />Rest of India Upto | Add.</th>
                      <th>Zone F<br />Jammu, NE Upto | Add.</th>
                      <th>COD Charge</th>
                      <th>RAC Fuel Surcharge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courierRates.map((rate, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="courier-cell">
                            {/* Logo map karna optional hai */}
                            {rate.companyName === "Delhivery" && (
                              <img src={delhiveryLogo} alt="Delhivery" className="delivery-company-logo" />
                            )}
                            {rate.companyName === "Amazon" && (
                              <img src={amazonLogo} alt="Amazon" className="delivery-company-logo" />
                            )}
                            {rate.companyName === "DTDC" && (
                              <img src={dtdcLogo} alt="DTDC" className="delivery-company-logo" />
                            )}
                            {rate.companyName}
                          </div>
                        </td>
                        <td>{rate.mode}</td>
                        <td>{rate.minWeight}</td>
                        <td>{rate.zoneA_upto} | {rate.zoneA_additional}</td>
                        <td>{rate.zoneB_upto} | {rate.zoneB_additional}</td>
                        <td>{rate.zoneC1_upto} | {rate.zoneC1_additional}</td>
                        <td>{rate.zoneC2_upto} | {rate.zoneC2_additional}</td>
                        <td>{rate.zoneD1_upto} | {rate.zoneD1_additional}</td>
                        <td>{rate.zoneD2_upto} | {rate.zoneD2_additional}</td>
                        <td>{rate.zoneE_upto} | {rate.zoneE_additional}</td>
                        <td>{rate.zoneF_upto} | {rate.zoneF_additional}</td>
                        <td>{rate.codCharge_charge} | {rate.codCharge_percentage}</td>
                        <td>{rate.fuelSurcharge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <footer>Copyright &#169; 2025 MYLOGISTIX.</footer>
        </main>
      </Dashboardpage>
    </>
  );
}




