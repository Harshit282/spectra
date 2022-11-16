import React from 'react'

function UserContact() {
    return (
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
    )
}

export default UserContact