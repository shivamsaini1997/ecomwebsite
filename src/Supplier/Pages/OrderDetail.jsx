import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'
import OrderListTable from '../../component/OrderListTable';

function OrderDetail(props){
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
    <div className="OrderDetail">
    <Headerdb profilenameHeader={profilenameHeader}/>

    <div class="sidebarorg">
       <div class="container-fluid">
          <div class="row flex-nowrap">
             <Sidebarorg  profilename={profilename} items={items}  backtophomebtn={homeimage} backtohome={backtohome}/>
             <div class="col pb-5 contant-body p-0">
                <div className="headprofile px-4 pt-5">
                    <a href="" className="text-dark">
                    <h5 className="ms-3"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black"/>
                    </svg>
                    User Name # 0937 - Order Detail </h5>
                    </a>
                </div>
               <div className="tabledataP px-3 my-2">

                  <div className="row">
                     <div className="col-lg-6">
                        <div className="orderCard">
                              <div className="d-flex mb-5 align-items-center">
                                 <span className="costomer-profile"></span>
                                 <div>
                                    <div className="lablename">Customer Name</div>
                                    <span className="Customerid">Customer ID</span>
                                 </div>
                              </div>
                              <div className="d-flex align-items-center">
                                 <span className="costomer-profile"></span>
                                 <div>
                                    <div className="lablename">Mastercard</div>
                                    <span className="Customerid">Card Number: ******4291</span>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="orderCard add-order-detail-card">
                              <div className="d-flex  align-items-start gp">
                                 <span className="Customerid">Email ID : </span>  <span className="lablename"> divyanshiagrawal1@gmail.com</span>
                              </div>
                              <div className="d-flex  align-items-start gp">
                                 <span className="Customerid">Mobile : </span>  <span className="lablename">+91 7653790067</span>
                              </div>
                              <div className="d-flex  mb-0 align-items-start gp">
                                 <span className="Customerid">Shipping Address : </span>  <span className="lablename"> 45 Roker Terrace Latheronwheel <br /> KW5 8NW, Delhi, INDIA</span>
                              </div>
                             
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="totalOrderOrderid bg-row">
                           <div className="d-flex justify-content-between table-header">
                              <span>Order ID #646573</span>
                              <span>Total Orders : 3</span>
                           </div>
                        </div> 
                        <div className="tableorderdetail">
                           <table className="table mb-0">
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Date</th>
                                    
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Name</td>
                                    <td>623</td>
                                    <td>2</td>
                                    <td>1246</td>
                                    <td>24/02/23</td>
                                 </tr>
                                 <tr>
                                    <td>Name</td>
                                    <td>623</td>
                                    <td>2</td>
                                    <td>1246</td>
                                    <td>24/02/23</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>

                        <div className="delivStatus d-flex justify-content-between bg-row mt-0">
                           <div>
                              <div className="d-flex mb-2 align-items-center">
                                 <span className="Customerid">Status :</span>
                                 <div className="lablename Approved bgStatus">Paid</div>
                              </div>
                        
                              <div className="d-flex align-items-center">
                                 <span className="Customerid">Delivery : </span>
                                 <div className="lablename dis"> Dispatched</div>
                              </div>
                          
                           </div>
                          
                           <div className="orderTotalTax">
                              <div className="d-flex align-items-center justify-content-between">
                                 <span className="Customerid">Subtotal : </span>
                                 <span className="lablename"><img className='rupyee-icon' src={'/images/rupee 4.svg'} /> 7465.45</span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                 <span className="Customerid">Discount : </span>
                                 <span className="lablename"><img className='rupyee-icon' src={'/images/rupee 4.svg'} /> 00.00</span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-bottom">
                                 <span className="Customerid">Tax : </span>
                                 <span className="lablename"><img className='rupyee-icon' src={'/images/rupee 4.svg'} />100.00</span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                 <span className="Customerid">Total : </span>
                                 <span className="lablename"> <img className='rupyee-icon' src={'/images/rupee 4.svg'} />7565.45</span>
                              </div>
                           </div>
                        </div>
                        

                     </div>
                  </div>

                  <div className="row mt-2">
                     <div className="col-12">
                        <div className="shippingActivity bg-row">
                           <h6>Shipping Activity</h6>
                           <ul className="mt-5 shipping-ul">
                              <li>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <span className="shippingStatus1">Order was placed (Order ID: #32543)</span><br/>
                                       <span className="shippingStatus2">Your order has been placed successfully</span>
                                    </div>
                                    <div className="col-md-6 text-end">
                                       <span className="dateshipping">Thursday 11:29 AM</span>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <span className="shippingStatus1">Pick-up</span><br/>
                                       <span className="shippingStatus2">Pick-up scheduled with logistic</span>
                                    </div>
                                    <div className="col-md-6 text-end">
                                       <span className="dateshipping">Friday 11:29 AM</span>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <span className="shippingStatus1">Picked</span><br/>
                                       <span className="shippingStatus2">Item has been picked up by logistic</span>
                                    </div>
                                    <div className="col-md-6 text-end">
                                       <span className="dateshipping">Saturday 11:29 AM</span>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <span className="shippingStatus1">Dispatched for delivery</span><br/>
                                       <span className="shippingStatus2">Package has left from logistic</span>
                                    </div>
                                    <div className="col-md-6 text-end">
                                       <span className="dateshipping">Today 11:29 AM</span>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <span className="shippingStatus1">Delivery</span><br/>
                                       <span className="shippingStatus2">Package will be delivered by tomorrow</span>
                                    </div>
                                   
                                 </div>
                              </li>
                           </ul>
                           
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

export default OrderDetail;