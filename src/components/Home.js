import '../index.css';
import Profile from '../images/IMG_2013_Original.jpg'
import Line from '../images/Line 2.svg'

const Home = () => {

    return (
        <>
        <div>
            <h1 className='home-title'>Hello, I'm</h1>
            <h1 className='home-subtitle'>Ryan Ebanks</h1>
            <p><img src={Line} alt='Hamburger Icon' /></p>
            <p>I'm a Full-Stack Web Developer located in New jersey passionate about
                creating captivating websites and applications. I have a bachelors degree
                in computer science which gives me a strong understanding of programming
                fundamentals such as data structures and object-oriented programming (OOPS).
            </p>
        </div>
        <div>
            <button className='large-btn purple-bg project-btn'>PROJECTS</button>
            <button className='round-btn'>LinkedIn</button>
            <button className='round-btn'>Github</button>
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