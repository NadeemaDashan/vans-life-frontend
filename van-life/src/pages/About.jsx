import React from "react";
import Header from "../components/Header";
import Image from "../assets/image.jpg"
import "./about.css"

export default function About() {
    return (
        <div className="continer-about">
            <Header />
            <div className="row">
                <div className="about-img col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5  col-xxl-5 ">
                    <img id="about-img" src={Image} />
                </div>
                <div className="about-para col-xs-11 col-sm-11 col-md-11 col-lg-5 col-xl-5 col-xxl-4">
                    <h1 className="para-heading-about">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p id="para-about">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)

                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
            </div>
            <div className="explore-vans col-10">
                <h2>Your destination is waiting.<br/>Your van is ready.</h2>
                <button>Explore Our Vans</button>
            </div>
        </div>

    )
}