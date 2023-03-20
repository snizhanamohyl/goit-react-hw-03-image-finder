import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ item }) {
    const {id, webformatURL, largeImageURL } = item;

    return <GalleryItem key={id} ><GalleryItemImg src={webformatURL} alt="image" /></GalleryItem>
}
