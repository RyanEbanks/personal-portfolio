import '../index.css';
import Brothers from '../images/Brothers.png';

const About = () => {

    return (
        <>
            <h1 className='about-title'>&gt;About Me</h1>
            <h3 className='about-subtitle'>&gt;Ryan Ebanks</h3>
            <p className='about-p'>I'm a Full-Stack Web Developer located in New Jersey passionate about
                creating captivating websites and applications. I have a bachelors
                degree in computer science which gives me a strong understanding of
                programming fundamentals such as data structures and object-oriented
                programming (OOPs).
            </p>
            <p className='about-p'>I'm originally from Jamaica but now live in the USA which gives me a
                unique perspective in the way I think as well as my creative approach.
                I'm also a graduate of the Rutgers Full-Stack Coding Bootcam.
            </p>
            <button className='resume-btn'>RESUME</button>
            <img
                src={Brothers}
                alt='about me'
                className='home-img' />
        </>
    );
}

export default About;