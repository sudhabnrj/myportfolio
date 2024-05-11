const WorkExpList = ({designation, companyName, summary, joiningDate, lastWorkingDate, currentlyWorking}) => {
    return(
        <li className="flex flex-col relative pl-4 lg:pl-20 before:content-[''] before:absolute before:left-[-4px] before:w-2 before:h-2 before:rounded-full before:top-0 before:bg-black dark:before:bg-slate-700 mb-14">
            <h2 className="mb-4 flex flex-col sm:flex-row justify-between sm:items-center">
                <span className="font-bold text-xl">{designation}</span>
                <span className="text-slate-700 dark:text-slate-300">
                    {joiningDate} {lastWorkingDate ? `- ${lastWorkingDate}` : ''}
                    {currentlyWorking ? '- Present' : ''}
                </span>
            </h2>
            <h3 className="mb-4 flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="font-bold">{companyName}</span>
                {/* <span className="">{experience} Years</span> */}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 font-normal pl-5">
                {summary}
            </p>
        </li>
    );
}
export default WorkExpList;