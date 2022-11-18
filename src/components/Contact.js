import React from "react";
import "./styles/Contact.css";
import UserContact from "./UserContact";

function Contact() {
    return (
    <div className="contact" id="Contact">
        <h1 className="revealTop">Connect with us:</h1>
        <UserContact id='User' />
    </div>
    );
}

export default Contact;
