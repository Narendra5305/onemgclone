import React ,{Children, createContext, useEffect, useState} from "react";

import homeData from '../home/contentforhome'


export const HomeContext = createContext();


export const HomeContextProvider = ({children}) =>{

    
    const  [healthConcernsData ,setHealthConcernsData ] = useState([]);
    const  [winterCareData ,setWinterCareData ] = useState([]);
    const  [immunitySupplementData ,setImmunitySupplementData ] = useState([]);
    const  [featuredBrandsData ,setFeaturedBrandsData ] = useState([]);
    const  [healthCheckupsData ,setHealthCheckupsData ] = useState([]);

    

    useEffect(() => {
      setHealthConcernsData([...homeData.healthConcerns])
      setWinterCareData([...homeData.winter_care])
      setImmunitySupplementData([...homeData.immunity_supplement])
      setFeaturedBrandsData([...homeData.featured_brands])
      setHealthCheckupsData([...homeData.health_checkups])
    }, [])
    
    
    return(
        <HomeContext.Provider value={{healthConcernsData,
            setHealthConcernsData,
            winterCareData,
            setWinterCareData,
            immunitySupplementData,
            setImmunitySupplementData,
            featuredBrandsData,
            setFeaturedBrandsData,
            healthCheckupsData,
            setHealthCheckupsData}}>

            {children}
            
        </HomeContext.Provider>
    )
}

