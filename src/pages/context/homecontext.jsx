import React ,{Children, createContext, useEffect, useState} from "react";

import homeData from '../home/contentforhome'


export const HomeContext = createContext();


export const HomeContextProvider = ({children}) =>{

    console.log(homeData.img_f_m_1)

    const  [healthConcernsData ,setHealthConcernsData ] = useState([]);
    const  [winterCareData ,setWinterCareData ] = useState([]);
    const  [immunitySupplementData ,setImmunitySupplementData ] = useState([]);
    const  [featuredBrandsData ,setFeaturedBrandsData ] = useState([]);
    const  [healthCheckupsData ,setHealthCheckupsData ] = useState([]);

    useEffect(() => {
      setHealthConcernsData()
      setWinterCareData()
      setImmunitySupplementData()
      setFeaturedBrandsData()
      setHealthCheckupsData()
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