import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import WinterCareComponent from "./wintercarecomponent";
import { HomeContextProvider } from "../context/homecontext";
import { CartContext } from "../cartcontext/cartcontext";



const Wintercare =()=>{
    return(
        <HomeContextProvider>
            <Header/>
            <WinterCareComponent/>
            <Footer/>
        </HomeContextProvider>
    )
}


export default Wintercare;