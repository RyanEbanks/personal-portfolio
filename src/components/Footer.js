import '../index.css';
import emailIcon from '../images/email-icon.svg';
import copyIcon from '../images/copy-icon.svg';
import phoneIcon from '../images/phone-icon.svg';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='outfit-font footer-container'>
            <div className='footer-header-container'>
                <button className='footer-header'>Get in Touch</button>
            </div>
            <div>
                <p className='footer-p'>What's next? Feel free to reach out to me if you're looking for
                    a developer, have a query, or simply want to connect.
                </p>
            </div>
            <div className='footer-contact-container'>
                <h1 className='footer-contact'>
                    <span><img src={emailIcon} alt='email'className='footer-img' /></span>
                    ryankebanks@gmail.com
                    <span><img src={copyIcon} alt='copy button'className='footer-img' /></span>
                </h1>
                <h1 className='footer-contact'>
                    <span><img src={phoneIcon} alt='telephone'className='footer-img' /></span>
                    +7329003101
                    <span><img src={copyIcon} alt='copy button'className='footer-img' /></span>
                </h1>
                <p className='footer-p-2'>You may also find me on these platforms!</p>
            </div>
            <div className='footer-btn-container'>
                <button className='footer-btn'><FiGithub /></button>
                <button className='footer-btn'><FaLinkedinIn /></button>
            </div>
        </div>
    );
}

export default Footer;