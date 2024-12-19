import { HomeContext } from "../context/homecontext";
import React, {useContext , useState} from "react";
import '../home/homeslide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Home_slide_five = () =>{
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
        
        const [index , setIndex] = useState(0);
        
        const new_arr = featuredBrandsData.slice(index,index+7)
    
        return (
            <div className="five-main-home-slide">
                <div className="five-main-home-slide-one">   
                    <p>Featured brands See all</p>
                </div>
                <div className="five-main-home-slide-two">
                    <button className={index===0 ? 'five-main-btn-1':''}  onClick={()=>setIndex(index-1)}><FontAwesomeIcon icon={faChevronLeft} /></button> 
                    <div className="five-main-home-slide-two-one">
                        {new_arr.map((ele)=>(
                            <div key={ele.id} className="card">
                                <img src={ele.image_link} alt="" />
            
                            </div>
                        ))}
                    </div>
                    <button disabled={index===1} onClick={()=>setIndex(index+1)}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                
            </div>
    
    )
}

export default Home_slide_five;