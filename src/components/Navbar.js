import '../index.css';
import Hamburger from '../images/hamburger.svg';
import { IoClose } from 'react-icons/io5';
import Phone from '../images/phone.svg';
import { React, useState } from 'react';
import ball from '../images/green-circle.svg';
import Horizontal from '../images/Rectangle 10.svg';
import lAngle from '../images/left-angle.svg';
import rAngle from '../images/right-angle.svg';

const Navbar = ({ scrollToHome, scrollToSkills, scrollToProjects, scrollToAbout, scrollToContact }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuSelect = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            {/* Hamburger Menu  */}
            <div id='navbar' className='border-sm'>
                {!toggleMenu ?
                    (
                        <button className='box-style blue-bg icon' onClick={() => {
                            menuSelect();
                        }}>
                            <img src={Hamburger} alt='Hamburger Icon' />
                        </button>
                    ) : (
                        <div className='nav-menu-container'>
                            <button onClick={menuSelect} className='burger-font-size unstyled-btn'>
                                <IoClose />
                            </button>
                            <div className='nav-list-menu'>
                                <div className='nav-list-container'>
                                <button onClick={()=> {scrollToHome(); menuSelect();}} className='burger-font-size unstyled-btn mini-menu'><span><img src={ball} alt='ball' className='ball-size' /></span>home</button>
                                <button onClick={()=> {scrollToAbout(); menuSelect();}} className='burger-font-size unstyled-btn mini-menu'><span><img src={ball} alt='ball' className='ball-size' /></span>about</button>
                                <button onClick={()=> {scrollToSkills(); menuSelect();}} className='burger-font-size unstyled-btn mini-menu'><span><img src={ball} alt='ball' className='ball-size' /></span>skills</button>
                                <button onClick={()=> {scrollToProjects(); menuSelect();}} className='burger-font-size unstyled-btn mini-menu'><span><img src={ball} alt='ball' className='ball-size' /></span>projects</button>
                                </div>
                            </div>
                        </div>
                    )}
                <div className='title'>EbanksDev</div>
                <button className='box-style green-bg green-btn icon' onClick={scrollToContact}>
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
                <button className='box-style green-bg green-btn icon' onClick={scrollToContact}>_CONTACT-ME</button>
            </div>
                <img src={lAngle} alt='left angle border' className='angle-svg left-angle' />
                <img src={rAngle} alt='right angle border' className='angle-svg right-angle' />
                <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </>
    );
}

export default Navbar;