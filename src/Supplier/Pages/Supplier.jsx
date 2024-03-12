import React from "react";
import Headerdb from '../../component/Layouts/Header'
import Sidebarorg from "../../component/Layouts/Sidebar";
import '../../Static/css/orgstyle.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SupplierProfile(props){
   const profilenameHeader = "Agent Profile"
   const profilename = "Supplier Name"
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
<div className="supplierdb-main">
      <Headerdb profilenameHeader={profilenameHeader}/>
<div class="sidebarorg">
   <div class="container-fluid">
      <div class="row flex-nowrap">
         <Sidebarorg profilename={profilename} backtophomebtn={homeimage} backtohome={backtohome} items={items}
         />
         <div class="col pb-5 contant-body p-0">
            <div className="headprofile px-4 pt-5">
               <h3 className="ms-3">S1 Profile</h3>
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
                     <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                           <button class="nav-link active" id="pills-home-tab1" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true">GST Number Verification</button>
                        </li>
                        <li className="samkj00"> /</li>
                        <li class="nav-item" role="presentation">
                           <button class="nav-link" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">PAN Number Verification</button>
                        </li>
                        <li className="samkj00"> /</li>
                        <li class="nav-item" role="presentation">
                           <button class="nav-link" id="pills-profile-tab12" data-bs-toggle="pill" data-bs-target="#pills-profile12" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">Aadhaar Number Verification</button>
                        </li>
                     </ul>
                     <div class="tab-content px-4" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1" tabindex="0">
                           <div className="row pt-3">
                              <div className="col-md-6">
                                 <form action="" className="pt-3">
                                    <div className="row ">
                                       <div className="col-8 ps-0">
                                          <label className="d-flex justify-content-between lable-form">15 digit GST number  <img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
                                          <input type="text" className="form-control" />
                                          <p>Kindly check the details on the right side <img className="userform-icon me-2" src={"/images/arrow_for.svg"} alt="" /></p>
                                       </div>
                                       <div className="col-12 ps-0 pt-3">
                                          <input type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled/>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                              <div className="col-md-4">
                                 <div className="reviewgst">
                                    <div className="reviewgstheader">
                                       <p>Name</p>
                                    </div>
                                    <div className="review-body">
                                       <div className="d-flex justify-content-between py-2">
                                          <div>
                                             <label htmlFor="">GST Number</label>   
                                             <p>123456789101121</p>
                                          </div>
                                          <div>
                                             <label htmlFor="">GST Type</label>   
                                             <p>Regular</p>
                                          </div>
                                       </div>
                                       <div className=" py-2">
                                          <div>
                                             <label htmlFor="">Legal Name </label>   
                                             <p>Name of </p>
                                          </div>
                                       </div>
                                       <div className=" py-2">
                                          <div>
                                             <label htmlFor="">Address</label>   
                                             <p>Should come by itself ig after putting the gst number</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2" tabindex="0">
                           <div className="row pt-3">
                              <div className="col-md-6">
                                 <form action="" className="pt-3">
                                    <div className="row ">
                                       <div className="col-8 ps-0">
                                          <label className="d-flex justify-content-between lable-form">Enter your PAN card number<img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
                                          <input type="text" className="form-control" />
                                       </div>
                                       <div className="col-12 ps-0 pt-3">
                                          <input type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled/>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile12" role="tabpanel" aria-labelledby="pills-profile-tab12" tabindex="0">
                           <div className="row pt-3">
                              <div className="col-md-6">
                                 <form action="" className="pt-3">
                                    <div className="row ">
                                       <div className="col-8 ps-0">
                                          <label className="d-flex justify-content-between lable-form">Enter your aadhaar card number<img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
                                          <input type="text" className="form-control" />
                                       </div>
                                       <div className="col-12 ps-0 pt-3">
                                          <input type="Submit" value="Verify" className="formbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled/>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mobilenumber px-4 py-5">
                     <h6>Give your store a name</h6>
                     <label className="d-flex justify-content-between lable-form">You can update your store name at any time</label>
                     <form action="" className="pt-3">
                        <div className="row">
                            <div className="col-lg-4 ps-3">
                                <label className="d-flex justify-content-between lable-form">Your store name<img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-lg-2 ps-3 pt-4">
                                <button type="Submit" value="Save" className="formbtn" disabled> Save</button>
                            </div>
                        </div>
                        </form>
                  </div>
                  <div className="mobilenumber px-4 py-5">
                     <div className="mb-4">
                     <h6>Select your preferred shipping method <img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></h6>
                     <label className="d-flex justify-content-between lable-form">You can update your store name at any time</label>
                        <form action="" className="pt-3">
                            <div className="row preferred-shipping">
                                <div className="col-12">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Easy Ship<br/><span className="shipping-method">You store and pack order at your location. Will pick it and deliver.</span>
                                    </label>
                                    </div>
                                    {/* <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Self Ship <br/><span className="shipping-method">You store and pack and deliver to customers on your own or any third party courier</span>
                                    </label>
                                    </div> */}
                                    <input type="Submit" class="formbtn mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal" disabed="" value="Save"></input>
                                </div>
                                </div>
                        </form>
                     </div>
                     <div className="mb-4">
                        <h6>Pickup address</h6>
                        <label className="d-flex justify-content-between lable-form">This is where your orders will be picked from</label>
                            <form action="" className="pt-3">
                                <div className="row preferred-shipping">
                                    <div className="col-12">
                                       <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    Name<br/><span className="shipping-method">Full Address</span>
                                    </label>
                                    <div className="text-end">
                                        <a href="#">Edit</a>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                        </form>
                     </div>
                     <div className="mb-4">
                            <form action="" className="pt-3">
                                <div className="row preferred-shipping">
                                   <div className="col-12">
                                   <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label class="form-check-label" for="flexRadioDefault3">
                                    Add new pickup address
                                    </label>
                                    <Form noValidate>
                                <Row className="mb-3 admin-fm">
                                    <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type="text"
                                        />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12 mb-3 position-relative" controlId="validationCustom02">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type="text"
                                        />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12 mb-3 position-relative" controlId="validationCustom02">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type="text"
                                        />
                                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12 position-relative" controlId="validationCustom02">
                                        <Form.Label>Address/Street</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type="text"
                                        />
                                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                   
                                </Row>
                                </Form>
                                    
                                    </div>
                                   </div>
                                </div>
                        </form>
                     </div>
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
                        <li className="samkj00"> /</li>
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
                                          <div>
                                             <label htmlFor="">Trade Name </label>   
                                             <p>Name Last</p>
                                          </div>
                                          <div>
                                             <label htmlFor="">Legal Name</label>   
                                             <p>Name Last</p>
                                          </div>
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
                                          <label className="d-flex justify-content-between lable-form">We need your details  to transfer the money you make from sales.
                                                <img className="userform-icon me-2" src={"/images/heplicon.svg"} alt="" /></label>
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
      </div>
</>
);
}
export default SupplierProfile;