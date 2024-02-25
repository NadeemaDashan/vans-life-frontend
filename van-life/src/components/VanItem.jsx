import React, { useEffect } from "react";
import "./vanItem.css"
import { Link } from "react-router-dom";
import AOS from "aos";


export default function VanItems(props) {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <Link id="link-van-description" to={`/vans/${props.id}`}>
                <img id="image-van" src={props.img} width="300px" alt="van image" />
                <div className="price">
                    <p id="van-name">{props.name}</p>
                    <p id="van-price">${props.price}/day</p>
                </div>
                <div className={props.type === "Simple" ? "simple" : props.type === "Luxury" ? "luxury" : "ragged"}>
                    <p id="para-type">{props.type}</p>
                </div>
            </Link>
        </div>
    )
}
