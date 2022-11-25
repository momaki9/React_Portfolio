import React from 'react';

const customWidth = { width: '21rem', margin: "10px" };
const customCss = { padding: "10px"}

export default function Portfolio() {
    return (
        <div className="worksample container">
            <h2 style={customCss}>Project Samples</h2>
            <div className='row'>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/x1Kg2BL1/app.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                        <h5 className="card-title">Text Editor</h5>
                        <p className="card-text">Simple text editor with JavaScript syntax highlighting that works without an internet connection.</p>
                        <a href="https://calm-escarpment-33592.herokuapp.com/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Text_Editor" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/LsQxCLzt/homepage-ss.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                    <h5 className="card-title">Tech Blog</h5>
                        <p className="card-text">A CMS-style blog app that follows the MVC paradigm.</p>
                        <a href="https://tech-blog-mvc-9.herokuapp.com/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Tech_Blog" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/yx4XtPWZ/ss-notes-Page.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                    <h5 className="card-title">Note taker</h5>
                        <p className="card-text">An application built with an Express.js back end that saves and retrieves data from a JSON file.</p>
                        <a href="https://shielded-wildwood-90732.herokuapp.com/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Note_Taker" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/m238x0Y2/Scheduler-Screenshot.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                    <h5 className="card-title">Work Day Scheduler</h5>
                        <p className="card-text">Simple task scheduler that uses localStorage to store data and Moment.js library for date and time.</p>
                        <a href="https://momaki9.github.io/Work_Day_Scheduler/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Work_Day_Scheduler" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/fW98C3kd/passgen-ss.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                        <p className="card-text">Simple password generator that takes user input into account and provides a password that matches the chosen criteria.</p>
                        <a href="https://momaki9.github.io/Password_Generator/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Password_Generator" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
                <div className="card col-3" style={customWidth}>
                    <img src="https://i.postimg.cc/sfQNL6Hv/app-ss.png" className="card-img-top" alt="..." style={customCss}/>
                    <div className="card-body">
                    <h5 className="card-title">Weather application</h5>
                        <p className="card-text">An application that uses the OpenWeather API to retrieve weather data and stores persisteen data using localStorage.</p>
                        <a href="https://momaki9.github.io/Weather_Dashboard/" className="btn btn-light">Link to App</a>
                        <p></p>
                        <a href="https://github.com/momaki9/Weather_Dashboard" className="btn btn-light">Link to Code on GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    )
}