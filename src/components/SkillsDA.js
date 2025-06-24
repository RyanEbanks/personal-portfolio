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
// import { LiaJava } from "react-icons/lia";
// import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import Horizontal from '../images/Rectangle 10.svg';
import Title from '../images/skills-title.svg';
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiTableau } from "react-icons/si";

const SkillsDA = () => {

    return (
        <>
            <img src={Title} alt='skill title' className='title-svg' />  
            <div className='skill-title-container border-padding'>
                <button className='skill-btn outfit-font'>Skills</button>
                <h1 className='skill-title outfit-font font-gray'>Tools & Technologies</h1>
            </div>
            <div className='skill-container border-padding'>
                    <p className="skill-box skill-icon mysql"><SiMysql /><span>MySQL</span></p>
                    <p className="skill-box skill-icon excel"><PiMicrosoftExcelLogoFill /><span>Excel</span></p>
                    <p className="skill-box skill-icon tableau"><SiTableau /><span>Tableau</span></p>
                    {/* Had to adjust these colors in different classes in the css as well as switching text back to black */}
                    {/* <p className="skill-box skill-icon java"><LiaJava /><span className='skill-icon-text'>Java</span></p> */}
                    {/* <p className="skill-box skill-icon python"><FaPython /><span className='skill-icon-text'>Python</span></p> */}
            </div>
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </>
    );
}

export default SkillsDA;