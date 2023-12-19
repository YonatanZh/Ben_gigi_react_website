import React from "react";
import descriptors from "../constants/descriptors";

const TextDisplay = ({name}) => {
const rawText = descriptors.find(descriptor => descriptor.url === name).description;
    const text = rawText.split('\n').map((item, i) => {
        if (item[0] === '-') {
            return <li className="list-items" key={i}>{item.slice(1, item.length)}<br></br></li>
        }
        return <p key={i}>{item}<br></br></p>
    });
    return (
        <div className='text'>
            {text}
        </div>
    )
}

export default TextDisplay;