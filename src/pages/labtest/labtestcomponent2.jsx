
import React,{useContext} from "react";
import { HomeContext } from "../context/homecontext";


const LabTestComponentTwo =() =>{
     const {healthCheckupsData} = useContext(HomeContext);

    
    return(
        <div className="lab-compo-two">
            <div className="lab-compo-two-1">
                <h3>Popular health checkups</h3>
                    <div className="lab-compo-two-1-cards">
                        {healthCheckupsData.map((ele)=>(
                            <div key={ele.id} className="lab-compo-two-1-cards L2-cards">
                                <h6>{ele.title}</h6>
                            </div>
                        ))}
                    </div>

            </div>
        </div>
    )
}

export default LabTestComponentTwo;