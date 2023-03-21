import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({galleryItems}) {     
    return <Gallery>
        {galleryItems.map((item) => <ImageGalleryItem key={item.id} item={item} />)}
        </Gallery> 
}

ImageGallery.propTypes = {
    galleryItems: PropTypes.arrayOf(PropTypes.object)
}
