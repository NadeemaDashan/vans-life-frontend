import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import Image from "../assets/logo.png"
import "./header.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { dasherize } from "i/lib/methods";

export default function Header() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="header-container">
                <div data-aos="fade-up" data-aos-duration="1000"className="logo col-md-10 col-7 ">
                    <h1 id="logo-heading">#VANLIFE</h1>
                </div>
                <div  data-aos="fade-up" data-aos-duration="1000" className="links">
                    <Link className="links" to="/">home</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/vans">Vans</Link>
                </div>
        </div>
    )
}