import LoadingImg from './LoadingImg';
const TechStack = ({techLogo, name}) => {
    return(
        <li className="mb-3 border border-stone-300 dark:border-slate-700 rounded-md flex flex-col justify-center items-center p-4 min-w-[120px] transition-all hover:translate-x-0 hover:translate-y-[-6px] hover:scale-105 hover:bg-stone-50 dark:hover:bg-transparent cursor-pointer">
            <LoadingImg src={techLogo} alt={name} className="w-[60px]" />
            <span className="mt-auto">{name}</span>
        </li>
    );
}
export default TechStack;