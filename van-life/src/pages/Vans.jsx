import React from "react";
import Header from "../components/Header";
import Data from "../../../Data";
import VanItems from "../components/VanItem";
import "./vans.css"

export default function Vans(){
    const array=Data.map((data)=>{
        return(
        <div className="van-items-container col-3">
        <VanItems
         key={data.name}
         {...data}
         />
        </div>
    )})
    return(
        <div>
            <Header/>
            <div className="vans col-12">
             {array}
            </div>
           
        </div>
       
    )
} 