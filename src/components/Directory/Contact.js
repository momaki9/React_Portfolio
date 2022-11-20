import React from 'react';

export default function Contact() {
    return (
        <div id="contactlink">
            <h2>Contact Info</h2>
            <h2>TODO: Display form inputs name, email, and address with submit button + validation.</h2>
            <div>
                <ul>   
                    <li className="contactinfo">+1 (657) 999-3559</li>
                    <li className="contactinfo"><a href="mailto:mostafa.maki@gmail.com">Email me</a></li>
                    <li className="contactinfo"><a href="https://github.com/momaki9">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}