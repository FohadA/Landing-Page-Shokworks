import React from "react";
import '../style-sheets/partners-clients.css';

function Partners(){
    return(
        <>
            <h2 className="center partners-title">Our Partners & Clients</h2>

            <div className="partners-container"> 

                <div className="left">

                    <div className="field top-left">
                        <img src="./img/big-immersity-logo.png" alt="Big Inmmersity" />
                        <a href="/">Learn More</a>
                    </div>

                    <div className="field">
                    <img src="./img/logo-splash.png" alt="Splash Logo" />
                    <a href="/">Learn More</a>
                    </div>
                </div>

                <div className="mid">

                    <div className="field">
                        <img src="./img/ipass-logo.png" alt="Ipass Logo" />
                        <a href="/">Learn More</a>
                    </div>

                    <div className="field">
                        <img src="./img/mobile-logo.png" alt="Mobile Logo" />
                        <a href="/">Learn More</a>
                    </div>
                </div>

                <div className="right">
                    <div className="field top-right">
                        <img src="./img/logo-rojo.png" alt="Logo Rojo" />
                        <a href="/">Learn More</a>
                    </div>

                    <div className="field">
                        <img src="./img/times-logo.png" alt="Times Logo" />
                        <a href="/">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partners;