import { HomeContext } from "../context/homecontext";
import React, {useContext , useState} from "react";
import '../home/homeslide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Home_slide_three= () =>{
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
    
    const new_arr = healthConcernsData.slice(index,index+7)

    return (
        <div className="three-main-home-slide">
            <div className="three-main-home-slide-one">   
                <p>Shop by health concerns</p>
            </div>
            <div className="three-main-home-slide-two">
                <button className={index===0 ? 'three-main-btn-1':''}  onClick={()=>setIndex(index-1)}><FontAwesomeIcon icon={faChevronLeft} /></button> 
                <div className="three-main-home-slide-two-one">
                    {new_arr.map((ele)=>(
                        <div key={ele.id} className="card">
                            <img src={ele.image} alt="" />
                            <p>{ele.title}</p>
                        </div>
                    ))}
                </div>
                <button disabled={index===2} onClick={()=>setIndex(index+1)}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            
        </div>

    )
}

export default Home_slide_three ;