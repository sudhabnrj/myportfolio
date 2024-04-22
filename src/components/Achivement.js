import AchivementSrc1 from '../assets/images/achivement1.jpg'
import AchivementSrc2 from '../assets/images/achivement2.jpg'
import AchivementSrc3 from '../assets/images/achivement3.jpg'

const Achivement = () => {
    return(
        <div className=" rounded-md lg:p-4 bg-orange-100 dark:bg-slate-800">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 lg:p-10">
                    <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-300">Title</h3>
                    <p>Sub title</p>
                    <p className="mt-4 text-gray-600 dark:text-slate-300 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates quam quo illum hic, eum omnis cumque vel reiciendis aliquid, in nulla! Minus, voluptas dignissimos fugiat minima asperiores, at quaerat assumenda nobis distinctio blanditiis earum. Ad repellat quidem dicta, impedit ipsa rem delectus facilis reiciendis. Temporibus a rem incidunt necessitatibus.</p>
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