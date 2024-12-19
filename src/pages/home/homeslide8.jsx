import React ,{useContext}from "react";
import { HomeContext } from "../context/homecontext";

const Home_slide_eight = () =>{
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
       <>

        <h1>slide six</h1>
       </>
    )
}

export default Home_slide_eight ;