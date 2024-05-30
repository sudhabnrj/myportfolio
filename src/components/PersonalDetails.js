import {Link} from 'react-router-dom';
import usePersonalDetails from '../utils/usePersonalDetails';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const PersonalDetails = ({title, number}) => {
    const personalInfo = usePersonalDetails();

    const {
        name,
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
        <ul className="flex justify-start items-start flex-wrap">
            <li className="mb-5 w-full sm:w-6/12 lg:w-6/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Email Id</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="mailto:sudhabnrj@gmail.com">sudhabnrj@gmail.com</Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Phone No</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="tel:+919836611154">9836611154</Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Gender</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    Male
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">LinkedIn Profile</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to="https://in.linkedin.com/in/sudhachandan-banerjee" target="_blank"><LinkedInIcon className="!w-10 !h-10" /></Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Github Profile</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    <Link to={html_url} target="_blank"><GitHubIcon className="!w-10 !h-10" /></Link>
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Current Company</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    {company}
                </h2>
            </li>
            <li className="mb-5 w-full sm:w-6/12 lg:w-3/12">
                <span className="font-medium text-slate-700 dark:text-slate-300 relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 dark:after:bg-slate-600 after:w-5 after:h-5 after:rounded-full after:-z-10">Location</span>
                <h2 className="text-stone-950 dark:text-slate-300 font-bold text-xl mt-0">
                    {location}
                </h2>
            </li>
        </ul>
    );
}
export default PersonalDetails;