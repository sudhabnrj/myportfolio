const Certification = ({title, issueBy, issueDate}) => {
    return(
        <div className="w-full mb-5">
            <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-300">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-4">{issueBy}</p>
            <span className="block mt-4 text-slate-700 dark:text-slate-500">Issued {issueDate}</span>
        </div>
    );
}
export default Certification;