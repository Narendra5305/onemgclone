import React from "react";
import '../footer/footer.css'
import FooterPanelOne from "./footerpanel1";
import FooterPanelTwo from "./footerpanel2";

const Footer = ()=>{
    return(
        <footer className="footer">
            <FooterPanelOne/>
            <FooterPanelTwo/>
        </footer>
    )
}

export default Footer;