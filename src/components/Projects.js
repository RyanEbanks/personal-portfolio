// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Left from '../images/arrow-left.svg';
// import Right from '../images/arrow-right.svg';
import Horizontal from '../images/Rectangle 10.svg';
import lAngle from '../images/left-angle.svg';
import rAngle from '../images/right-angle.svg';
import lCorner from '../images/left-corner.svg';
import rCorner from '../images/right-corner.svg';
import Title from '../images/project-title.svg';

const Projects = ({ scrollToContact }) => {

    const projectArr = [
        {
            'project': 'FluxCove',
            'img': require('../images/flux-project-banner.png'),
            'projectType': 'Full Stack',
            'link': 'https://www.fluxcove.com',
            'description': 'React, Tailwind, Express, MongoDB'
        },
        {
            'project': 'Scentimental',
            'img': require('../images/Scentimental.png'),
            'projectType': 'Full Stack',
            'link': 'https://www.youtube.com/watch?v=3zjsBKo1IlY',
            'description': 'Handlebars, JavaScript, Express, MySQL'
        },
        {
            'project': 'Emporify Tech',
            'img': require('../images/Emporify-tech.png'),
            'projectType': 'Back End',
            'link': 'https://github.com/RyanEbanks/emporify-tech',
            'description': 'Express, MySQL'
        },
        {
            'project': 'HyperCircle',
            'img': require('../images/HyperCircle.png'),
            'projectType': 'Back End',
            'link': 'https://github.com/RyanEbanks/hyper-circle-api',
            'description': 'Express, MongoDB'
        },
        {
            'project': 'AllPro',
            'img': require('../images/AllPro.png'),
            'projectType': 'Front End',
            'link': 'https://all-pro.vercel.app/',
            'description': 'Angular, JavaScript, HTML, TailwindCss'
        },
    ];

    return (
        <>
        <img src={Title} alt='project title' className='title-svg' /> 
        <div className='project-container border-padding'>
        <img src={lCorner} alt='left top angle border' className='corner-proj-svg left-corner' />
        <img src={rCorner} alt='right top angle border' className='corner-proj-svg right-corner' />
            <h1 className='project-title'>My Projects</h1>
            <div className='project-button-container'>
                {/* <button className='project-button outfit-font'>Front End</button>
                <button className='project-button outfit-font'>Back End</button>
                <button className='project-button outfit-font'>Full Stack</button>
                <button className='project-button outfit-font'>All</button> */}
            </div>
            <div className='pagination-container'>
                <div className='project-img-container'>
                    {projectArr.map((p) => (
                        <div className='list-style'>
                            <a target='_blank' rel='noreferrer' href={`${p.link}`}
                            className='proj-image-type'>
                                <img
                                    src={p.img}
                                    alt={`${p.project} project`}
                                    className='proj-img'
                                />
                                <div className='proj-type-container'>
                                {p.projectType}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* Arrow Container */}
                {/* <div className='pagination-btn-container'>
                    <button className='project-pagination' onClick={prevSlide}>
                        <img src={Left} alt='left arrow' className='pagination-btn' />
                    </button>
                    <button className='project-pagination' onClick={nextSlide}>
                        <img src={Right} alt='right arrow' className='pagination-btn' />
                    </button>
                </div> */}
                <button className='project-contact-btn' onClick={scrollToContact}>_CONTACT-ME</button>
            </div>
        </div>
            <img src={lAngle} alt='left angle border' className='angle-proj-svg left-angle' />
            <img src={rAngle} alt='right angle border' className='angle-proj-svg right-angle' />
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </>
    );
}

export default Projects;
