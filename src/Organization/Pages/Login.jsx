import React, { useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function OrganizationLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [allEntry, setAllEntry] = useState([]);
    const inputRef = useRef(null);
    const inputRefa = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already logged in
        const userType = localStorage.getItem('orgEntries');
        // const userId = localStorage.getItem('User_Id');
        if (userType) {
            const s = JSON.parse(localStorage.getItem(userType)) || []
            const b = localStorage.setItem("orgEntries", JSON.stringify([...s]));
            console.log(b);
            // Redirect to dashboard if user is already logged in
            // navigate("/organization/organization-profile");
        }
    }, []);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const organizationLogin = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            if (!validateEmail(email)) {
                toast.error("Please enter a valid email");
                inputRef.current.focus();
            } else if (!password) {
                toast.error("Please enter password");
                inputRefa.current.focus();
            } else {
                // Simulating authentication success
                toast.success("Login Successful");
                
                   // Save login data to allEntry state
                    const newEntry = { email: email, password: password };
                    setAllEntry([...allEntry, newEntry]);

                // Redirect to dashboard
                // navigate("/organization/organization-profile");
            }
        }
    };

    return (
        <>
            <div className="formadmin padding-y superform">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-7 padding-form">
                            <div className="text-center mb-5">
                                <h4>Organization Login</h4>
                            </div>
                            <div className="adminform">
                                <Form noValidate validated={validated}>
                                    <Row className="mb-3 admin-fm">
                                        <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom01" required>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={inputRef} required />
                                            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12 position-relative" controlId="validationCustom02">
                                            <Form.Label>Password</Form.Label>
                                            <div className="position-relative">
                                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={inputRefa} required />
                                            <FontAwesomeIcon icon={faEyeSlash} className="iconpass" />
                                            </div>
                                            <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="text-end">
                                            <a className="forgetpassword" href="#">Forgot Password ?</a>
                                        </div>
                                        <Button type="submit" onClick={organizationLogin} className="formbtn mt-3 w-100">Login</Button>
                                    </Row>
                                    <div className="text-center position-relative">
                                        <span className="new-here">New Here?</span><br />
                                        <a href="#" className="link-u">Create your ABC account</a>
                                    </div>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default OrganizationLogin;
