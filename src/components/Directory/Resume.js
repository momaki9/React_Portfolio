import React from 'react';
import ResumeLink from '../../../src/assets/files/ResumeLink.pdf'

const customStyle = { margin: "2%", border: "none"}
const customCss = { list_style_type: "circle", padding: "2%", margin: "1%"}

export default function Resume() {
    return (
        <div>
            
            <div style={customStyle}>
                <h3>Relevant Skils</h3>
                <ul className='list-group' style={customCss}>
                    <li className='list-group-item-light' style={customStyle}>MERN stack: MongoDB, ExpressJS, React, NodeJS</li>
                    <li className='list-group-item-light' style={customStyle}>MySQL and Restful APIs</li>
                    <li className='list-group-item-light' style={customStyle}>Strong problem solving and communcation skills</li>
                    <li className='list-group-item-light' style={customStyle}>Experience with Test-driven development</li>
                    <li className='list-group-item-light' style={customStyle}>Teamwork</li>
                </ul>
                <span> Download a copy of my </span>
            <a href={ResumeLink} download="MyExampleDoc" target='_blank'> resume</a>
            </div>
        </div>
    )
}