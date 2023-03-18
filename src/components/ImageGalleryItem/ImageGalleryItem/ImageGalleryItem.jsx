export default function ImageGalleryItem({ item }) {
    const {id, webformatURL,largeImageURL } = item;

    return <li key={id} className="gallery-item"><img src={webformatURL} alt="hbkb" /></li>
}
