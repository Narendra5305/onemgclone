import { HomeContext } from "../context/homecontext";
import React, {useContext , useState} from "react";
import '../home/homeslide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";


const Home_slide_four = () =>{
    const navigate = useNavigate();
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

    const new_arr =  winterCareData.slice(index,index+7)

    return (
        <div className="four-main-home-slide">
            <div className="four-main-home-slide-one">   
                <p>Winter care essentials</p>
            </div>
            <div className="four-main-home-slide-two">
                <button className={index===0 ? 'four-main-btn-1':''}  onClick={()=>setIndex(index-1)}><FontAwesomeIcon icon={faChevronLeft} /></button> 
                <div className="four-main-home-slide-two-one">
                    {new_arr.map((ele)=>(
                        <div onClick={()=>navigate('/wintercare')} key={ele.id} className="four-card">
                            <img src={ele.image} alt="winter essential images" />
                            <h3>{`${ele.title.slice(0,30)}....`}</h3>
                            <p className="p1">Box of {ele.weight}</p>
                            <p className="p2">Delivery by <strong>{ele.delivery_time}</strong></p>
                            <p className="p3">MRP <span className="span-1" style={{"text-decoration":"line-through",'color':'black'}}>{ele.price}</span> <span className="span-2" style={{'color':'green'}}>{ele.discount_percentage}</span> </p>
                            <p className="p4">{ele.price}</p>
                        </div>
                    ))}
                </div>
                <button disabled={index===2} onClick={()=>setIndex(index+1)}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            
        </div>
    )
}

export default Home_slide_four ;

