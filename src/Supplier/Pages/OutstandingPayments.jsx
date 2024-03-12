import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'

import DataTable from '../../component/DataTable'
function OutstandingPayments(props){
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
    <div className="PaymentToDate">
    <Headerdb profilenameHeader={profilenameHeader}/>

    <div class="sidebarorg">
       <div class="container-fluid">
          <div class="row flex-nowrap">
             <Sidebarorg  profilename={profilename} items={items}  backtophomebtn={homeimage} backtohome={backtohome}/>
             <div class="col pb-5 contant-body p-0">
                <div className="headprofile px-4 pt-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Payment <img className='breadright-icon' src={'/images/breadright.svg'} />
                            </a>
                        </li>
                         <li class="active" aria-current="page">Total Outstanding Payments</li>

                        </ol>
                    </nav>
                    <a href="" className="text-dark">
                    <h5 className="" ><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.595 10.1887L19.6563 8.25L11.4062 16.5L19.6563 24.75L21.595 22.8113L15.2975 16.5L21.595 10.1887Z" fill="black"/>
                    </svg>
                    Total Outstanding Payments</h5>
                    </a>
                </div>
               <div className="tabledataP px-3 my-2">

                  <div className="row mb-3">
                     <div className="col-12">
                        <div className="statement-product">
                            <div className="order-list-view-tab">
                                <div className="uploadsdone">
                            
                                    <div>
                                        <h6 style={{color :"#8D8D8DEE"}} >Total Net Order Amount<img class="er-icon" src="/images/error_24px.svg"/></h6>
                                        <span className="">Rs. 1274.68</span>
                                    </div>
                                    
                                </div>
                                
                                </div>
                            
                            </div>
                        </div>
                     
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="tableorderdetail">
                           <table className="table mb-0 table-py">
                              <thead>
                                 <tr>
                                    <th>S.no</th>
                                    <th>Payment Date</th>
                                    <th>Order Amount</th>
                                    <th>Payment Details</th>
                                    <th>Action</th>
                                    
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>2019-03-21</td>
                                    <td>-₹6353 </td>
                                    <td>KN56D248978967RDE</td>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                            
                                 </tr>
                                 <tr>
                                 <td>2</td>
                                    <td>2019-03-21</td>
                                    <td>-₹6353 </td>
                                    <td>KN56D248978967RDE</td>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="view-product-icon prod-icon" style={{width:"35px"}} src="../images/eye-regular 1.svg"/></a></td>
                                 </tr>
                              </tbody>
                           </table>
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

export default OutstandingPayments;