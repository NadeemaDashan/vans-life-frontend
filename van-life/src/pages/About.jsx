import React, { useEffect } from "react";
import Header from "../components/Header";
import Image from "../assets/image.jpg"
import "./about.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
export default function About() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className="continer-about">
            <Header />
            <div className="row">
                <div data-aos="fade-left" data-aos-duration="1000" className="about-img col-xs-13 col-sm-13 col-md-13 col-lg-5 col-xl-5  col-xxl-5 ">
                    <img id="about-img" src={Image} />
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="about-para col-xs-11 col-sm-11 col-md-11 col-lg-5 col-xl-5 col-xxl-5">
                    <h1 className="para-heading-about">Don't squeeze in a sedan when you could relax in a van.</h1>
                    <p id="para-about">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)

                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="explore-vans col-10 ol-xs-12">
                <h2 id="heading">Your destination is waiting.<br />Your van is ready.</h2>
                <div className=" col-xxs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md-8">
                    <Link to="/vans">
                        <button id="btn-explore-van">Explore Our Vans</button>
                    </Link>
                </div>

            </div>
        </div>

    )
}