// import userAvatar from '../assets/images/user.png';
import { getSkills } from '../utils/constents';
import usePersonalDetails from '../utils/usePersonalDetails';

import Banner from './Banner';
import extremeMobile from '../assets/images/extreme-mobile.png';


const Home = () => { 
    
    const personalInfo = usePersonalDetails();

    const {
        name,
        bio,
    } = personalInfo;

    return(
        <>
            <section className="relative py-10 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none overflow-x-hidden">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className='flex flex-col justify-center lg:justify-start w-full lg:w-4/12 mt-10 p-0'>
                            <img src={extremeMobile} className='extremeMobile' />
                            <Banner/>
                        </div>
                        <div className="flex flex-col w-full lg:w-8/12 mt-10 rounded-md lg:p-5 pt-0 lg:pl-14">
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
        </>
        
    );
}
export default Home;