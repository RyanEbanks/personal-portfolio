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
import { FaJava } from "react-icons/fa6";

const Skills = () => {

    return (
        <>
            <h3 className='skill-btn'>Skills</h3>
            <h1>Software Languages</h1>
            <div className='skill-container'>
                <p className='skill-box'><IoLogoHtml5 />
                    <span>HTML5</span></p>
                <p className='skill-box'><IoLogoCss3 />CSS3</p>
                <p className='skill-box'><SiJavascript />JavaScript</p>
                <p className='skill-box'><FaReact />React</p>
                <p className='skill-box'><FaBootstrap />Bootstrap</p>
                <p className='skill-box'><RiTailwindCssFill />Tailwind</p>
                <p className='skill-box'><TbBrandFramerMotion />Framer Motion</p>
                <p className='skill-box'><FaGitAlt />Git</p>
                <p className='skill-box'><SiExpress />Express.js</p>
                <p className='skill-box'><BiLogoMongodb />MongoDB</p>
                <p className='skill-box'><SiMysql />MySQL</p>
                <p className='skill-box'><SiSocketdotio />Socket.io</p>
                <p className='skill-box'><FaJava />Java</p>
            </div>
        </>
    );
}

export default Skills;