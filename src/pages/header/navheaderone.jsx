import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";


const HeaderOne = ()=>{
    const navigate = useNavigate();
    return(
        <div className="navbar header-1">
                <div className="nav-left">
                    <a onClick={()=>navigate('/')}>
                        <img src="https://www.1mg.com/images/tata_1mg_logo.svg" className="logo-1" alt="logo" />
                    </a>
                    <ul className="nav-link-list" style={{listStyle:'none' , cursor:'pointer'}}>
                        <li style={{color: 'rgb(255,111,97)'}} onClick={()=>navigate('/')} >MEDICINES</li>
                        <li onClick={()=>navigate('/labtest')}>LAB TESTS</li>
                        <li onClick={()=>navigate('/consult')}>CONSULT DOCTORS</li>
                        <li>CANCER CARE</li>
                        <li>PARTNERSHIP</li>
                        <li>CARE PLAN</li>
                    </ul>
                </div>


                <div className="nav-right">
                    <div className="nav-right-nest">

                        <div className="nav-right-nest-1">
                            <div className="nav-login">
                                <a href="">Login</a>
                                <span className="nav-login-seperator">|</span>
                                <a href="">Sign Up</a>
                            </div>
                        </div>

                        <div className="nav-right-nest-2">
                            <div className="nav-offer">
                                <a href="">Offers</a>
                            </div>
                        </div>

                        <div className="nav-right-nest-3">
                            <div className="nav-cart">
                                <a href=""><FontAwesomeIcon icon={faCartShopping} /></a>
                            </div>
                        </div>


                        <div className="nav-right-nest-4">
                            <div className="nav-help">
                                <a onClick={()=>navigate('/contact')}>Need Help?</a>
                            </div>
                        </div>

                    </div>
                </div>
                
        </div>
    )
}

export default HeaderOne;