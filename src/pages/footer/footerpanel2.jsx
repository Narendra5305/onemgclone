import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';


function MainPanelOne(){

    return(
        <div className="f-panel-main-2-part-1 f-main-2-part">

                <div className="f-panel-main-2-part-1-1">
                    <ul  className="f-panel-main-2-part-1-nested-list">
                        <li>
                            <ul className="f-panel-main-2-part-1-1-list">
                                <li>Know Us</li>
                                <li>Contact Us</li>
                                <li>Contact Us</li>
                                <li>Press Coverage</li>
                                <li>Careers</li>
                                <li>Business Partnership</li>
                                <li>Become a Health Partner</li>
                                <li>Corporate Governance</li>
                            </ul>
                        </li>


                        <li>
                            <ul className="f-panel-main-2-part-1-1-list">
                                <li>Our Policies</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Editorial Policy</li>
                                <li>Return Policy</li>
                                <li>IP Policy</li>
                                <li>Grievance Redressal Policy</li>
                                <li>Fake Jobs and Fraud Disclaimer</li>
                            </ul>
                        </li>

                        <li>
                            <ul className="f-panel-main-2-part-1-1-list">
                                <li>Our Services</li>
                                <li>Order Medicines</li>
                                <li>Book Lab Tests</li>
                                <li>Consult a Doctor</li>
                                <li>Ayurveda Articles</li>
                                <li>Hindi Articles</li>
                                <li>Care Plan</li>
                            </ul>
                        </li>

                        <li>
                            <ul className="f-panel-main-2-part-1-1-list">
                                <li>Connect</li>
                                <li>Social Links</li>
                                <li></li>
                                <li>Want daily dose of health?</li>
                                <li><button>SIGN UP</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="f-panel-main-2-part-1-2">
                    <ul className="f-panel-main-2-part-1-2-list">
                        <li>Download App</li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="g-play-image" /></li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" /></li>
                    </ul>
                </div>
            </div>
    )
}

function MainPanelTwo(){
    return(
        <div className="f-panel-main-2-part-2 f-main-2-part">

            <div className="f-panel-main-2-part-2-1 fp-main-common">
                <div className="f-panel-main-2-part-2-1-1 fpcommon-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29ZCKIY1kCiSRK8G2qEAlaFc9myz5Z7YSZCvhJvgobEdCaj1Q" alt="reliable-img" />
                </div>
                <div className="f-panel-main-2-part-2-1-2 fpcommon-2">
                    <p>Reliable</p>
                    <p>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>
                </div>
            </div>


            <div className="f-panel-main-2-part-2-2 fp-main-common" >
                <div className="f-panel-main-2-part-2-2-1 fpcommon-1">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQx_N3ASF16Iv0MCIaa6h9ESwd3D2k6euKm8B67eqZhvc-RevYV" alt="Secure-img" />
                </div>
                <div className="f-panel-main-2-part-2-2-2 fpcommon-2">
                    <p>Secure</p>
                    <p>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>
                </div>
            </div>


            <div className="f-panel-main-2-part-2-3 fp-main-common">
                <div className="f-panel-main-2-part-2-3-1 fpcommon-1">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXa1EJH_vj8g3umGS548yI9ReUZipczJi-dO7ak4GGn2Zk1wlu" alt="Affordable-img" />
                </div>
                <div className="f-panel-main-2-part-2-3-2 fpcommon-2">
                    <p>Affordable</p>
                    <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
                </div>
            </div>
        </div>
    )
}

function MainPanelThree(){
    return(
        <div className="f-panel-main-2-part-3 f-main-2-part">
            <div className="f-panel-main-2-part-3-1">
                <div className="f-panel-main-2-part-3-1-1 pmain-3-common">
                    <img src="https://static.legitscript.com/seals/729605.png" alt="certification image" />
                </div>
                <div className="f-panel-main-2-part-3-1-2 pmain-3-common">
                    <img src="https://onemg.gumlet.io/iso_certification_03_07_2024.jpg" alt="certification image" />
                </div>
            </div>
            <div className="f-panel-main-2-part-3-2">
                <p>India's only LegitScript and ISO/ IEC 27001:2022 certified online healthcare platform</p>
            </div>
        </div>
    )
}



function MainTwoPart(){
    return(
        
        <div className="f-panel-main-2-parts">
            <MainPanelOne/>
            <hr className="f-panel-main-2-hr-1-common"/>
            <MainPanelTwo/>
            <hr className="f-panel-main-2-hr-common"/>
            <MainPanelThree/>   
        </div>
    )
}



function MainPanelFour(){
    return(
        <div className="f-panel-main-2-part-4 f-main-4-part">
            <div className="f-panel-main-2-part-4-1">
                <p>Know more about Tata 1mg</p>
            </div>
            <div className="f-panel-main-2-part-4-2">
                <p><FontAwesomeIcon icon={faChevronDown} /></p>
            </div>
        </div>
    )
}


function MainPanelFive(){
    return(
        <div className="f-panel-main-2-part-5 f-main-5-part">
            <div className="f-panel-main-2-part-5-1">
                <div>
                    <p>© 2024 Tata 1mg. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule X and habit forming drugs.</p>
                </div>
            </div>
            <div className="f-panel-main-2-part-5-2">
                
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNJmwpQct7ovW89uGEXWhaMOUrJ07M5a1uwnj0nF6XHFk3PFOZ" alt="payment photo" />
            </div>
        </div>
    )
}




const FooterPanelTwo = () =>{
    return(
        <div className="main-foot-panel-2">
            <div className="f-panel-main-2">
                <MainTwoPart/>
            </div>
            <MainPanelFour/>
            <MainPanelFive/>
        </div>
        
    )
}

export default FooterPanelTwo;