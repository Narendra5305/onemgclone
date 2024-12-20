import React , {useState , useContext} from "react";
import { CartContext } from "../cartcontext/cartcontext";
import HeaderOne from "../header/navheaderone";
import Footer from "../footer/footer";
import CartComponent from "./cartcomponent";


const Cart =  () =>{
    const  {cart , UpdateQuantity , RemoveFromCart} = useContext(CartContext);
    return(
        <>
            <HeaderOne/>
            <CartComponent/>
        </>
    )
}


export default Cart ;