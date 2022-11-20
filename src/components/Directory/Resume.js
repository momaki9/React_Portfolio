import React from 'react';
import ResumeLink from '../../../src/assets/files/ResumeLink.pdf'

export default function Resume() {
    return (
        <div>
            <span> Download a copy of my </span>
            <a href={ResumeLink} download="MyExampleDoc" target='_blank'> resume</a>
            <div>
                <h3>Relevant Skils</h3>
                <ul>
                    <li>MERN stack: MongoDB, ExpressJS, React, NodeJS</li>
                    <li>Critical Thinking</li>
                    <li>Teamwork</li>
                </ul>
            </div>
        </div>
    )
}