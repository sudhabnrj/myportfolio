import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <section className="relative py-20 before:content[''] before:bg-orange-100 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="text-center">
                    <h1 className="block">Oops! you have entered an invalid URL</h1>
                    <h2 className="block">{err.status} - {err.statusText}</h2>
                    <Link className="text-lg mt-5 border border-slate-400 inline-block px-4 py-2 rounded-md" to="/">Back to Home</Link>
                </div>
            </div>
        </section>
    );
};
export default Error;