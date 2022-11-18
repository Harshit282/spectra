import React from 'react'

function UserContact() {
    return (
        <div className="inputBox">
            <input
                type="text"
                className="contactInput name revealLeft"
                placeholder="Your name *"
            />
            <input
                type="text"
                className="contactInput email revealLeft"
                placeholder="Your Email *"
            />
            <input
                    type="text"
                    className="contactInput subject revealLeft"
                    placeholder="Write a Subject"
            />
            <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
                className='revealLeft'
            ></textarea>
            <div className="submit revealTop">
                Submit
            </div>
        </div>
    )
}

export default UserContact