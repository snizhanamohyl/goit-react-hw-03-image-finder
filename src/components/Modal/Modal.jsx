import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'; 
import { Overlay, ModalWindow } from "./Modal.styled";

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component  {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown )
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        const { closeModal } = this.props; 
        
        if (e.code === 'Escape') {
            closeModal();
        }
    }

    handleBackdropClick = (e) => {
        const { closeModal } = this.props; 

        if (e.currentTarget === e.target) {
            closeModal();
        }
    }

    render() {
        const {imgURL, tags} = this.props;

        return createPortal(<Overlay onClick={this.handleBackdropClick}> 
            <ModalWindow>
                <img src={imgURL} alt={tags} width="900px"/>
            </ModalWindow>
        </Overlay>, modalRoot)
    }  
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    imgURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
}
