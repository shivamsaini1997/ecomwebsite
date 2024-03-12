import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'
import DataTable from '../../component/DataTable'

function PaymentUser(props){
   const profilenameHeader = "Agent Profile"
    const profilename = "Supplier’s name"
    const homeimage = <img className='userform-icon' src={'/images/house.svg'} />
    const backtohome = <span className="border-bottom-after">Back to Home</span>
       
    const items = [
      {name: 'Dashboard',srcs : "/images/home.svg"},
      {name: 'Products',srcs : "/images/Products.svg"},
      {name: 'Orders',srcs : "/images/check-out.svg"},
      {name: 'Payments',srcs : "/images/credit-card 2.svg"},
      {name: 'Return',srcs : "/images/return-box 2.svg"},
    ];
    return(
    <>
    <div className="Payment">
    <Headerdb profilenameHeader={profilenameHeader}/>

    <div class="sidebarorg">
       <div class="container-fluid">
          <div class="row flex-nowrap">
             <Sidebarorg  profilename={profilename} items={items}  backtophomebtn={homeimage} backtohome={backtohome}/>
             <div class="col pb-5 contant-body p-0">
                <div className="headprofile px-4 pt-5">
                    <a href="" className="text-dark">
                    <h5 className="ms-3">Payments</h5></a>
                </div>
               <div className="tabledataP px-3 my-2">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-5 align-items-center justify-content-between">
                                    <div>
                                    <span className="Customerid">Payment to Date <img className='er-icon' src={'/images/error_24px.svg'} /></span>
                                    <div className="lablename"> ₹1274.68</div>
                                    </div>
                                 <div>
                                    <a href="#" className="viewPaymentbtn">View Details</a>
                                 </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                    <span className="lablename">Last Payment </span>
                                    <span className="Customerid"> ₹1274687 </span>
                                    </div>
                                
                                 <div>
                                    <span className="lablename">25th Dec </span>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-5 align-items-center justify-content-between">
                                    <div>
                                    <span className="Customerid">Total Outstanding Payments <img className='er-icon' src={'/images/error_24px.svg'} /></span>
                                    <div className="lablename"> ₹1274.68</div>
                                    </div>
                                 <div>
                                    <a href="#" className="viewPaymentbtn">View Details</a>
                                 </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                    <span className="lablename">Next Payment </span>
                                    <span className="Customerid"> ₹1274687 </span>
                                    </div>
                                
                                 <div>
                                    <span className="lablename">8th Feb </span>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-3 align-items-center justify-content-between">
                                    <div>
                                    <span style={{color :"#8D8D8DEE"}} className="lablename">Compensation & Recoveries<img className='er-icon' src={'/images/error_24px.svg'} /></span>
                
                                    </div>
                                 <div>
                                    <a href="#" className="viewPaymentbtn">View Details</a>
                                 </div>
                              </div>
                              <div className="Compensation">
                                   <ul className="p-0 mb-0">
                                    <li class="nav-item pt-2 w-100 py-2">
                                        <div className="d-flex justify-content-between">
                                             <span>Compensation</span>
                                             <span>0%</span>
                                        </div>
                                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                             <div class="progress-bar w-0"></div>
                                       </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className="Compensation">
                                   <ul className="p-0 mb-0">
                                    <li class="nav-item pt-2 w-100 py-0">
                                        <div className="d-flex justify-content-between">
                                             <span>Recoveries</span>
                                             <span>0%</span>
                                        </div>
                                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                             <div class="progress-bar w-0"></div>
                                       </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className="d-flex mt-3 align-items-center justify-content-between">
                                    <div>
                                    <span className="lablename">Total</span>
                
                                    </div>
                                 <div>
                                 <span className="lablename">₹0</span>

                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard card-bg-box mb-3">
                              <div className="d-flex mb-5 align-items-center justify-content-between">
                                    <div>
                                    <div className="lablename">Have a query?</div>
                                    <span className="Customerid">Raise a ticket for your payment related matters</span>
                                    </div>
                                 <div>
                                    <img className='userform-icon' src={'/images/navigate_next.svg'} />
                                 </div>
                              </div>
                             
                        </div>
                     </div>

                  </div>
               </div>
             </div>
          </div>
       </div>
    </div>
    </div>
   </>
    );
    }

export default PaymentUser;