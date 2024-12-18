import React from "react";
import '../header/header.css'
import HeaderOne from "./navheaderone";
import HeaderTwo from "./navheadertwo";  
import HeaderThree from "./navheaderthree";


const Header = () =>{
    return(
        <header className="header">
            <HeaderOne/>
            <HeaderTwo/>
            <HeaderThree/>
        </header>
    )
}


export default Header;