import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Description from "./components/Description";
import Colour from "./components/Colour";
import "./index.css"

export default function App(){
    return(
        <section>
            <Header/>
            <Main/>
            <Description/>
            <Colour/>
        </section>        
    )
}