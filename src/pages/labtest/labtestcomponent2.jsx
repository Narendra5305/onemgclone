
import React,{useContext} from "react";
import { HomeContext } from "../context/homecontext";
import { CartContext } from "../cartcontext/cartcontext";


const LabTestComponentTwo =() =>{
    const {healthCheckupsData} = useContext(HomeContext);
    const {cart ,AddToCart} = useContext(CartContext);


   

    const handleAddTocart = (e , ele)=>{
        
        e.preventDefault();
        AddToCart(ele)
    }

    
    return(
        <div className="lab-compo-two">
            <div className="lab-compo-two-1">
                <h3>Popular health checkups</h3>
                    <div className="lab-compo-two-1-cards">
                        {healthCheckupsData.map((ele)=>(
                            <div key={ele.id} className="lab-compo-two-1-cards L2-cards">
                                <h6>{ele.title}</h6>
                                <p className="p1">Test For {ele.test_is_for}</p>
                                <p className="p2">You Need To Prepare {ele.you_need_to_provide}</p>
                                <strong>+More</strong>
                                <p className="p4">Price : {ele.price}</p>
                                <p className="p5">Get Report in <strong>24 hours</strong></p>
                                <button onClick={(e)=>handleAddTocart(e , ele)} className="l2-btn">Add To Cart</button>
                                <div className="safe">
                                    <img src="https://onemg.gumlet.io/safe_bjisiz.svg" alt="" /> <span>Safe</span>
                                </div>
                            </div>
                        ))}
                    </div>

            </div>
        </div>
    )
}

export default LabTestComponentTwo;