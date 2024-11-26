import { useState, useEffect } from 'react';
import {workData } from '../utils/constents';
//import Education from './Education';
import WorkExpList from './WorkExpList';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Work = () => {

    const [workExp, setWorkExp] = useState(0);

    useEffect(()=> {
        handleExperience();
    }, [])

    function handleExperience(){
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        let totalExp = 0;

        //console.log(year);
        
       workData.forEach((dataItem)=> {
            let joinDate = new Date(dataItem.joiningDate);
            //console.log(joinDate);
            
            const endDate = dataItem.currentlyWorking ? new Date() : new Date(dataItem.lastDate);
            const diff = endDate.getTime() - joinDate.getTime();

            //console.log(diff / year);

            totalExp += diff / year;

            //console.log(totalExp);
       });

       setWorkExp(parseFloat(totalExp.toFixed(2)));        
    }

    return(
        <section className="relative py-10 md:py-20 z-10 before:content[''] before:bg-orange-100 dark:before:bg-slate-800 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:-z-10 before:rounded-tl-none before:rounded-tr-none before:rounded-bl-full before:rounded-br-none">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
                        <h1 className="flex justify-between items-center text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                            <span>Work History</span>
                            <span className="font-medium text-xl lg:text-3xl relative z-10 after:content-[''] after:absolute after:-top-2 after:-right-2 after:bg-yellow-300 after:w-5 after:h-5 after:rounded-full after:-z-10">{workExp} Years</span>
                        </h1>
                        <ul className="border-l border-stone-600 dark:border-slate-700">
                            {workData.map((listData) => (
                                
                                <WorkExpList 
                                    key={listData.id} 
                                    designation={listData.designation} 
                                    companyName={listData.companyName} 
                                    summary={listData.summary.map((item)=> (<span className='block w-full mb-3 relative'><KeyboardArrowRightIcon className='absolute left-[-30px] top-0' />{item?.text}</span>))} joiningDate={listData.joiningDate} lastWorkingDate={listData.lastDate} currentlyWorking={listData.currentlyWorking} 
                                />
                            ))}                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Work;