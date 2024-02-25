import React from "react";
import Header from "../components/Header";
import "./vanDetails.css"
import { useParams } from "react-router-dom"
import Data from "../../../Data";
import { Link } from "react-router-dom";


export default function VanDetails() {
    const { id } = useParams();

    const van = Data.find((data) => data.id == id);

    return (
        <div className="van-details">
            <Header />
            <div className="back-container">
                <Link to="/vans">
                    <p id="back">Back to all Vans</p>
                </Link>
            </div>
            <div className="van-details-container row">
                <div className="van-image-container m-3 col-lg-5">
                    <img className="img-fluid" src={`../../public/${van.img}`} alt={"Image of the van selected"} />
                </div>
                <div className="van-description-container m-3  col-lg-5">
                    <div className={van.type === "Simple" ? "type-simple" : van.type === "Luxury" ? "type-luxury" : "type-rugged"}>
                        <p id="description-para-type">{van.type}</p>
                    </div>
                    <h1 id="van-desription-heading">{van.name}</h1>
                    <p id="price-description">${van.price}/day</p>
                    <p id="van-description-paragraph">{van.description}</p>
                    <button className="btn-rent-van">Rent this van</button>
                </div>
            </div>
        </div>
    )
}