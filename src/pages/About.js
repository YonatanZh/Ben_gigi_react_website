import React from "react";
import '../App.css'
import TextDisplay from "../utils/TextDisplay";



const About = () => {
    const name = "/about";

    return (
        <div className='page-contents'>
            <TextDisplay name={name}/>
        </div>
    )
}

export default About;