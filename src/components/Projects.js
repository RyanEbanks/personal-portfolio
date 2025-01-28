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
            'project': 'hwni',
            'img': require('../images/hwni.png'),
            'projectType': 'Full-Stack',
            'link': 'https://main.d16sl4e0bj77nf.amplifyapp.com/',
            'description': 'React, Tailwind, Flask, PostgreSQL'
        },
        {
            'project': 'FluxCove',
            'img': require('../images/fluxcove.png'),
            'projectType': 'Full Stack',
            'link': 'https://www.fluxcove.com',
            'description': 'React, Tailwind, Express, MongoDB'
        },
        {
            'project': 'AllPro',
            'img': require('../images/newallpro.png'),
            'projectType': 'Front End',
            'link': 'https://all-pro.vercel.app/',
            'description': 'Angular, JavaScript, HTML, TailwindCss'
        },
        {
            'project': '1oceanfund',
            'img': require('../images/1ocean.png'),
            'projectType': 'Front End',
            'link': 'https://1oceanfund.org/',
            'description': 'Wordpress: updating and maintaining'
        },
        {
            'project': 'Scentimental',
            'img': require('../images/scentimental.png'),
            'projectType': 'Full Stack',
            'link': 'https://www.youtube.com/watch?v=3zjsBKo1IlY',
            'description': 'Handlebars, JavaScript, Express, MySQL'
        },
        {
            'project': 'Emporify Tech',
            'img': require('../images/emporifytech.png'),
            'projectType': 'Back End',
            'link': 'https://github.com/RyanEbanks/emporify-tech',
            'description': 'Express, MySQL'
        },
        {
            'project': 'HyperCircle',
            'img': require('../images/hypercircle.png'),
            'projectType': 'Back End',
            'link': 'https://github.com/RyanEbanks/hyper-circle-api',
            'description': 'Express, MongoDB'
        },
    ];

    return (
        <div>
        <img src={Title} alt='project title' className='title-svg' /> 
        <div className='project-container border-padding'>
        <img src={lCorner} alt='left top angle border' className='corner-proj-svg left-corner' />
        <img src={rCorner} alt='right top angle border' className='corner-proj-svg right-corner' />
            <h1 className='project-title'>My Projects</h1>
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
                                {/* <div className='proj-type-container'>
                                {p.projectType}
                                </div> */}
                            </a>
                        </div>
                    ))}
                </div>
                <button className='project-contact-btn' onClick={scrollToContact}>_CONTACT-ME</button>
            </div>
        </div>
            <img src={lAngle} alt='left angle border' className='angle-proj-svg left-angle' />
            <img src={rAngle} alt='right angle border' className='angle-proj-svg right-angle' />
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </div>
    );
}

export default Projects;
