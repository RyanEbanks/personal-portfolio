import '../index.css';
import Hamburger from '../images/hamburger.svg';
import { IoClose } from 'react-icons/io5';
import Phone from '../images/phone.svg';
import { React, useState } from 'react';
import ball from '../images/green-circle.svg';

const Navbar = ({ scrollToHome, scrollToSkills, scrollToProjects, scrollToAbout, scrollToContact }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuSelect = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            {/* Hamburger Menu  */}
            <div id='navbar' className='border'>
                {!toggleMenu ?
                    (
                        <button className='box-style blue-bg icon' onClick={() => {
                            menuSelect();
                        }}>
                            <img src={Hamburger} alt='Hamburger Icon' />
                        </button>
                    ) : (
                        <div>
                            <button onClick={menuSelect}>
                                <IoClose />
                            </button>
                            <div>
                                <img src={ball} alt='ball' className='ball-size' />
                                <button onClick={scrollToHome} className='unstyled-btn'>_home</button>
                                <img src={ball} alt='ball' className='ball-size' />
                                <button onClick={scrollToAbout} className='unstyled-btn'>_about-me</button>
                                <img src={ball} alt='ball' className='ball-size' />
                                <button onClick={scrollToSkills} className='unstyled-btn'>_skills</button>
                                <img src={ball} alt='ball' className='ball-size' />
                                <button onClick={scrollToProjects} className='unstyled-btn'>_projects</button>
                                <img src={ball} alt='ball' className='ball-size' />
                            </div>
                        </div>
                    )}
                <div className='title'>EbanksDev</div>
                <button className='box-style green-bg icon'>
                    <img src={Phone} alt='Hamburger Icon' />
                </button>
            </div>
            <div id='navbar-lg' className='border'>
                <div className='title'>EbanksDev</div>
                <div className='nav-2'>
                    <img src={ball} alt='ball' className='ball-size' />
                    <button onClick={scrollToHome} className='unstyled-btn'>_home</button>
                    <img src={ball} alt='ball' className='ball-size' />
                    <button onClick={scrollToAbout} className='unstyled-btn'>_about-me</button>
                    <img src={ball} alt='ball' className='ball-size' />
                    <button onClick={scrollToSkills} className='unstyled-btn'>_skills</button>
                    <img src={ball} alt='ball' className='ball-size' />
                    <button onClick={scrollToProjects} className='unstyled-btn'>_projects</button>
                    <img src={ball} alt='ball' className='ball-size' />
                </div>
                <button className='box-style green-bg icon' onClick={scrollToContact}>_CONTACT-ME</button>
            </div>
        </>
    );
}

export default Navbar;