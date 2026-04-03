


import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";     
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';


import Register from './components/Register'; 
import Login from './components/Login';
import Profile from './components/Profile';
// import Dashboard from './components/Dashboardclient';
import HomePage from './components/clienthomepage' 
import MyLogistixFrontend from './components/PickupRequestpage'

//  import PickupPage from './components/PickupPage'
import PickupRequest from './components/pickuprequest/PickupRequest';
import Dashboardpage from "./components/Dashboard/dashboardpage"
import PickupPointPage from './components/pickPoint/PickupPoint'
import DeliveryAppointment from './components/DeliveryApointment/deliveryApointment'
import WeightReconciliation from './components/weightReconciliation/WeightReconciliation'
import NdrException from './components/NDR&exception/NdrException'
import MyOrders from './components/orders/myorders'
import RateCalculator from './components/rateCalculator/rateCalculator'
import CustomerSupports from './components/CustomerSupportPage/customerSupport'
import ResourceCenter from './components/ResourceCenter/ResourceCenter'
import ZoneLists from './components/ZoneList/ZoneLists'
import PriceList from "./components/PriceList/PriceList"
import AllOrders from "./components/AllOrders/allorders"
// import BulkOrder from "./components/BulkOrders/bulkorders"
// import ChannelOrder from "./components/ChannelOrders/channelorders"
import WalletRecharge from "./components/Wallet/Wallet"
import IntegrationPage from "./components/Integration/integration"

const adminContainerStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left:0,
  overflowY: 'hidden',
  backgroundColor: '#fff', 
};

const App = () => {
  const { currentRole } = useSelector(state => state.user);
    const token = localStorage.getItem('token');


  return (
    <Router>
      {currentRole === null &&
        <Routes>
         

          <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={token ? <Dashboardpage /> : <Navigate to="/dashboard" />} />
        <Route path="/Pickuprequestfe" element={<MyLogistixFrontend />} />
        <Route path="/PickupPage" element={<PickupRequest />} />
        <Route path="/PickupPointPage" element={<PickupPointPage/>} />
        <Route path="/deliveryApointment" element={<DeliveryAppointment/>} />
        <Route path="/WeightReconciliation" element={<WeightReconciliation/>} />
        <Route path="/NdrException" element={<NdrException/>}/>
        <Route path="/MyOrders" element={<MyOrders/>}/>
        <Route path="/RateCalculator" element={<RateCalculator/>}/>
        <Route path="/CustomerSupports" element={<CustomerSupports/>}/>
        <Route path="/PincodeServiciability" element={<ResourceCenter/>}/>
        <Route path="/ZoneLists" element={<ZoneLists/>}/>
        <Route path="/PriceList" element={<PriceList/>}/>
        <Route path="/AllOrders" element={<AllOrders/>}/>
        {/* <Route path="/BulkOrder" element={<BulkOrder/>}/>
        <Route path="/ChannelOrder" element={<ChannelOrder/>}/> */}
        <Route path="/WalletRecharge" element={<WalletRecharge/>}/>
        <Route path="/restAPI" element={<IntegrationPage/>}/>
       



        </Routes>}

      {currentRole === "Admin" &&
        <div style={adminContainerStyle}>
          <AdminDashboard />
        </div>
      }

      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    </Router>
  )
}

export default App;      
