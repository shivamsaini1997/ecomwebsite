
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Routes, Route, Navigate }
from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute';
import sweetAlertMsg from './component/Commen'


// Superadmin pages start
import SuperAdminLogin from './Superadmin/Pages/SuperAdminLogin';
// Superadmin pages end

// organizaion pages start
import OrganizationLogin from './Organization/Pages/Login'
import OrganizationSignup from './Organization/Pages/Signup'
import OrganizationProfile from './Organization/Pages/Profile';
// organization pages end

// Agent pages start
import AgentLogin from './Agent/Pages/Login';
import Profile from './Agent/Pages/Profile'
// Agent pages end

// Supplier pages start
import SupplierProfile from './Supplier/Pages/Supplier';
import SupplierProduct from './Supplier/Pages/Product';
import ProductOrderList from './Supplier/Pages/Orderlist';
import OrderDetail from './Supplier/Pages/OrderDetail';
import PaymentUser from './Supplier/Pages/Payment';
import PaymentToDate from './Supplier/Pages/PaymentToDate';
import PaymentToDateDetails from './Supplier/Pages/PaymentToDateDeatail';
import OutstandingPayments from './Supplier/Pages/OutstandingPayments';
import OutPymentSpecific from './Supplier/Pages/OutPymentSpecific';
import ReturnProduct from './Supplier/Pages/return';
import SalesDb from './Supplier/Pages/Sales';
// Supplier pages end



function App() {
  // get session for agent
    const user_id = localStorage.getItem('user_id');
    const user_type = localStorage.getItem('user_type');
    return (
        <Router>
            <ToastContainer theme="colored" />
            <Routes>
                {/* organization routes starrt */}
                <Route exact path="/organization/login" element={<OrganizationLogin />} />
                <Route exact path="/organization/Signup" element={<OrganizationSignup />} />
                <Route exact path="/organization/profile" element={<OrganizationProfile />} />
                {/* organization routes end */}

                {/* Super admin routes start */}
                <Route exact path="/super-admin/login" element={<SuperAdminLogin />} />
                {/* Super admin routes end */}

                {/* Agent routes start */}
                  <Route exact path="/agent/login" element={<AgentLogin />} />
                  <Route exact path="/agent/profile" element={<Profile />} />
                  {/* <PrivateRoute path="/agent/profile" component={Dashboard} /> */}
                 
                {/* {user_id && user_type === 'Agent' ? ( <Route path="/agent/login" element={<Navigate to="/agent/profile" />} /> ) : ( <Route exact path="/agent/login" element={<AgentLogin />} />)}
                {user_id === null && user_type === null ? ( <Route path="/agent/profile" element={<Navigate to="/agent/login" />} /> ) : ( <Route exact path="/agent/profile" element={<AgentProfile />} />)}  */}
                
                {/* Agent routes end */}

                {/* Supplier routes start */}
                <Route exact path="/supplier/profile" element={<SupplierProfile />} />
                <Route exact path="/supplier/product" element={<SupplierProduct/>} />
                <Route exact path="/supplier/product-order-list" element={<ProductOrderList/>} />
                <Route exact path="/supplier/order-detail" element={<OrderDetail/>} />
                <Route exact path="/supplier/payment-user" element={<PaymentUser/>} />
                <Route exact path="/supplier/payment-to-date" element={<PaymentToDate/>} />
                <Route exact path="/supplier/payment-to-date-details" element={<PaymentToDateDetails/>} />
                <Route exact path="/supplier/outstanding-payments" element={<OutstandingPayments/>} />
                <Route exact path="/supplier/outpyment-specific" element={<OutPymentSpecific/>} />
                <Route exact path="/supplier/returnproduct" element={<ReturnProduct/>} />
                <Route exact path="/supplier/sales" element={<SalesDb/>} />
                {/* Supplier routes end */}
            </Routes>
        </Router>
  );
}

export default App;
