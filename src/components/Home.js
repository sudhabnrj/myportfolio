import Flag_of_India from '../assets/images/Flag_of_India.png';
// import userAvatar from '../assets/images/user.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import FacebookIcon from '@mui/icons-material/Facebook';
import GetAppIcon from '@mui/icons-material/GetApp';
import SkillSet from './SkillSet';
import { getSkills } from '../utils/constents';
import usePersonalDetails from '../utils/usePersonalDetails';
import {Link} from 'react-router-dom';

const Home = () => { 
    
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

    //console.log(personalInfo);

    return(
        <section className="relative py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start">
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
                            <button type="button" className="bg-slate-700 border border-slate-700 text-white font-medium py-2 px-4 rounded-md w-full hover:bg-transparent hover:text-slate-700 dark:hover:text-slate-400 transition-all">Resume</button>
                            {/* <Link to={PDF} type="button" className="group border border-slate-500 dark:border-slate-700 bg-transparent dark:text-slate-700 font-medium w-2/12 py-2 px-2 rounded-md flex justify-center items-center dark:hover:bg-slate-700 dark:hover:text-white transition-all" download>
                                <GetAppIcon className="!w-6 !h-6 text-slate-700 dark:text-slate-400 dark:group-hover:text-white" />                             
                            </Link> */}
                        </div>
                    </aside>
                    <div className="flex flex-col w-full lg:w-9/12 mt-10 rounded-md lg:p-5 pt-0 lg:pl-10">
                        <h1 className="text-4xl font-bold leading-10 text-slate-700 dark:text-stone-50 mb-4">{name}</h1>
                        <p className="my-4 text-slate-500 dark:text-slate-300 font-normal">{bio}</p>
                        <ul className="flex flex-col mt-3 ">
                            <li className="mb-8">
                                <span className="font-normal text-gray-600 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Role</span>
                                <h2 className="text-slate-700 dark:text-slate-300 font-bold text-xl mt-0">Senior Frontend Developer</h2>
                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Year of Experience</span>
                                <h3 className="text-slate-700 dark:text-slate-300 font-bold text-xl mt-0">9 Years</h3>
                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Skillsets</span>
                                <div className="mt-2 flex flex-wrap gap-y-3 gap-x-3">
                                    {getSkills[0].map((data)=> {
                                        return(
                                            <span key={data.id} className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700">{data.name} - <strong>{data.experience}</strong></span>
                                        );
                                    })}
                                    
                                </div>

                            </li>
                            <li className="mb-8">
                                <span className="font-normal text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Soft Skills</span>
                                <div className="mt-2 flex flex-wrap gap-y-3 gap-x-3">
                                {getSkills[1].map((data)=> {
                                        return(
                                            <span key={data.id} className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700">{data.name}</span>
                                        );
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;