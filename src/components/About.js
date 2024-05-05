import PersonalDetails from './PersonalDetails';
import { getSkills, educationData, certificationData } from '../utils/constents';
import TechStack from './TechStack';
import Education from './Education';
import Achivement from './Achivement';
import Certification from './Certification';
import {Link} from 'react-router-dom';

const About = () => {
    
    return(
        <section className="relative py-10 md:py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Personal Details </span>
                        </h1>
                        <p className='font-normal mb-5 text-stone-900 dark:text-slate-300'>I am employed full-time as a Senior HTML Developer at Codeclouds IT Solutions Private Limited, with 9 years of experience in Frontend Technologies including HTML5, CSS3, JavaScript, React JS, Bootstrap, and proficiency in design tools such as Photoshop, Adobe XD, Figma, as well as build tools like Parcel and version control systems like GitHub. Additionally, I possess knowledge in WordPress, WooCommerce, SCSS, and Material Design. As a quick and focused learner, I actively seek opportunities to enhance my skills, ensuring high-quality work and readiness to undertake additional responsibilities.</p>
                        <div className="border border-yellow-300 rounded-md p-4">
                            <PersonalDetails/>
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
                                        <Certification key={data.id} title={data.title} issueBy={data.issue_by} issueDate={data.issue_date} />
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