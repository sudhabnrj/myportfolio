const Certification = ({title, issueBy, issueDate}) => {
    return(
        <div className="w-full mb-4">
            <h3 className="font-bold text-xl mb-3">{title}</h3>
            <p>{issueBy}</p>
            <span className="mt-4 text-gray-600">Issued {issueDate}</span>
        </div>
    );
}
export default Certification;