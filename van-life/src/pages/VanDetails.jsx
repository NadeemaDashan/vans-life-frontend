import React from "react";
import Header from "../components/Header";
import "./vanDetails.css"

export default function VanDetails() {
    return (
        <div className="van-detail-container">
            <Header />
            <div className="filter col-xl-9">
                <h1 id="fliter-heading">Explore our van options</h1>
            </div>
        </div>
    )
}