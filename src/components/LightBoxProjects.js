import React, {useState} from 'react';
import { unsplashPhotos } from '../utils/constents';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ImageGallery = () => {

    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
    //looping through our images array to create img elements
    const imageCards = unsplashPhotos.map((image, index) => (
        <li key={index} className="w-full md:w-1/2 lg:w-1/3 rounded-md p-4">
            <span className="cursor-pointer w-full h-[200px] relative">
                <img className="image-card aspect-square w-full object-cover h-[200px]" onClick={() => showImage(image)} src={image.thumbUrl} />
            </span>
            <h1 className="text-3xl my-4">{image.title}</h1>
            <p>
              {image.techStack.map((tech, index)=> {
                return(
                  <span className="font-normal text-slate-700 dark:text-slate-300 relative border border-stone-400 py-1 px-4 rounded-md dark:border-slate-700 mr-2" key={index}>{Object.values(tech)}</span>
                );
              })}
            </p>
        </li>      
    ));
  
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
      setImageToShow(image.largeSrc);
      setLightBoxDisplay(true);
    };
  
    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };
  
    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = unsplashPhotos.findIndex(img => img.largeSrc === imageToShow);
      console.log(currentIndex);
      if (currentIndex >= unsplashPhotos.length - 1) {
        setLightBoxDisplay(true);        
      } else {
        let nextImage = unsplashPhotos[currentIndex + 1];        
        setImageToShow(nextImage.largeSrc);
      }
      setLightBoxDisplay(true);
    };
  
    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = unsplashPhotos.findIndex(img => img.largeSrc === imageToShow);
      console.log(currentIndex);
      if (currentIndex > 0) {
        let prevImage = unsplashPhotos[currentIndex - 1];
        setImageToShow(prevImage.largeSrc);
      }
      //setLightBoxDisplay(true);
    };
    
  
    return (
      <>
        <ul className="flex justify-start items-stretch flex-wrap -m-4">
            {imageCards}
        </ul>
        
        {
          lightboxDisplay ? 
          <div id="lightbox">
            <button type='button' className="absolute top-2 right-2" onClick={hideLightBox}><ClearIcon/></button>
            <button className="bg-slate-700 text-slate-100 p-2 px-3 flex place-content-center text-center" onClick={showPrev}>
              <ArrowBackIosIcon/>
            </button>
                <img id="lightbox-img" src={imageToShow} className="aspect-auto"></img>
            <button className="bg-slate-700 text-slate-100 p-2 px-3 flex place-content-center text-center" onClick={showNext}>
              <ArrowForwardIosIcon/>
            </button>
          </div>
         : ""
        }
      </>
    );
}
export default ImageGallery;