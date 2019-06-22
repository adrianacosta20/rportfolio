import React from 'react';
import './about.css';
import image from './images/about.jpeg';

const About = ({scrollToSkills, scrollToHome}) => {
    return (
        <div className='about-container'>
            <i className="fas fa-caret-left about-arrow-left" onClick={()=> scrollToHome()}></i>
            <div className='about-content'>
                <div className='about-description'>
                    <h1 className='p-header'>Get to know me</h1>
                    <p className='p-description'>I am a full stack developer, having graduated in September (2018) from Techlaunch. During my time there, I was able to delve into the fundamentals of several languages, becoming well-trained in creating, designing and modifying web content. I also took the opportunity to become adept at working with multiple databases and data structures. I am a self-starter, and as such, am a self-taught computer repair specialist who enjoys the computer repair process intrinsically.</p>

                    <p className='p-description'>Of course, as anyone working in an ever-changing industry, with new technologies cropping up around us, I recognize that I have a lot to learn and therefore feel teachable, as well as constructive. I work well in teams, and although I have completed a number of solo, freelance projects since graduating, my school taught me the importance of a team and working hands-on as a team—I would love to be a part of one!</p>

                    <p className='p-description'>I emigrated from Cuba with my parents when I was 11, coming to the US not knowing how to speak English, but it was not long before I caught on. Aside from coding and creating, I am a sports lover, especially of soccer. I love Miami, but also love to travel and encounter new things, so I would not mind relocating, especially for the right opportunity, and I am also available to work remotely, as well as on a per-project basis.</p>
                </div>
                <div className='about-image'>
                    <img className='about-img' src={image} alt='not found' />
                </div>
            </div>
            <i className="fas fa-caret-right about-arrow-right" onClick={()=> scrollToSkills()}></i>
        </div>
    );
};

export default About;