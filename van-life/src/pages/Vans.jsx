import React from "react";
import Header from "../components/Header";
import Data from "../../../Data";
import VanItems from "../components/VanItem";
import "./vans.css"

export default function Vans(){
    const array=Data.map((data)=>{
        return(
        <div className="van-items">
        <VanItems
         key={data.id}
         {...data}
         />
        </div>
    )})
    return(
        <div>
            <Header/>
            <h2 data-aos="fade-up" data-aos-duration="1000" className="vans-para col-10">Explore our van options</h2>
            <div data-aos="fade-up" data-aos-duration="1000" className="btn-filter col-10">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
            </div>
            <div className="vans row">
             {array}
            </div>
           
        </div>
       
    )
} 