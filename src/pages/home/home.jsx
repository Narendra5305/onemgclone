import React from "react";
import images from "../home/contentforhome"
import Header from "../header/Header";
import Footer from "../footer/footer";
import Home_slide_one from "./homeslide1";
import Home_slide_two from "./homeslide2";
import Home_slide_three from "./homeslide3";
import Home_slide_four from "./homeslide4";
import Home_slide_five from "./homeslide5";
import Home_slide_six from "./homeslide6";
import Home_slide_seven from "./homeslide7";
import Home_slide_eight from "./homeslide8";

import { HomeContext } from "../context/homecontext";
import { HomeContextProvider } from "../context/homecontext";



const Home = () =>{
    return(
        <HomeContextProvider>
            <Header/>
                <Home_slide_one/>

                {/* <Home_slide_two/>
                <Home_slide_three/>
                <Home_slide_four/>
                <Home_slide_five/>
                <Home_slide_six/>
                <Home_slide_seven/>
                <Home_slide_eight/> */}
            <Footer/>
        </HomeContextProvider>
    )
}

export default Home;