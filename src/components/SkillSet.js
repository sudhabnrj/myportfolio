const SkillSet = ({exp, name}) => {
    return(
        <>
            <span className="font-medium text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700">
                {name} - <strong>{exp}</strong>
            </span>
        </>
    );
}

export default SkillSet;