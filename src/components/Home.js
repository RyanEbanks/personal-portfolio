import '../index.css';
import Profile from '../images/IMG_2013_Original.jpg'
import Line from '../images/Line 2.svg'
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";                             

const Home = () => {

    return (
        <>
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
            <button className='large-btn purple-bg project-btn outfit-font'>PROJECTS</button>
            <button className='round-btn btn-1'><FaLinkedinIn /></button>
            <button className='round-btn btn-2'><ImGithub /></button>
        </div>
        <div>
            <img 
            src={Profile}
            alt= 'profile'
            className='home-img'
            />
        </div>
        </>
    );
}

export default Home;