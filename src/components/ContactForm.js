import React, {useState} from "react";
import './ContactForm.css'

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Destructure values from formData
        const {name, phone, message} = formValues;

        // Construct email content
        const subject = `New Contact Form Submission from ${name}`;
        const body = `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;

        // Create mailto URL
        const mailtoUrl = `mailto:moshe@bengigi-cpa.co.il?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open user's default email client
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="contact-form-container">
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input className="input" type="text" name="name" placeholder="שם מלא" value={formValues.name}
                           onChange={handleInputChange}/>
                </div>
                <div className='input-box'>
                    <input className="input" type="text" name="phone" placeholder="מס' טלפון" value={formValues.phone}
                           onChange={handleInputChange}/>
                </div>
                <div className='input-box'>
                    <textarea className="input-text" name="message" placeholder="תוכן ההודעה" aria-required="false"
                              value={formValues.message}
                              onChange={handleInputChange}/>
                </div>
                <input className="submit-button" type="submit" value="שלח"/>
            </form>
        </div>
    )
}


export default ContactForm;