import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
                the reason why you have to eat apple mango
                1.skin(pimple) and hair health
                2.eye health(vitamin A,B,D)
                3.stop aging
                4.brain health
                5.help for insomnia
                6.also help for cancer
            </span>
            <span>-George Orwell, 1984</span>
        </div>
    );
}

export default About;