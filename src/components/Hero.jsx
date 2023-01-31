import React from "react";


export default function Hero(){

    const heroVar = (
        <div className="hero-div">
            <div className="heroimg">
                <img src="images/newgal.png" alt="hero-img"/>
            </div>
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-brief">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )

    return heroVar;
}
