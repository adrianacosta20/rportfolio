import React from 'react';
import './contact.css';

const Contact = ({ onEmail, scrollToWork }) => {
    return (
        <div className='contact-container'>
            <i class="fas fa-caret-left contact-arrow-left" onClick={() => scrollToWork()}></i>
            <div className="contact-content">
                <div className='feel-free'>
                    Please feel free to contact me at anytime. Just leave your information and I'll get back to you as soon as possible. Thank you.
                </div>
                <div className='form'>
                    <div className='separator'>
                        name
                    <input className='input-fname' />
                    </div>
                    <div className='separator'>
                        email
                    <input className='input-email' />
                    </div>
                    <div className='separator'>
                        mobile number
                    <input className='input-mobile' />
                    </div>
                    <div className='separator'>
                        message
                    <textarea className='textarea-message' />
                    </div>
                    <button className='send' onClick={
                        () => onEmail({
                            name: document.getElementsByClassName('input-fname')[0].value,
                            email: document.getElementsByClassName('input-email')[0].value,
                            mobile: document.getElementsByClassName('input-mobile')[0].value,
                            message: document.getElementsByClassName('textarea-message')[0].value
                        })
                    }>send</button>
                </div>
            </div>
        </div>
    )
};

export default Contact;