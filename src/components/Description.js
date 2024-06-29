import React from "react";
import "../index.css";

export default function Description() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around p-10">
            <div className="px-8 md:px-0 md:w-1/2 md:ml-10 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold text-gray-700">Fast & Secure</h1>
                <p className="text-lg font-medium pt-2">One stop solution.</p>
                <p className="text-base pb-4">One stop solution to all your problems/complaints.</p>
                <hr className="border-gray-300 my-4"></hr>
                <p className="text-lg font-medium pt-2">One app for all things money.</p>
                <p className="text-base pb-4">Pay bills, recharge, send money, buy gold, invest, and shop at your favorite stores.</p>
                <hr className="border-gray-300 my-4"></hr>
                <p className="text-lg font-medium pt-2">One app for all things money.</p>
                <p className="text-base pb-4">Pay bills, recharge, send money, buy gold, invest, and shop at your favorite stores.</p>
                <hr className="border-gray-300 my-4"></hr>
            </div>
            <div className="flex flex-col items-center md:w-1/2 md:m-6 md:mx-3">
                <hr className="border-gray-300 my-4"></hr>
                <p className="text-gray-700 font-bold text-2xl my-4">Fast Response & Instant Action</p>
                <p className="text-lg mb-4">Haven't signed up yet? Press the button below.</p>
                <button className="bg-gray-800 text-white rounded-lg px-8 py-3 text-lg my-5 hover:bg-[#27272a]">Sign up</button>
            </div>
        </div>
    );
}
