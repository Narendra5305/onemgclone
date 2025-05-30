import React , {useState , useContext} from "react";
import '../cart/cart.css'
import { CartContext } from "../cartcontext/cartcontext";
import { useNavigate } from "react-router";


const CartComponent = () =>{
    const  {cart , UpdateQuantity , RemoveFromCart} = useContext(CartContext);
    const navigate = useNavigate();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(totalPrice);
    
    return(
        <>
            { cart.length===0 ? 
            
            <div className="emptyCart-main">
                <div className="emptyCart">
                    <div className="emptyCart-element-1">
                        <img src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/illustrations/empty-cart.svg" alt="empty cart svg" />
                    </div>
                    <div className="emptyCart-element-2">
                        <h2>Your cart is empty</h2>
                        <p>We have all the medicines and healthcare products that you need.</p>
                        <button onClick={()=>navigate('/')} className="find-medicine">Find Medicines</button>
                    </div>
                </div>
            </div>
            :


            <div className="fullCart-main">
                <div className="fullCart">
                    <div className="fullCart-1">
                        <h3>{cart.length} items is added</h3>
                        <div className="fullCart-1-item">

                            {cart.map((el)=>(

                                <div key={el.id} className="cart-card">

                                    <div  className="cart-card-1"><img className="cart-card-image" src={el?.image || 'https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/laboratory-test-icon.png'} alt="" /></div>

                                    <div className="cart-card-2">
                                        <h4>{el.title.slice(0,40)}....</h4>
                                        <p style={{'font-size':'10px' ,'margin-top':'-10px','margin-bottom':'-0px'}}>{el.description || ''}</p>
                                        <a href="">remove</a>
                                    </div>

                                    <div className="cart-card-3">
                                        <div className="cart-card-3-1"><h2>{el.price}</h2></div>
                                        <div className="cart-card-3-2">
                                            <button>-</button>
                                            
                                            <span>{el.quantity}</span>

                                            <span> 
                                                <button >+</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="fullCart-hr"><hr /></div>
                    
                    <div className="fullCart-2">
                        <div className="fullCcart-2-1">
                            <div className="fullCcart-2-1-1">
                                <img src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" alt="" />
                                <h3>You can save extra ₹295 on this order</h3>
                                <h6>Become a careplan member</h6>
                                <p>3 months membership for only ₹165 ₹549 70% off</p>

                                    <button >Know More</button> 
                                <span>
                                    <button> Add Membership</button>
                                </span>
                            </div>
                            
                            <div className="fullCcart-2-1-2">
                                <div><img src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/svgs/icons/coupon_18px_primary.svg" alt="" /></div>
                                <div><p>Available coupons</p></div>
                            </div>
                            <hr />


                            <div className="fullCcart-2-1-3">
                                <h2>Bill Summary</h2>

                                <div className="fullCcart-2-1-3-1">
                                    <p>Item total (MRP)</p>
                                    <p>Platform fee</p>
                                    <p>Total discount</p>
                                    <p>Shipping fee</p>
                                </div>

                                <div className="fullCcart-2-1-3-2">
                                    <p>{totalPrice}</p>
                                    <p>-0</p>
                                    <p>-0</p>
                                    <p>As per delivery address</p>
                                </div>
                                <hr />

                                <div className="fullCcart-2-1-3-3">
                                    <div className="fullCcart-2-1-3-3-1">
                                        <h2>Total Price</h2>
                                    </div>
                                    <div className="fullCcart-2-1-3-3-2">
                                        <h2>{totalPrice}</h2>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                           
                        </div>
                    </div>


                </div>
            </div>
            
            }
        </>
    )
}

export default CartComponent;