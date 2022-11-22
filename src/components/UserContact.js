import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function UserContact() {
    const[Name, setName] = useState()
    const[Email, setEmail] = useState()
    const[Subject, setSubject] = useState()
    const[Message, setMessage] = useState()
    var templateParams = {
        name: Name,
        email: Email,
        subject: Subject,
        msg: Message
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if(Name === "" || Email === "" || Subject === "" || Message === ""){
            alert("Please fill all the given fields.")
        }
        else{
            emailjs.send('service_g98vx5e', 'template_n1zredw', templateParams, 'aGZbkTTVHlF8AXmHQ')
                .then(function() {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSubject("")
                }, function(error) {
                    alert('FAILED...', error);
                });
            };
        }
    return (
        <div className="inputBox revealTop">
            <form>
            <input
                type="text"
                className="contactInput name"
                placeholder="Your name *"
                value={Name}
                onChange={(e => setName(e.target.value))}
                required
            />
            <input
                type="email"
                className="contactInput email"
                placeholder="Your Email *"
                value={Email}
                onChange={(e => setEmail(e.target.value))}
                required
            />
            <input
                type="text"
                className="contactInput subject"
                placeholder="Write a Subject *"
                value={Subject}
                onChange={(e => setSubject(e.target.value))}
                required
            />
            <textarea
                name="message"
                id="message"
                placeholder="Write Your message *"
                value={Message}
                onChange={(e => setMessage(e.target.value))}
                required
            ></textarea>
            <div className="submit" onClick={sendEmail}>
                Submit
            </div>
            </form>
        </div>
    )
}

export default UserContact