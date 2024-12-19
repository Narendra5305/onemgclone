import React from "react";
import '../labtest/labtest.css'
import HeaderOne from "../header/navheaderone";
import HeaderTwo from "../header/navheadertwo";
import LabTestComponentOne from "./labtestcomponent1";
import LabTestComponentTwo from "./labtestcomponent2";
import { HomeContextProvider } from "../context/homecontext";

const LabTest =() =>{
    return(
        <HomeContextProvider>

            <HeaderOne/>
            <HeaderTwo/>

            <LabTestComponentOne/>

            <LabTestComponentTwo/>
            
        </HomeContextProvider>
    )
}

export default LabTest;