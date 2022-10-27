import React from "react";
import "./styles/Contact.css";

function Contact() {
    return (
    <div className="contact" id="Contact">
        <h1>Connect with us:</h1>
        <div className="inputBox">
            <input
                type="text"
                className="contactInput name"
                placeholder="Your name *"
            />
            <input
                type="text"
                className="contactInput email"
                placeholder="Your Email *"
            />
            <input
                    type="text"
                    className="contactInput subject"
                    placeholder="Write a Subject"
            />
            <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
            ></textarea>
            <div className="submit">
                Submit
            </div>
        </div>
    </div>
    );
}

export default Contact;
