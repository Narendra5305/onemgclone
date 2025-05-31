import React, { createContext , useState } from "react";


export const CartContext = createContext();


export const CartContextProvider = ({children}) =>{
    const [cart , setCart] = useState([]);

    
    const AddToCart = (product)=>{
        setCart((prev)=>{
            const exit = prev.find((item)=> item.id===product.id)
            if (exit){
                return prev.map((item)=>{
                    item.id===product.id ? {...item , quantity:item.quantity+1} : item;
                })
            }
            return [...prev , {...product , quantity:1}]
        })
    }

    const UpdateQuantity = (id, delta) => {
        setCart((prev) => {
            return prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter((item) => item.quantity > 0); // Optional: remove if quantity drops to 0
            });
    };



    const RemoveFromCart =(id ) =>{
        setCart((prev)=>{
            return prev.filter((item) =>
                item.id!==id )
        })
    }



    return(
        <CartContext.Provider value={{cart ,AddToCart ,setCart , UpdateQuantity , RemoveFromCart}}>
            {children}
        </CartContext.Provider>
    )
}