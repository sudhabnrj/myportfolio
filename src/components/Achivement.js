import AchivementSrc1 from '../assets/images/achivement1.jpg'
import AchivementSrc2 from '../assets/images/achivement2.jpg'
import AchivementSrc3 from '../assets/images/achivement3.jpg'

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
                    <div className="flex flex-wrap">
                        <div className="w-full mb-4">
                            <img src={AchivementSrc1} alt="Achivement 1" className="w-full aspect-video object-cover" />
                        </div>
                        <div className="-m-1 flex">
                            <div className="w-2/4 m-1">
                                <img src={AchivementSrc2} alt="Achivement 1" className="w-full aspect-video object-cover" />
                            </div>
                            <div className="w-2/4 m-1">
                                <img src={AchivementSrc3} alt="Achivement 1" className="w-full aspect-video object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achivement;