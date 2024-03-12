import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'
import DataTable from '../../component/DataTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SupplierProduct(props){
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
    <div className="productlistsupplier">
    <Headerdb profilenameHeader={profilenameHeader}/>
    <div class="sidebarorg ">
       <div class="container-fluid">
          <div class="row flex-nowrap">
             <Sidebarorg  profilename={profilename} items={items}  backtophomebtn={homeimage} backtohome={backtohome}/>
             <div class="col pb-5 contant-body p-0">
                <div className="headprofile px-4 pt-5">
                   <h3 className="ms-3">S1 Products</h3>
                </div>
                <div className="statement-product">
                    <div className="uploadsdone">
                        <h6>890</h6>
                        <span>Upload Done</span>
                    </div>
                    <div class="ps-0">
                        <a href="#" class="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           <img class="userform-icon2 me-2" src="/images/uploadbtn.svg" alt=""/>Upload Product
                        </a>
                     </div>
                </div>
                <div className="tabledataP px-3 my-2">
               <div className="row">
                    <div className="col-12">
                        <div className="d-flex d-flex justify-content-between my-3">
                            <div>
                              <button aria-label="All (130)" class="All btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">All (130)</span>
                              </button>
                              <button aria-label="All (130)" class="Approved  btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Approved (86)</span>
                              </button>
                           
                          
                              <button aria-label="All (130)" class="Pending btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Pending (36)</span>
                              </button>
                              <button aria-label="All (130)" class="Declined btn-data p-button p-component" type="button">
                                 <span class="p-button-icon p-c p-button-icon-left pi pi-filter-slash"></span>
                                 <span class="p-button-label p-c">Declined (9)</span>
                              </button>
                            </div>
                            
                            <div>
                            <span class="p-input-icon-left"><i class="pi pi-search"></i>
                            <span className="searchlable">Search</span>
                             <input class="searchinputtable p-inputtext p-component searchinputtable" value=""/></span>
                             {/* <button className="searchbar"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                             <button className="searchbar resetbtn">Reset</button> */}
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
                                    <th>Category</th>
                                    <th>Product ID</th>
                                    <th>SKU</th>
                                    <th>Created Date</th>
                                    <th>Quantity</th>
                                    <th>Storage</th>
                                    <th>QC Status</th>
                                    <th>Availability</th>
                                    <th>Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>Kurtis</td>
                                    <td>	Number-12837492
                                    </td>
                                  
                                    <td>$70,663.00	</td>
                                    <td>02/01/2001	</td>
                                    <td>
                                       14
                                    </td>
                                    <td>CFC</td>
                                    <td> <span class="panding-color">Panding</span></td>
                                    <td><span class="out-line">Mark out of Stock</span></td>
                                    <td><div class="d-flex">
                                       <a href="#"><img class="view-product-icon prod-icon"  src="../images/eye-regular 1.svg"/></a>
                                       <a href="#"><img class="edit-product-icon prod-icon" src="../images/mode_edit.svg"/></a>
                                       <a href="#"><img class="delete-product-icon prod-icon" src="../images/delete_24px.svg"/></a></div></td>
                            
                                 </tr>
                                 <tr>
                                    <td>2</td>
                                    <td>Kurtis</td>
                                    <td>	Number-12837492
                                    </td>
                                   
                                    <td>$70,663.00	</td>
                                    <td>02/01/2001	</td>
                                    <td>14
                                    </td>
                                    <td>CFC</td>

                                   <td><span class="panding-color">Panding</span></td>

                                    <td><span class="out-line">Mark out of Stock</span></td>
                                    <td><div class="d-flex">
                                       <a href="#"><img class="view-product-icon prod-icon"  src="../images/eye-regular 1.svg"/></a>
                                       <a href="#"><img class="edit-product-icon prod-icon" src="../images/mode_edit.svg"/></a>
                                       <a href="#"><img class="delete-product-icon prod-icon" src="../images/delete_24px.svg"/></a></div></td>
                            
                                 </tr>
                              </tbody>
                           </table>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                           <span className="paginationentries">Displaying 1 to 10 of 100 entries</span>
                           <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                            </nav>
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

export default SupplierProduct;