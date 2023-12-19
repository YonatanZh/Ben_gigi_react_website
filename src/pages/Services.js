import React from "react";
import '../App.css'
import TextDisplay from "../utils/TextDisplay";


const Services = () => {
    const name = "/services";

    return (
        <div className='page-contents'>
            <TextDisplay name={name}/>
        </div>
    )
}

export default Services;