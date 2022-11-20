import React from 'react';

export default function About() {
    return (
        <div>
            <h2>About Me</h2>
            <img src="https://i.postimg.cc/DyLrkN5W/profile.jpg" className='img-fluid' alt="Mostafa's profile picture" />
            <div className='card fs-5'>
                <p className='card-body w-75 p-3'>Hi, I'm Mostafa and I'm currently learning how to code at the UCI Coding Bootcamp. It has been a very rewarding journey thus far!</p>
                <p className='card-body w-75 p-3'> I hold a Bachelor's degree in biochemistry. I am a Chemistry QC specialist at ALEKS corporation, where I help support the development of online chemistry homework as well as support the chemistry adaptive learning and assessment platform.</p>
                <p className='card-body w-75 p-3'>Some of my hobbies include hiking, watching soccer, and exploring foods from different cultural backgrouds.
                </p>
                <p className='card-body'><a href='https://github.com/momaki9'><img src='https://i.postimg.cc/FFqMnYnr/Git-Hub-Mark-32px-1.png' alt="Github's invertocat logo" title='Link to GitHub'/></a></p>
            </div>
        </div>
    )
}

