import { HomeContext } from "../context/homecontext";
import React, {useContext} from "react";
import '../home/homeslide.css'
import homeData from '../home/contentforhome'


const Home_slide_two = () =>{
    const {healthConcernsData,
        setHealthConcernsData,
        winterCareData,
        setWinterCareData,
        immunitySupplementData,
        setImmunitySupplementData,
        featuredBrandsData,
        setFeaturedBrandsData,
        healthCheckupsData,
        setHealthCheckupsData} = useContext(HomeContext);
    
        

    return (
        <div className="two-main-home-slide">
            <div className="two-main-home-slide-1">
                <img src={homeData.img_f_m_3} alt="" />
            </div>
        </div>
    )
}
export default Home_slide_two ;