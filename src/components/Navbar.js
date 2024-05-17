import '../index.css';
import Hamburger from '../images/hamburger.svg';
import Phone from '../images/phone.svg';
import { React, useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuSelect = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            <div id='navbar' className='border'>
                <button className='box-style blue-bg icon' onClick={ () => {
                    menuSelect();
                }}>
                    <img src={Hamburger} alt='Hamburger Icon' />
                </button>
                <div className='title'>EbanksDev</div>
                <button className='box-style green-bg icon'>
                    <img src={Phone} alt='Hamburger Icon' />
                </button>
            </div>
        </>
    );
}

export default Navbar;