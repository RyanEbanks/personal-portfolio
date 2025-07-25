import '../index.css';
import Profile from '../images/about-me.png';
import MobileProfile from '../images/about-me-mobile.jpg';
import Line from '../images/Line 2.svg';
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';


const HomeDA = ({ scrollToProjects }) => {

    const lineAnimation = {
        hidden: { opacity: 0, x: '0%' }, // Start off-screen to the left and invisible
        visible: {
            opacity: [1, 0, 0, 0, 0, 0, 1], // Fully visible, then fades out
            x: ['0%', '50%', '50%', '1%', '0%', '0%', '0%'], // Move from 0% to 50%, fades away then back to 0. Stays in same position at times to avoid effect of moving
            transition: {
                duration: 3,
                ease: 'easeInOut',
                delay: 1, // Start 1 second after page load
            },
        }
    };


    return (
        <div className='home-border'>
            <div className='home-container border-padding'>
                <div className='home-text-container'>
                    <div className='border'>
                        <h1 className='home-title-container'>
                            <span className='home-title outfit-font home-text-animation'>Hello, I'm</span>
                            <span className='home-subtitle outfit-font'>Ryan Ebanks</span>
                            <span className='home-subtitle-2 outfit-font'>Data Analyst</span>
                            {/* <span className='home-line'><img src={Line} alt='Line Icon' /></span> */}
                            <motion.span
                                className='home-line'
                                variants={lineAnimation}
                                initial="hidden"
                                animate="visible"
                            >
                                <img src={Line} alt='Line Icon' />
                            </motion.span>
                        </h1>
                        <p className='home-p'>
                            I bring <span className='home-p-span'>data analysis</span> expertise, leveraging <span className='home-p-span'>SQL</span> for data extraction and transformation, 
                            along with <span className='home-p-span'>Excel</span> (advanced formulas, pivot tables) and <span className='home-p-span'>Tableau</span> 
                            (dashboards, custom visualizations) to derive actionable insights from raw data. 
                            My skills include cleaning, transforming, and visualizing datasets, with a growing emphasis 
                            on <span className='home-p-span'>data storytelling</span> that supports business decisions.
                        </p>
                    </div>
                    <div className='border'>
                        <button className='large-btn purple-bg project-btn outfit-font' onClick={scrollToProjects}>
                            PROJECTS
                        </button>
                        <button className='round-btn btn-1'><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-ebanks-752a92169/'><FaLinkedinIn /></a></button>
                        <button className='round-btn btn-2'><a target='_blank' rel='noreferrer' href='https://github.com/RyanEbanks'><ImGithub /></a></button>
                    </div>
                </div>
                <div className='img-sm-screen'>
                    <img
                        src={MobileProfile}
                        alt='profile'
                        className='home-img'
                    />
                </div>
                <div className='img-lg-screen'>
                    <img
                        src={Profile}
                        alt='profile'
                        className='img-lg-size'
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeDA;