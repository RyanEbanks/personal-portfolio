import '../index.css';
import Me from '../images/me.png';
import Family from '../images/dual pic.png';
import Horizontal from '../images/Rectangle 10.svg';
import { motion } from 'framer-motion';
import Title from '../images/about-title.svg';

const About = () => {

    return (
        <>
            <img src={Title} alt='about title' className='title-svg about-title-svg'/> 
            <div className='about-container border-padding'>
                <div className='about-text-container'>
                    <h1 className='about-title'><span>&gt;</span>About Me</h1>
                    <h3 className='about-subtitle'><span>&gt;</span>Ryan Ebanks</h3>
                    <p className='about-p'>I am originally from Jamaica and am now a U.S. citizen, which gives me a
                        multicultural perspective in my thinking and creative approach.
                    </p>
                    <p className='about-p'>Beyond coding, I indulge in a variety of hobbies to fuel my creativity
                        and keep myself active. I enjoy video editing, game designing, playing games, photo editing,
                        exercising, various outdoor activities, and spending time with my family.
                    </p>
                    <button className='resume-btn'><a href='/resume/ryanebanks.docx' download='ryanebanks'>RESUME</a></button>
                </div>
                <div className='about-img-container'>
                    <img
                        src={Me}
                        alt='about me'
                        className='about-img' />
                </div>
                <motion.div
                    className='about-img-container-lg'
                    whileHover={{ scale: 1.1, rotate: 5 }}  
                    transition={{ duration: 0.2 }}  
                >
                    <img
                        src={Family}
                        alt='about me'
                        className='about-img'
                    />
                </motion.div>
            </div>
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </>
    );
}

export default About;