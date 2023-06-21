import "./about.css"
import AnimatedPage from '../AnimatedPage.jsx';

import React from 'react';
function About(){
    return(
        <AnimatedPage>
        <>
        <div className="about_me">
        <h1>Hi, I am Aleksandra!</h1>
        <p>Frontend developer with React and Angular</p>
        <button>Contact me</button>
        </div>
        </>
        </AnimatedPage>
    )
}

export default About;