import Horizontal from '../images/Rectangle 10.svg';
import lAngle from '../images/left-angle.svg';
import rAngle from '../images/right-angle.svg';
import lCorner from '../images/left-corner.svg';
import rCorner from '../images/right-corner.svg';
import Title from '../images/project-title.svg';

const DataAnalyst = ({scrollToContact}) => {
    const DataAnalystArr = [
        {
            'project': 'data analysis',
            'img': require('../images/Analysis Health Insurance.png'),
            'projectType': 'Data Analyst',
            'link': '/resume/Analysis of 2025 Health Insurance Exchange Public Use Files.pdf',
            'description': 'Excel, SQL, Tableau, Python'
        },
        {
            'project': 'case study',
            'img': require('../images/casestudy.png'),
            'projectType': 'Data Analyst',
            'link': '/resume/Data Analysis Report Addressing Data Inconsistency_ A Barrier to ICT Advancement in Jamaican Government- Ryan Ebanks.pdf',
            'description': 'Excel, SQL, Tableau'
        },
        {
            'project': 'data analysis',
            'img': require('../images/olist casestudy.png'),
            'projectType': 'Data Analyst',
            'link': 'https://github.com/RyanEbanks/olist-sales-analysis',
            'description': 'Excel, SQL, Tableau'
        },
    ];

return(
<div>
        <img src={Title} alt='project title' className='title-svg' /> 
        <div className='project-container border-padding'>
        <img src={lCorner} alt='left top angle border' className='corner-proj-svg left-corner' />
        <img src={rCorner} alt='right top angle border' className='corner-proj-svg right-corner' />
            <h1 className='project-title'>My Projects</h1>
            <div className='pagination-container'>
                <div className='project-img-container'>
                    {DataAnalystArr.map((da) => (
                        <div className='list-style'>
                            <a target='_blank' rel='noopener noreferrer' href={`${da.link}`}
                            className='proj-image-type'>
                                <img
                                    src={da.img}
                                    alt={`${da.project} project`}
                                    className='proj-img'
                                />
                                {/* <div className='proj-type-container'>
                                {da.projectType}
                                </div> */}
                            </a>
                        </div>
                    ))}
                </div>
                <button className='project-contact-btn' onClick={scrollToContact}>_CONTACT-ME</button>
            </div>
        </div>
            <img src={lAngle} alt='left angle border' className='angle-proj-svg left-angle' />
            <img src={rAngle} alt='right angle border' className='angle-proj-svg right-angle' />
            <img src={Horizontal} alt='Horizontal line' className='horiz-line' />
        </div>
);
    
}

export default DataAnalyst;
