import React from 'react';
import { unsplashPhotos } from '../utils/constents';
import { Link } from 'react-router-dom';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LoadingImg from './LoadingImg';
const Projects = () => {

    return(
        <section className="relative py-10 md:py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Projects</span>
                        </h1>
                        <div className="rounded-md">
                            <ul className="flex justify-start items-stretch flex-wrap -m-4">
                            {unsplashPhotos.map((image, index) => (
                                <li key={index} className="w-full md:w-1/2 lg:w-1/3 rounded-md p-4 grid-full">
                                    <span className="cursor-pointer w-full h-[250px] relative block">
                                        <LoadingImg className="image-card aspect-square w-full object-cover h-[250px] block" src={image.thumbUrl} />
                                    </span>
                                    <h1 className="text-2xl my-4">
                                    {image.url ? <Link to={image.url} target="_blank" className='underline'>{image.title}<CallMadeIcon className='!w-4 !h-4'/></Link> : image.title}
                                    </h1>
                                    <div className='flex flex-wrap justify-start items-start'>
                                    {image.techStack.map((tech, index)=> {
                                        return(
                                        <span className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700 mr-2 mb-2" key={index}>{Object.values(tech)}</span>
                                        );
                                    })}
                                    </div>
                                </li>     
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;