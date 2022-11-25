import React from 'react';

const customCss = { padding: "1%", margin: "1%"}

export default function Footer() {
    return (
        <div>
            <p className='card-body' >
                <a href='https://github.com/momaki9' >
                    <img src='https://i.postimg.cc/T1hbhRTV/Git-Hub-Mark-120px-plus.png' alt="Github's invertocat logo" title='Go to GitHub Profile' style={customCss}/>
                </a>
                <a href='https://www.linkedin.com/in/mostafa-maki-180b10ba/'>
                    <img src='https://i.postimg.cc/HkmLhpF6/LI-In-Bug.png' alt="LinkedIn's logo" title='Go to LinkedIn Profile' style={customCss}/>
                </a>
                <a href='https://stackoverflow.com/users/20586897/mostafa-maki'>
                    <img src='https://i.postimg.cc/xTxssCk2/stack-overflow-1.png' alt="StackOverFlow's logo" title='Go to StackOverFlow Profile' style={customCss}/>
                </a>
            </p>
        </div>
    )
}

