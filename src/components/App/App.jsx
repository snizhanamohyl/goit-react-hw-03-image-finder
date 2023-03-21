import { Component } from "react";

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Loader from 'components/Loader/Loader'
import Button from "components/Button/Button";
import SearchImages from 'services/api'
import { AppContainer } from './App.styled'

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',    
}

const noResultsMsg = 'We haven’t found images for your request';

const searchImages = new SearchImages();

export default class App extends Component {
    state = {
        hits: [],
        error: '',
        status: STATUS.IDLE,
        showBtn: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const { status } = this.state;

        if (prevState.status !== status && status === STATUS.PENDING) {
            setTimeout(() => {
                searchImages.fetchImages()
            .then(({ hits }) => {
                if (hits.length === 0) throw new Error(noResultsMsg);
                
                const endOfGallery = (hits.length < 12);
                    
                this.setState((prevState) =>
                    ({ hits: [...prevState.hits, ...hits], showBtn: !endOfGallery }))
                
            }).catch(error => { 
                this.setState({ error: error.message, status: STATUS.REJECTED, showBtn: false })
            })
            .finally(this.setState({ status: STATUS.RESOLVED }))
            }, 1000)
        }
    }

    onSubmit = (e, value) => {
        e.preventDefault();

        this.setState({ hits: [], status: STATUS.PENDING, error: ''  })

        searchImages.query = value;
        searchImages.page = 1;
    }

    onClick = () => {
        searchImages.page += 1;

        this.setState({ status: STATUS.PENDING, error: '' })
    }

    render() {
        const { hits, error, showBtn, status } = this.state;
        
        return <AppContainer>
            <Searchbar onSubmit={this.onSubmit} />
            {(status === STATUS.RESOLVED) && <ImageGallery galleryItems={hits} />}
            {(status === STATUS.PENDING) && <Loader></Loader>}
            {(status === STATUS.REJECTED) && (error === noResultsMsg ? <div>{error}</div> : <div>Something went wrong</div>)}
            {showBtn && <Button onClick={this.onClick} disabled={status === STATUS.PENDING}></Button>}
        </AppContainer>
    }
}