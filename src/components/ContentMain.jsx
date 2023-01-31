import React from "react";

export default function ContentMain(item){

    const contentVar = (
        <div className="carbox">
            {item.user.openSpots === 0 && <div className="badge"><p className="occasional">SOLD OUT</p></div>}
            <img src={item.user.coverImg} alt="img-cont" className="img-card"/>
            <div className="img-con">
                <div className="para-keep">
                        <div><img src="images/star.png" className="star-img" alt="star-img"/></div>
                        <p>{item.user.stats.rating}</p>
                        <p className="shadow-text">({item.user.stats.reviewCount}).{item.user.country}</p>
                    </div>
                <p className="con-brief">{item.user.title}</p>
                <p className="con-brieftwo"><b>From ${item.user.price}</b>/ person</p>
            </div>
        </div>
    )

    return contentVar;
}