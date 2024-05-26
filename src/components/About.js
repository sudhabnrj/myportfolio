import PersonalDetails from './PersonalDetails';
import { getSkills, educationData, certificationData } from '../utils/constents';
import TechStack from './TechStack';
import Education from './Education';
import Achivement from './Achivement';
import Certification from './Certification';
import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import FacebookIcon from '@mui/icons-material/Facebook';
import GetAppIcon from '@mui/icons-material/GetApp';
import SkillSet from './SkillSet';
import Flag_of_India from '../assets/images/Flag_of_India.png';
import usePersonalDetails from '../utils/usePersonalDetails';

const About = () => {

    const personalInfo = usePersonalDetails();

    const {
        name,
        bio,
        avatar_url,
        company,
        email,
        followers,
        following,
        location,
        public_repos,
        html_url,
    } = personalInfo;

    const pdf = 'https://drive.google.com/file/d/12hKXtybPoo_wIOvN592Ukn8tnvpl0jEF/view?usp=sharing'
    
    return(
        <section className="relative py-10 md:py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className='flex flex-col lg:flex-row justify-between items-start'>
                        <aside className="flex flex-col w-full lg:w-3/12 mt-10 border border-gray-300 dark:border-slate-700 p-5">
                            <div className="flex flex-col justify-center items-center rounded-full ">
                                <img src={avatar_url} alt={name} className="dark:bg-stone-50 bg-slate-300 rounded-full aspect-square object-cover shadow-2xl w-[200px] lg:w-auto" />
                            </div>
                            <p className="text-xl font-medium flex flex-row justify-center items-center mt-5">
                                <LocationOnIcon className="w-4 text-slate-700 dark:text-slate-300" />
                                <span className="flex items-center ml-2 justify-center">
                                    <span className="mr-1">{location}, India</span>
                                    <img src={Flag_of_India} className="w-4 object-cover" alt="Flag_of_India" />
                                </span>
                            </p>
                            <ul className="flex justify-center items-center gap-x-2 mt-4">
                                <li>
                                    <Link to="https://in.linkedin.com/in/sudhachandan-banerjee" target="_blank">
                                        <LinkedInIcon className="!w-8 !h-8 text-slate-700 dark:text-slate-300" />                                 
                                    </Link>
                                </li>
                                <li>
                                    <Link to={html_url} target="_blank">
                                        <GitHubIcon className="!w-8 !h-8 text-slate-700 dark:text-slate-300" />                                  
                                    </Link>
                                </li>
                                <li>
                                    <Link to="mailto:sudhabnrj@gmail.com">
                                        <EmailIcon className="!w-8 !h-8 text-slate-700 dark:text-slate-300" />                                  
                                    </Link>
                                </li>
                                <li>
                                    <Link to="tel:+919836611154">
                                        <PhonelinkRingIcon className="!w-8 !h-8 text-slate-700 dark:text-slate-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" to="https://www.facebook.com/sudhachandan.banerjee">
                                        <FacebookIcon className="!w-8 !h-8 text-slate-700 dark:text-slate-300" />                                  
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex justify-between mt-5">
                                <Link to={pdf} target='_blank' className="bg-slate-700 border border-slate-700 text-white font-medium py-2 px-4 rounded-md w-full hover:bg-transparent hover:text-slate-700 dark:hover:text-slate-400 transition-all text-center">Resume</Link>
                            </div>
                        </aside>
                        <div className="flex flex-col w-full lg:w-9/12 mt-0 rounded-md lg:p-5">
                            <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-8">
                                <span>Personal Details </span>
                            </h1>
                            <h2 className="text-2xl font-bold leading-10 text-slate-700 dark:text-stone-50 mb-4">{name}</h2>
                            <p className='font-normal mb-5 text-stone-900 dark:text-slate-300'>I am employed full-time as a Senior HTML Developer at Codeclouds IT Solutions Private Limited, with 9 years of experience in Frontend Technologies including HTML5, CSS3, JavaScript, React JS, Bootstrap, and proficiency in design tools such as Photoshop, Adobe XD, Figma, as well as build tools like Parcel and version control systems like GitHub. Additionally, I possess knowledge in WordPress, WooCommerce, SCSS, and Material Design. As a quick and focused learner, I actively seek opportunities to enhance my skills, ensuring high-quality work and readiness to undertake additional responsibilities.</p>
                            <div className="border border-yellow-300 rounded-md p-4">
                                <PersonalDetails/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Tech Stack</span>
                        </h1>
                        <div className="rounded-md">
                            <ul className="flex justify-center items-stretch flex-wrap gap-3">
                                {getSkills[0].map((data)=> {
                                    return(
                                        <TechStack key={data.id} name={data.name} techLogo={data.src} />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Education</span>
                        </h2>
                        <div className="rounded-md">
                            <ul className="border-l border-stone-600 dark:border-slate-700">
                                {educationData.map((listData)=> {
                                    console.log(listData.degree);
                                    return(
                                        <Education key={listData.id} title={listData.degree} issueDate={listData.year_of_passing} issueBy={listData.college} />
                                    );
                                })}
                                
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Achivements</span>
                        </h2>
                        <Achivement />
                    </div>

                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Certifications</span>
                        </h2>
                        <div className="rounded-md">
                            <div className="flex flex-col">
                                {certificationData.map((data)=> {
                                    return(
                                        <Certification key={data.id} title={data.title} issueBy={data.issue_by} issueDate={data.issue_date} imgSrc={data.src} width={data.width} height={data.height} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;