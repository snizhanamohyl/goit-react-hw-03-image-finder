// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
function ImageGalleryItem({ item }) {
    const {webformatURL,largeImageURL } = item;

    return <li className="gallery-item"><img src={webformatURL} alt="hbkb" /></li>
}

export default function ImageGallery({galleryItems}) {     
    return <ul className="gallery">{ galleryItems.map((item) => <ImageGalleryItem key={item.id} item={item}/>)}</ul>
} 