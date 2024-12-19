import React, {useContext} from "react";
import { HomeContext } from "../context/homecontext";
import '../home/homeslide.css'
import homeData from '../home/contentforhome'



const Home_slide_one = () =>{
    
    return (
        <div className="one-main-home-slide">
            <div className="main-home-slide-1">
                <div className="main-home-slide-1-slide">
                    <img src={homeData.img_f_m_1} alt="" />
                </div>
                <div className="main-home-slide-1-fix">
                    <img src={homeData.img_f_m_2} alt="" />
                </div>
            </div>
            <div className="main-home-slide-2">
                <div className="main-home-slide-2-text">
                    <p>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</p>
                </div>
            </div>
        </div>
    )
}


export default Home_slide_one ;
