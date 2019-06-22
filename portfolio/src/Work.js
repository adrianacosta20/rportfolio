import React from 'react';
import './work.css';
import todo from './images/toDoList.png';
import flappy from './images/flappybird.png';
import lms from './images/lms.png';

const Work = ({scrollToSkills, scrollToContact}) => {
    return (
        <div className='work-container'>
            <i class="fas fa-caret-left work-arrow-left" onClick={()=> scrollToSkills()}></i>
            <div className='work-projects'>
                <div className='project-box'>
                    <a href='' className='project-link'><img className='project-image' src={todo} alt='not found' /></a>
                    <div className='project-info'>
                        <h1 className='project-name'>To Do List</h1>
                        <p className='project-info'>
                            A To Do list app built using Vanilla Javascript with JQuery as front-end and NodeJs with MongoDB as back-end. Authentication using Passport.
                        </p>
                    </div>
                </div>
                <div className='project-box'>
                    <div className='project-info'>
                        <h1 className='project-name'>Flappy Bird</h1>
                        <p className='project-info'>
                            A replica of the famous Flappy Bird game which is not available anymore. Implemented on Vanilla Javascript.
                        </p>
                    </div>
                    <a href='' className='project-link'><img className='project-image' src={flappy} alt='not found' /></a>
                </div>
                <div className='project-box'>
                    <a href='' className='project-link'><img className='project-image' src={lms} alt='not found' /></a>
                    <div className='project-info'>
                        <h1 className='project-name'>LMS</h1>
                        <p className='project-info'>
                            Small lead managment system which gives you the ability to keep record, store and keep a counter of leads on a rotaion based system. Built using React as front-end and NodeJs with MongoDb as back-end. Authentication done using Firebase.
                        </p>
                    </div>
                </div>
            </div>
            <i class="fas fa-caret-right work-arrow-right" onClick={()=> scrollToContact()}></i>
        </div>
    )
};

export default Work;
