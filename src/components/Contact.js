import '../index.css';
import Location from '../images/location.svg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Horizontal from '../images/Rectangle 10.svg';
import lCorner from '../images/left-corner.svg';
import rCorner from '../images/right-corner.svg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_du8kfd3', 'template_en0h9fs', form.current, {
                publicKey: 'NhjZ_RQDzZs44eENb',
            })
            .then(
                () => {
                    console.log('Message sent!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleNumberInput = (e) => {
        const value = e.target.value;
        // Replace any non-digit characters and limit to 10 digits
        e.target.value = value.replace(/\D/g, '').slice(0, 10);
    };

    return (
        <>
            <div className='contact-container border-padding'>
            <img src={lCorner} alt='left top angle border' className='corner-proj-svg left-corner' />
            <img src={rCorner} alt='right top angle border' className='corner-proj-svg right-corner' />
                <div className='contact-header'>
                    <div className='contact-icon-title'>
                        <button className='location-btn'>
                            <img
                                src={Location}
                                alt='location' />
                        </button>
                        <h1 className='map-location-h1 outfit-font'>New Jersey</h1>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563311.7577016258!2d-76.0434234073998!3d40.067754358302565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1716232624888!5m2!1sen!2sus"
                        className='frame-size border-margin'
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='my-form border-margin'>
                    <h1 className='contact-h1 outfit-font'>GET IN TOUCH</h1>
                    <h2 className='contact-h2 outfit-font'>From logo design to video animation,
                        web development to website copy, expert
                        designers developers.
                    </h2>
                    <form className='my-contact-form' ref={form} onSubmit={sendEmail}>
                        <input type='text' id='name' name='user_name' className='input-shape outfit-font' placeholder='Enter your name' />
                        <input type='text' id='email' name='user_email' className='input-shape outfit-font' placeholder='Enter your email' />
                        <input type='text' id='number' name='number' className='input-shape outfit-font' placeholder='Enter your phone number'
                            maxLength='10' onInput={handleNumberInput} />
                        <textarea id='msg' name='message' className='input-shape input-msg outfit-font' placeholder='Message' rows='4' />
                        <button type='submit' value='Send' className='submit-btn outfit-font'>SUBMIT</button>
                    </form>
                </div>
            </div>
            {/* <img src={Horizontal} alt='Horizontal line' className='horiz-line' /> */}
        </>
    );
}

export default Contact;