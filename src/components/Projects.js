import '../index.css';
import Flux from '../images/flux-project-banner.png'
import Left from '../images/arrow-left.svg'
import Right from '../images/arrow-right.svg'
import smCir from '../images/circle.svg';
import lgCir from '../images/large-circle.svg';

const Projects = () => {

    return (
        <>
            <h1 className='project-title'>My Projects</h1>
            <div className='project-button-container'>
                <button className='project-button outfit-font'>Front End</button>
                <button className='project-button outfit-font'>Back End</button>
                <button className='project-button outfit-font'>Full Stack</button>
            </div>
            <div className='pagination-container'>
                <img
                    src={Flux}
                    alt='fluxcove project'
                    className='home-img' />

                    <button className='project-pagination'>
                        <img
                            src={Left}
                            alt='left arrow'
                            className='pagination-btn' />
                    </button>
                        {/* <img src={smCir} />
                        <img src={lgCir} />
                        <img src={smCir} /> */}
                    <button className='project-pagination'>
                        <img
                            src={Right}
                            alt='right arrow'
                            className='pagination-btn' />
                    </button>

                <button className='project-contact-btn'>_CONTACT-ME</button>
            </div>
        </>
    );
}

export default Projects;