import MyGallery from './MyGallery';
import { Gallery } from 'react-photoswipe-gallery'
const Certification = ({title, issueBy, issueDate, imgSrc, width, height}) => {
    return(
        <div className="w-full mb-5 flex justify-between items-center">
            <div>
                <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-300">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-4">{issueBy}</p>
                <span className="block mt-4 text-slate-700 dark:text-slate-500">Issued {issueDate}</span>
            </div>
            <div className="w-32 h-[72px] bg-slate-600 rounded-md">
                <Gallery>
                    <MyGallery originalsrc={imgSrc} thumbnailSrc={imgSrc} alt={title} acctualWidth={width} acctualHeight={height}/>
                </Gallery>
                {/* <img className="w-full h-full object-cover rounded-md cursor-pointer" alt={title} src={src} /> */}
            </div>
        </div>
    );
}
export default Certification;