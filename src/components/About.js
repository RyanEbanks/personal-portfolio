import '../index.css';
import Family from '../images/family.png';
// import Resume from '../../public/resume/ryanebanks.docx';

const About = () => {

    return (
        <div className='about-container'>
        <div className='about-text-container'>
            <h1 className='about-title'><span>&gt;</span>About Me</h1>
            <h3 className='about-subtitle'><span>&gt;</span>Ryan Ebanks</h3>
            <p className='about-p'>I'm a Full-Stack Web Developer located in New Jersey with a bachelor's degree in Computer Science. 
            Successfully completed intensive training at the Rutgers coding boot camp, earning a certificate in full-stack web development. 
            A proactive problem-solver dedicated to creating innovative applications, prioritizing mobile-first design principles. 
            Possessing an extreme attention to detail, I excel in ensuring seamless user experiences.  

            </p>
            <p className='about-p'>I'm originally from Jamaica but now live in the USA which gives me a
                multicultural perspective in the way I think as well as my creative approach.
            </p>
            <button className='resume-btn'><a href='/resume/ryanebanks.docx' download='ryanebanks'>RESUME</a></button>
        </div>
        <div className='about-img-container'>
            <img
                src={Family}
                alt='about me'
                className='about-img' />
        </div>
        </div>
    );
}

export default About;