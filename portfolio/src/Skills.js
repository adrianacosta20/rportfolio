import React from 'react';
import './skills.css';

const Skills = ({scrollToAbout ,scrollToWork}) => {
    return (
        <div className='skills-container'>
            <i className="fas fa-caret-left skills-arrow-left" onClick={()=> scrollToAbout()}></i>
            <div className='skills-graph'>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '0%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>90%</p>
                        <div style={{ 'height': '90%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>html5</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>css3</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '10%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>80%</p>
                        <div style={{ 'height': '80%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>javascript</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>react</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>nodejs</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>mongodb</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>mysql</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '0%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>90%</p>
                        <div style={{ 'height': '90%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>flexbox</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '0%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>90%</p>
                        <div style={{ 'height': '90%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>bootstrap</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '20%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>70%</p>
                        <div style={{ 'height': '70%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>jquery</p>
                </div>
                <div className='skill-box'>
                    <div className='counter'>
                        <div style={{ 'height': '30%' }} ></div>
                        <p style={{ 'height': '10%', 'margin': '0', 'width': '100%', 'textAlign': 'center' }}>60%</p>
                        <div style={{ 'height': '60%' }} className='percentage'></div>
                    </div>
                    <p className='skill-name' style={{ 'transform': 'rotate(45deg)', 'fontSize': '24px' }}>sass</p>
                </div>
            </div>
            <i className="fas fa-caret-right skills-arrow-right" onClick={()=> scrollToWork()}></i>
        </div>
    );
};

export default Skills;