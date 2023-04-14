import React from "react";
import '../style-sheets/body.css';

function Body() {
    return(
        <section className="body">
            <div className="container center">
                <img src='/img/community1.png' alt="Community" />
                <h1>A Brand New Way<br/> To See The World</h1>
            </div>

            <div className="center">
                <a className="blue-buttom" href="/">Our Works</a>
                <a className="white-buttom" href="/">Know More</a>
            </div>

            <div className="grid">
                <div className="aboutWork-info">
                    <h2>The Process<br/> About Our Work</h2>
                    <p>Alejandro Laplana leads and adaptable end-to-end development team<br/> consisting of a large portion of captable enterprise mixed reality solutions.</p>
                    <a className="white-buttom" href="/">Know More</a>
                </div>
                
                <div className="aboutWork-img">
                    <img src='/img/build.png' alt="Build" />
                </div>
            </div>

            <div className="grid help-mobile">
                <div className="help-img">
                    <img src='/img/help.png' alt="Build" />
                </div>

                <div className="help-info">
                    <h2>We are here to<br/> <span>always help</span> you</h2>
                    <p>Shokworks team provide solutions and guidance to every<br/> project, taking the project vision to high level.</p>
                </div>
            </div>
        </section>
        
    )
}

export default Body;