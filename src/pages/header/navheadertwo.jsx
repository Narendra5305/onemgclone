import React from "react";

const HeaderTwo=()=>{
    return(
        <div className="header-2">
                <div className="header-2-nest">
                    <div className="header-2-1">
                        <div className="header2-1-1">
                            <input type="text" placeholder='Gurgaon' />
                        </div>
                        <div className="header2-1-2">
                            <input type="text" placeholder='Search for medicines and health products'/>
                        </div>
                    </div>


                    <div className="header-2-2">
                        <div className="header-2-2-1">
                            <div className="header-2-2-1-1">
                                <p>QUICK BUY! Get 15% off on medicines*</p>
                            </div>
                            <div className="header-2-2-1-2">
                                <a href="">Quick order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderTwo;