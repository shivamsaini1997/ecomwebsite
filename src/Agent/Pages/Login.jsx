import React, { useState,useRef } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AgentLogin() {
    const navigate = useNavigate();    
    // declair variables
    const [data, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    // this code will append the values in input fields
    const handleChange = (event) => { const { name, value } = event.target; setFormData(prevState => ({ ...prevState, [name]: value }));} ;
    
    // this function will validate email address valid or not
    const validateEmail = (email) => { const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return re.test(email); };  

    // if enter key is press then this function will be called
    const handleKeyPress = (event) => {if (event.key === 'Enter') {HandleLogin();}};

    // this code will use to check focus
    const emailref = useRef(null); 
    const passwordref = useRef(null); 

    // this function will be call 
    function HandleLogin() {
        
        if (!data.email) {
            emailref.current.focus(); // Focus on the input field
            toast.error("Please enter email")
        }
        else if (!validateEmail(data.email)) {
            emailref.current.focus();
            toast.error("Please enter a valid email");
        }
        else if (!data.password) {
            passwordref.current.focus();
            toast.error("Please enter password")
        }
        else {
            // setTimeout(() => {setIsLoading(false);}, 10000);
            setIsLoading(true);
            axios.post('http://192.168.1.70:8000/Agent/Agent_Login', {
                email: data.email,
                password: data.password
            })
                .then(response => {
                const data = response.data
                console.log(data)
                setIsLoading(false);
                if (data.status == 1) {
                    localStorage.setItem('user_id', data.obj.id); // To set data in local storage
                    localStorage.setItem('user_type', 'Agent');
                    const user_id = localStorage.getItem('user_id');// get session code
                    const user_type = localStorage.getItem('user_type');// get session code
                    if (user_id && user_type) {
                        toast.success(data.msg);
                        navigate('/agent/profile');
                    }
                    else {
                        toast.success('Something went wrong session not created');                    
                    }
                    
                }
                else{
                    toast.error(data.msg);   
                    
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                setIsLoading(false);
                toast.error("Something went wrong");
            });
        }
    }
    return (

        <>
            {/* <ToastContainer theme="colored" /> */}
            <div className="formadmin padding-y superform">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-7 padding-form">
                            <div className="text-center mb-5">
                                <h4> Login</h4>
                            </div>
                            
                            <div className="adminform">
                            {/* <Form noValidate> */}
                                <Row className="mb-3 admin-fm">
                            
                                    <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="email" value={data.email} onChange={handleChange} onKeyDown={handleKeyPress} className="" required type="email" ref={emailref} />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control  value={data.password} onChange={handleChange} onKeyDown={handleKeyPress} className="" required type="password" name="password" ref={passwordref}   />
                                        <div className="text-end">
                                            <a className="forgetpassword" href="#">Forgot Password ?</a>
                                        </div>
                                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    {/* <button class="formbtn mt-3 w-100" type="button" disabled>
                                        <span class="sr-only">Loging in </span>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    </button> */}

                                    
                                    <button onClick={HandleLogin} type="button" className="formbtn mt-3 w-100" disabled={isLoading}>
                                        {isLoading ? (<><i className="fas fa-spinner fa-spin"></i>Logging in <div className="spinner-grow spinner-grow-sm"></div><div className="spinner-grow spinner-grow-sm"></div><div className="spinner-grow spinner-grow-sm"></div></>) : ('Login')}
                                    </button>
                                </Row>
                                
                                    <div className="text-center position-relative">
                                        <span className="new-here">New Here?</span><br></br>
                                        <a href="#" className="link-u">Create your ABC account</a>
                                    </div>
                                {/* </Form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AgentLogin;