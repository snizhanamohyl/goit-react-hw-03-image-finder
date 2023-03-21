import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';


export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    }

    onClick = () => {
        this.toggleModal();
    }

    render() {
        const { id, webformatURL, largeImageURL, tags } = this.props.item;
        const { showModal } = this.state;

        return <>
            {showModal && <Modal closeModal={this.toggleModal} imgURL={largeImageURL} tags={tags } />}
            <GalleryItem key={id} >
                <GalleryItemImg src={webformatURL} alt={tags} onClick={this.onClick}/>
            </GalleryItem>
        </>
    }
}
