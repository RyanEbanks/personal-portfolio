import '../index.css';
import Flux from '../images/flux-project-banner.png'
import Left from '../images/arrow-left.svg'
import Right from '../images/arrow-right.svg'

const Projects = () => {

    return (
        <>
            <h1 className='project-title'>My Projects</h1>
            <div className='project-button-container'>
                <button className='project-button outfit-font'>Front End</button>
                <button className='project-button outfit-font'>Back End</button>
                <button className='project-button outfit-font'>Full Stack</button>
            </div>
            <div>
                <img
                    src={Flux}
                    alt='fluxcove project'
                    className='home-img' />
                <div>
                    <button className='project-pagination'>
                        <img
                            src={Left}
                            alt='left arrow'
                            className='pagination-btn' />
                    </button>
                    <button className='project-pagination'>
                        <img
                            src={Right}
                            alt='right arrow'
                            className='pagination-btn' />
                    </button>
                </div>
                <button className='project-contact-btn'>_CONTACT-ME</button>
            </div>
        </>
    );
}

export default Projects;