import React from 'react';

import ImageGallery from './LightBoxProjects';

const Projects = () => {

    return(
        <section className="relative py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col justify-between items-start">
                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Projects</span>
                        </h1>
                        <div className="rounded-md">
                            <ImageGallery />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;