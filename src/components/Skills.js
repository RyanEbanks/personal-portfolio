import '../index.css';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Horizontal from '../images/Rectangle 10.svg';

const Skills = () => {

    return (
        <>
            <div className='skill-title-container border-padding'>
                <button className='skill-btn outfit-font'>Skills</button>
                <h1 className='skill-title outfit-font font-gray'>Software Languages</h1>
            </div>
            <div className='skill-container border-padding'>
                    <p className="skill-box skill-icon html5"><IoLogoHtml5 /><span>HTML5</span></p>
                    <p className="skill-box skill-icon css3"><IoLogoCss3 /><span>CSS3</span></p>
                    <p className="skill-box skill-icon javascript"><SiJavascript /><span>JavaScript</span></p>
                    <p className="skill-box skill-icon react"><FaReact /><span>React</span></p>
                    <p className="skill-box skill-icon bootstrap"><FaBootstrap /><span>Bootstrap</span></p>
                    <p className="skill-box skill-icon tailwind"><RiTailwindCssFill /><span>Tailwind</span></p>
                    <p className="skill-box skill-icon framer-motion"><TbBrandFramerMotion /><span>Framer Motion</span></p>
                    <p className="skill-box skill-icon git"><FaGitAlt /><span>Git</span></p>
                    <p className="skill-box skill-icon express"><SiExpress /><span>Express.js</span></p>
                    <p className="skill-box skill-icon mongodb"><BiLogoMongodb /><span>MongoDB</span></p>
                    <p className="skill-box skill-icon mysql"><SiMysql /><span>MySQL</span></p>
                    <p className="skill-box skill-icon socketio"><SiSocketdotio /><span>Socket.io</span></p>
                    <p className="skill-box skill-icon node"><FaNodeJs /><span>Node.js</span></p>
            </div>
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </>
    );
}

export default Skills;