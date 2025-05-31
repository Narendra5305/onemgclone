import React,{useContext , useState} from "react";
import { HomeContext } from "../context/homecontext";
import '../Wintercare/wintercare.css'
import { CartContext } from "../cartcontext/cartcontext";

const WinterCareComponent = () =>{
    const {winterCareData} = useContext(HomeContext);

 


    const {cart ,AddToCart} = useContext(CartContext);
    
    const handleAddtocart =(e,el)   =>{
        e.preventDefault()
        AddToCart(el)
    }      

    var newWinterdata =[...winterCareData]


    

    return(
        <div className="wintercare-main">
            <div className="wintercare-cont">
                {/* <div className="wintercare-cont-features">
                    <select onChange={(e)=>handleSort(e)} id="">
                        <option value="">Sort By Price</option>
                        <option value="low">Low To High</option>
                        <option value="high">High To Low</option>
                    </select>
                </div> */}

                <div className="wintercare-cont-content">
                    {newWinterdata.map((el)=>(
                        <div className="winterdata-Card">
                            <img src={el.image} alt="winterdata-image" />
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                            <p><strong>Price: ₹{el.price}</strong></p>
                            <button onClick={(e)=>handleAddtocart(e,el)}>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WinterCareComponent;