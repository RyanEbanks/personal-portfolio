import '../index.css';
import Brothers from '../images/Brothers.png';

const About = () => {

    return (
        <>
            <h1 className='about-title'>&gt;About Me</h1>
            <h3 className='about-subtitle'>&gt;Ryan Ebanks</h3>
            <p className='about-p'>I'm a Full-Stack Web Developer located in New Jersey with a bachelor's degree in Computer Science. 
            Successfully completed intensive training at the Rutgers coding boot camp, earning a certificate in full-stack web development. 
            A proactive problem-solver dedicated to creating innovative applications, prioritizing mobile-first design principles. 
            Possessing an extreme attention to detail, I excel in ensuring seamless user experiences.  

            </p>
            <p className='about-p'>I'm originally from Jamaica but now live in the USA which gives me a
                multicultural perspective in the way I think as well as my creative approach.
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