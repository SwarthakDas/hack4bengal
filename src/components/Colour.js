import React from "react";
import "../index.css"

export default function Colour(){
    return(
        <div className="flex bg-[#09090b] justify-around">
            <div className="bg-[#09090b] text-white text-[15px] p-[20px] hover:bg-[#27272a] cursor-pointer">FAQs</div>
            <div className="bg-[#09090b] text-white text-[15px] p-[20px] hover:bg-[#27272a] cursor-pointer">About Us</div>
            <div className="bg-[#09090b] text-white text-[15px] p-[20px] hover:bg-[#27272a] cursor-pointer">Contact Us</div>
            <div className="bg-[#09090b] text-white text-[15px] p-[20px] hover:bg-[#27272a] cursor-pointer">Back to Top</div>
        </div>
    )
}