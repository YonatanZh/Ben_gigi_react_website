import React from "react";
import '../App.css'
import './Contact.css'
import ContactForm from "../components/ContactForm";
import TextDisplay from "../utils/TextDisplay";


const Contact = () => {
    const name = "/contact";

    return (
        <div className='page-contents'>
            <TextDisplay name={name}/>
            <div>
                <div className="contact-head">
                    <span>צרו קשר</span>
                </div>
                <div className="contact-box">
                    <span className="explain">
                        תוכל לשלוח אלינו מייל באמצעות הטופס או להתקשר למספרי הטלפון בראש העמוד.
                    </span>
                    <ContactForm/>
                </div>
            </div>
        </div>

    )
}

export default Contact;