
import consultBanner1 from "@/assets/consultBanner1.png";
import "./consult.css";
import ConsultPageComponent from "./consultcomponent";
import HeaderOne from "../header/navheaderone";
import Footer from "../footer/footer";


function ConsultPage(){
    return(
       <>
         <HeaderOne/>
         <ConsultPageComponent/>
         <Footer/>
       </>
    )
}



export default ConsultPage;

