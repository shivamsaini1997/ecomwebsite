import React from "react";
import sweetAlertMsg from '../../component/Commen'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Headerdb(props) {

    
    const navigate = useNavigate();     
    async function Logout() {
        const preference = await sweetAlertMsg('Logout Confirmation', 'Are you sure you want to log out ?', 'question', 'cancel', 'Yes', 'No')
        if (preference) {
            // remove agent session
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_type');
            navigate('/agent/login');
            // window.location.reload();
        }        
    }
    return(
        <>
            <header className="d-flex justify-content-end">
                <div className="container-fluid headerdb">
                    <div className="row">
                        <div className="col-12">
                            <div class="dropdown">
                                <button class="dropdown-toggle org-profile-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="userform-icon me-2" src={"/images/userprofileicon.svg"} alt="" />
                                        <span>{props.profilenameHeader}</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={Logout} href="#"><img class="me-2" style={{width:"19px"}} src="../images/switch.svg"/>Logout</a></li>
                                    <li><a class="dropdown-item" href="#"><img class="me-2" style={{width:"19px"}} src="../images/settings.svg"/>Settings</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Headerdb;