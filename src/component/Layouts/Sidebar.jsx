import React from "react";

export default function Sidebar(props) {
    const data = props.items
    return (
        <>
            <div className=" col-md-3 col-xl-2 p-0 sidebardesign sidebody sidebar">
                <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 mt-3" id="menu">
                        <li className="nav-item ps-3 pt-2 d-flex justify-content-between w-100 p-0 position-relative bkdash">
                            <a href="" className="d-flex mb-3">
                                <span style={{width:"20px", lineHeight: "1"}}>{props.backtophomebtn}</span>
                                <span className="ms-2 pb-2">{props.backtohome}</span>
                            </a>
                        </li>
                        <li className="nav-item px-3 pt-2 d-flex justify-content-between w-100">
                            <div className="d-flex">
                                <img className="userform-icon"  style={{width:"20px"}} src={"/images/usericon.svg"} alt="" />
                                <span className="ps-2">{props.profilename}</span>
                            </div>
                            <a href="" style={{width:"20px"}}><img className="userform-icon" src={"/images/alarm-3.svg"} alt="" /></a>
                        </li>
                        <li className="nav-item px-3 pt-2 w-100 py-4 progressbar-t">
                            <span>50% complete</span>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50"></div>
                            </div>
                        </li>
                       {data.map((item, index) => (
                            <li className="nav-item ps-3 pt-2 tab-sidebar" key={index}>
                                <a href="#" className="nav-link align-middle px-0 d-flex align-items-center">
                                <img className="userform-icon" src={item.srcs} alt="" />
                                <span className="ms-3 tab-content">{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>        
    )
}
