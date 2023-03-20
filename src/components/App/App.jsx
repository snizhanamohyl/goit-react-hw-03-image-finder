import { Component } from "react";
import { fetchImages } from "services/api";
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {AppContainer} from './App.styled'

export default class App extends Component {
    state = {
        query: '',
        hits: [],
        status: '',
    }

    onSubmit = (e, value) => {
        e.preventDefault();
        this.setState({ query: value })

        fetchImages(value)
            .then(({ hits }) => {
                if (hits.length === 0) throw new Error('Упс');
                this.setState({ hits, status: 'ok' })
                console.log('fetchImages', hits);
            }).catch(error => console.log(error));

    }

    render() {
        const { query,status,hits } = this.state;

        return <AppContainer>
            <Searchbar onSubmit={this.onSubmit} />
            
            {status === 'ok' && <ImageGallery galleryItems={hits} />}
        </AppContainer>
    }
}