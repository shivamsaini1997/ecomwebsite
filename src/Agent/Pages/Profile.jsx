import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'

export default function Profile() {
   const profilename = "Agent Name"
   const items = [
   {name: 'Home',srcs : "/images/house.svg"},
   {name: 'My Suppliers',srcs : "/images/house.svg"},
   {name: 'Orders',srcs : "/images/house.svg"},
   {name: 'Customer',srcs : "/images/house.svg"},
   {name: 'Logistics',srcs : "/images/house.svg"},
   {name: 'Manage Reviews',srcs : "/images/house.svg"},
];
return(
   <>
   <Headerdb/>
   <div class="sidebarorg agent-profile">
      <div class="container-fluid">
         <div class="row flex-nowrap">
            <Sidebarorg  profilename={profilename} items={items}/>
            <div class="col pb-5 contant-body p-0">
               <div className="headprofile px-4 pt-5">
                  <h3 className="ms-3">Agent</h3>
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                     <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personal</button>
                     </li>
                     <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Account</button>
                     </li>
                  </ul>
               </div>
               <div class="tab-content mobile-num" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                  
                  no data
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                     <div className="mobilenumber px-4 py-5">
                        <h6>Mobile Number Verification</h6>
                        <form action="javascript:void(0)" >
                           <div className="row ">
                              <div className="col-1">
                                 <input type="text" className="form-control" value="+91"/>
                              </div>
                              <div className="col-3 ps-0">
                                 <input type="text" className="form-control" />
                              </div>
                              <div className="col-2 ps-0">
                                 <button type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Verify</button>
                              </div>
                           </div>
                        </form>
                     </div>
                     <div className="mobilenumber px-4 py-5">
                        <h6>Email ID Verification</h6>
                        <form action="javascript:void(0)" >
                           <div className="container-fluid">
                           <div className="row align-items-end">
                              
                              <div className="col-4 ps-0">
                              <label className="d-flex justify-content-between lable-form">Enter your email address here</label>
                                 <input type="text" className="form-control" />
                              </div>
                              <div className="col-2 ps-0">
                                 <button type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled >Verify</button>
                              </div>
                           </div>
                           </div>
                        </form>
                     </div>
                     <div className="mobilenumber px-4 py-5">
                        <h6>Pan Card Verification <span>*</span></h6>
                        <form action="javascript:void(0)" >
                           <div className="container-fluid">
                           <div className="row align-items-end">
                              
                              <div className="col-4 ps-0">
                              <label className="d-flex justify-content-between lable-form">Enter your PAN card number</label>
                                 <input type="text" className="form-control" />
                              </div>
                              <div className="col-2 ps-0">
                                 <button type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled >Verify</button>
                              </div>
                           </div>
                           </div>
                        </form>
                     </div>
               
                     
                     <div className="mobilenumber px-4 py-5">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                           <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="pills-home-tab4" data-bs-toggle="pill" data-bs-target="#pills-home4" type="button" role="tab" aria-controls="pills-home4" aria-selected="true">Add you bank account</button>
                           </li>
                           <li className="samkj00"> /</li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-profile-tab5" data-bs-toggle="pill" data-bs-target="#pills-profile5" type="button" role="tab" aria-controls="pills-profile5" aria-selected="false">Enter UPI ID</button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-profile-tab8" data-bs-toggle="pill" data-bs-target="#pills-profile8" type="button" role="tab" aria-controls="pills-profile8" aria-selected="false">Upload Bank Card</button>
                           </li>
                        </ul>
                        <div class="tab-content px-2" id="pills-tabContent">
                           <div class="tab-pane fade show active" id="pills-home4" role="tabpanel" aria-labelledby="pills-home-tab4" tabindex="0">
                              <div className="row pt-3">
                                 <div className="col-md-8">
                                 <label className="lable-form">We need your bank details  to transfer the money you make from sales.</label>
                                 <div className="gst-trade mt-2">
                                       <div className="review-body">
                                          <div className="d-flex justify-content-between py-2">
                                             <div>
                                                <label htmlFor="">GST Number/PAN Number</label>   
                                                <p>123456789101121</p>
                                             </div>
                                             {/* <div>
                                                <label htmlFor="">Trade Name </label>   
                                                <p>Name Last</p>
                                             </div>
                                             <div>
                                                <label htmlFor="">Legal Name</label>   
                                                <p>Name Last</p>
                                             </div> */}
                                          </div>                                      
                                       </div>
                                 </div>
                                    <div className="container">
                                       <div className="row">
                                          <div className="col-4">
                                          <form action="">
                                    
                                          <div className="row mt-5">
                                             <div className="col-12 ps-0 mb-4">
                                                   <label class="d-flex justify-content-between lable-form">Account Holder Name </label>
                                                   <input type="text" className="form-control" />
                                             </div>
                                             <div className="col-12 ps-0  mb-4">
                                                   <label class="d-flex justify-content-between lable-form">Bank Account number</label>
                                                   <input type="text" className="form-control" />
                                             </div>
                                             <div className="col-12 ps-0  mb-4">
                                                   <label class="d-flex justify-content-between lable-form">Re-enter Bank Account number </label>
                                                   <input type="text" className="form-control" />
                                             </div>
                                             <div className="col-12 ps-0  mb-4">
                                                   <label class="d-flex justify-content-between lable-form">IFSC code</label>
                                                   <input type="text" className="form-control" placeholder="Enter IFSC code" />
                                             </div>
                                             <div className="col-12 ps-0 mt-3">
                                                   <input type="Submit" value="Save" className="formbtn" />
                                             </div>
                                          </div>
                                    
                                 </form>
                                          </div>
                                       </div>
                                    </div>
         
                                 </div>
                              
                              </div>
                           </div>
                           <div class="tab-pane fade" id="pills-profile5" role="tabpanel" aria-labelledby="pills-profile-tab5" tabindex="0">
                              <div className="row pt-3">
                                 <div className="col-md-6">
                                    <form action="" className="pt-3">
                                       <div className="row ">
                                          <div className="col-8 ps-0">
                                             <label className="d-flex justify-content-between lable-form">We need your details  to transfer the money 
   you make from sales.<img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
                                             <input type="text" className="form-control" />
                                          </div>
                                          <div className="col-12 ps-0 pt-3">
                                             <input type="Submit" value="Save" className="formbtn" />
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div class="tab-pane fade" id="pills-profile8" role="tabpanel" aria-labelledby="pills-profile-tab8" tabindex="0">
                              <div className="row pt-3">
                                 <div className="col-md-8">
                                    <form action="" className="pt-3">
                                       <div className="row align-items-end">
                                          <div className="col-6 ps-0">
                                             <label className="d-flex justify-content-between lable-form">We need your bank details  to transfer the money you make from sales.
                                             
                                             </label>
                                             <input type="File" className="form-control file-deign" placeholder="Click here to upload your bank card"accept="image/png, image/gif, image/jpeg"  />
                                          </div>
                                          <div className="col-4 ps-0 pt-3">
                                             <input type="Submit" value="Upload" className="formbtn" disabled/>
                                          </div>
                                       </div>
                                    </form>
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


   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
         <h1 class="modal-title fs-5" id="exampleModalLabel">Enter OTP</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body px-5">
         
         <div className="d-flex gap-3 mt-3">
               <input className="form-control" type="text" />
               <input className="form-control"  type="text" />
               <input className="form-control"  type="text" />
               <input  className="form-control" type="text" />
               <input className="form-control"  type="text" />
               <input  className="form-control" type="text" />
         </div>
         <div className="d-flex mt-3 justify-content-between">
               <span>Resend OTP</span>
               <span>12 sec</span>
         </div>

         </div>
         <div class="modal-footer">
         <button type="button" class="formbtn w-25">Submit</button>
         </div>
      </div>
   </div>
   </div>
   </>

  )
}
