import { Link } from 'react-router-dom';
import "./about.css"
import AnimatedPage from '../AnimatedPage';

import React from 'react';
function About(){
    return(
        <AnimatedPage>
        <>
        <div className="about_me">
        <h1>Hi, I am Aleksandra!</h1>
        <p>Frontend developer with React and Angular</p>

        <Link to="/contact">

        <button>Contact me</button>
        </Link>
        
        </div>
        </>
        </AnimatedPage>
    )
}

export default About;