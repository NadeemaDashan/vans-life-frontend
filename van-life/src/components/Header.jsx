import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import Image from "../assets/logo.png"
import "./header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="header-container">
                <div data-aos="fade-up" data-aos-duration="1000"className="logo col-6">
                    <img id="logo" src={Image} alt="logo of van life" />
                </div>
                <div  data-aos="fade-up" data-aos-duration="1000" className="links col-6">
                    <Link className="links" to="/">home</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/vans">Vans</Link>
                </div>
        </div>
    )
}