import React from "react";
import '../App.css'
import './Home.css'
import TextDisplay from "../utils/TextDisplay";
import office from '../assets/office.jpg'


const Home = () => {
    const name = "/";

    return (
        <div className='page-contents'>
            <div className='home-contents'>
                <TextDisplay name={name}/>
                <img src={office} alt="office" className='office-image'/>
            </div>
        </div>
    )
}

export default Home;