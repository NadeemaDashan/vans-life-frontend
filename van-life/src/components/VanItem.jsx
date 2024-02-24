import React from "react";
import "./vanItem.css"


export default function VanItems(props) {
    return (
            <div className="item">
                <img id="image-van" src={props.img} width="300px" alt="van image"/>
                <div className="price">
                    <p id="van-name">{props.name}</p>
                    <p id="van-price">${props.price}/day</p>
                </div>
                <div className={ props.type==="Simple"?"simple":props.type==="Luxury"?"luxury":"ragged"}>
                    <p id="para-type">{props.type}</p>
                    
                </div>
            </div>
    )
}
