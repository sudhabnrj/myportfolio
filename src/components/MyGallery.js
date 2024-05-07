import 'photoswipe/dist/photoswipe.css'
import { Item } from 'react-photoswipe-gallery'
const MyGallery = ({originalsrc, thumbnailSrc, alt, acctualWidth, acctualHeight}) => {
    return(
        
        <Item
            
            original={originalsrc}
            thumbnail={thumbnailSrc}
            width={acctualWidth}
            height={acctualHeight}
            >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src={thumbnailSrc} alt={alt} className="cursor-pointer w-full aspect-video object-cover" />
            )}
        </Item>
    );
};

export default MyGallery;