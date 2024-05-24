import '../index.css';
import Profile from '../images/about-me.png';
import MobileProfile from '../images/about-me-mobile.jpg';
import Line from '../images/Line 2.svg';
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Home = ( {scrollToProjects} ) => {

    return (
        <div className='home-container'>
            <div className='home-text-container'>
                <div className='border'>
                    <h1 className='home-title outfit-font'>Hello, I'm</h1>
                    <h1 className='home-subtitle outfit-font'>Ryan Ebanks</h1>
                    <p><img src={Line} alt='Hamburger Icon' /></p>
                    <p>I'm a Full-Stack Web Developer located in New Jersey passionate about
                        creating captivating websites and applications. I have a bachelors degree
                        in computer science which gives me a strong understanding of programming
                        fundamentals such as data structures and object-oriented programming (OOPS).
                    </p>
                </div>
                <div className='border'>
                    <button className='large-btn purple-bg project-btn outfit-font' onClick={scrollToProjects}>
                        PROJECTS
                    </button>
                    <button className='round-btn btn-1'><a  target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-ebanks-752a92169/'><FaLinkedinIn /></a></button>
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
    );
}

export default Home;