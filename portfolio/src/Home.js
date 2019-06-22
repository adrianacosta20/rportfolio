import React from 'react';
import './home.css';

const Home = ({scrollToAbout}) => {
    return (
        <div className='home-container'>
            <div className='welcome'>
                {/* <div className='p-f'>
                    <p style={{ 'margin': '0' }}>{'<'}</p>
                </div> */}
                <div className='p-m'>
                    <span className='Hello' style={{ 'fontWeight': 'bold' }}>Hello,</span>
                    <span> my name is </span>
                    <span style={{ 'fontWeight': 'bold' }}>Adrian Acosta. </span>
                    <span>I'm a </span>
                    <span style={{ 'fontWeight': 'bold' }}>fullstack </span>
                    <span>web developer.</span>
                </div>
                <i className="fas fa-caret-right home-arrow-right" onClick={()=> scrollToAbout()}></i>
                {/* <div className='p-l'>
                    <p style={{ 'margin': '0', 'marginTop': '25px', 'fontSize': '143px' }}>/</p>
                    <p style={{ 'margin': '0' }}>{'>'}</p>
                </div> */}
            </div>
            {/* <i className="fas fa-chevron-down home-arrow" onClick={()=> scrollToAbout()}></i> */}
        </div>
    )
};

export default Home;