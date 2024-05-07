import AchivementSrc1 from '../assets/images/achivement1.jpg'
import AchivementSrc2 from '../assets/images/achivement2.jpg'
import AchivementSrc3 from '../assets/images/achivement3.jpg'
import MyGallery from './MyGallery';
import { Gallery } from 'react-photoswipe-gallery'

const Achivement = () => {
    return(
        <div className=" rounded-md lg:p-4 bg-orange-100 dark:bg-slate-800">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 lg:p-10">
                    <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-300">Outstanding performance in Frontend Development</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Codeclouds It Solutions Private Limited - 2023</p>
                    <p className="mt-4 text-gray-600 dark:text-slate-300 font-normal">In 2023, I was honored with an award for Outstanding Performance in Frontend Development, recognizing my dedication and expertise in crafting seamless user experiences through innovative technologies and meticulous attention to 
                    detail. 🌟 🏆</p>
                </div>
                <div className="w-full sm:w-4/12 mt-5 lg:mt-0">
                    <Gallery className="flex flex-wrap">
                        <div className="w-full mb-4">
                            <MyGallery originalsrc={AchivementSrc1} thumbnailSrc={AchivementSrc1} alt="Achivement" acctualWidth={800} acctualHeight={533} />
                        </div>
                        <div className="-m-1 flex">
                            <div className="w-2/4 m-1">
                                <MyGallery className="w-full mb-4" originalsrc={AchivementSrc2} thumbnailSrc={AchivementSrc2} alt="Achivement" acctualWidth={800} acctualHeight={597} />
                            </div>
                            <div className="w-2/4 m-1">
                                <MyGallery className="w-full mb-4" originalsrc={AchivementSrc3} thumbnailSrc={AchivementSrc3} alt="Achivement" acctualWidth={1050} acctualHeight={1920} />
                            </div>
                        </div>
                    </Gallery>
                </div>
            </div>
        </div>
    );
}

export default Achivement;