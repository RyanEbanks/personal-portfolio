import '../index.css';
// import Hamburger from '../images/hamburger.svg';
// import Phone from '../images/phone.svg';
import { React, useState } from 'react';
import ball from '../images/green-circle.svg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuSelect = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            {/* <div id='navbar' className='border'>
                <button className='box-style blue-bg icon' onClick={ () => {
                    menuSelect();
                }}>
                    <img src={Hamburger} alt='Hamburger Icon' />
                </button>
                <div className='title'>EbanksDev</div>
                <button className='box-style green-bg icon'>
                    <img src={Phone} alt='Hamburger Icon' />
                </button>
            </div> */}
            <div id='navbar' className='border'>
                <div className='title'>EbanksDev</div>
                <div className='nav-2'>
                    <img src={ball} className='ball-size' />
                    <a>_home</a>
                    <img src={ball} className='ball-size' />
                    <a>_about-me</a>
                    <img src={ball} className='ball-size' />
                    <a>_skills</a>
                    <img src={ball} className='ball-size' />
                    <a>_projects</a>
                    <img src={ball} className='ball-size' />
                </div>
                <button className='box-style green-bg icon'>
                    <a>_CONTACT-ME</a>
                </button>
            </div>
        </>
    );
}

export default Navbar;