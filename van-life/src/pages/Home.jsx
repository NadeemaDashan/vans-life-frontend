import React, { useEffect } from "react";
import Header from "../components/Header";
import "./home.css"
import Road from "../assets/hi.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function Home(){
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <div>
            <Header></Header>
            <div className="container-home  col-12">
                <video id="img-main" src={Road} muted loop autoPlay/>
                <div data-aos="fade-up" data-aos-duration="2000"className="text-on-img">
                    <p id="para-on-image">You got the travel plans, we got the travel vans.</p>
                    <Link to="/vans"><button id="btn-find-van">Find Your Van</button></Link>
                </div>
            </div>
            
        </div>
     
    )
}