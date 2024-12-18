import React from "react";


const FooterPanelOne = ()=>{
    return(
        <div className="f-panel-main-1">
            <div className="f-panel-1">

                <div className="f-panel-part-1">
                    <p>INDIA’S LARGEST HEALTHCARE PLATFORM</p>
                </div>

                <div className="f-panel-part-2">

                    <div className="f-panel-part-2-1">
                        <p className="f-p-bold">260m+</p>
                        <p className="f-p-norm">Visitors</p>
                    </div>

                    <div className="f-panel-part-2-1">
                        <p className="f-p-bold">31m+</p>
                        <p className="f-p-norm">Orders Delivered</p>
                    </div>

                    <div className="f-panel-part-2-1">
                        <p className="f-p-bold">1800+</p>
                        <p className="f-p-norm">Cities</p>
                    </div>
                </div>
                
            </div>
            <hr className="f-panel-hr-1" />

            <div className="f-panel-1-2">
                <div className="f-panel-1-2-1">
                    <p>Get the link to download App</p>
                </div>
                <div className="f-panel-1-2-2">
                    <input type="text" placeholder="Enter Phone Number"/>
                    <span><button className="f-panel-1-2-2-btn">Send Link</button></span>
                </div>
            </div>
        
        </div>
    )
}

export default FooterPanelOne;