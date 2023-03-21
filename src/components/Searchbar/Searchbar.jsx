import { Component } from "react";
import { Notify } from "notiflix";
import PropTypes from 'prop-types'; 
import { Search } from "react-bootstrap-icons";
import { SearchField, SearchForm, SearchFormBtn, SearchFormInput } from "./Searchbar.styled";

export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    onChange = ({ target }) => {
        this.setState({ inputValue: target.value })
    }

    onSubmitBtnClick = (e) => {
        e.preventDefault();

        const { onSubmit } = this.props;
        const { inputValue } = this.state;

        if (!inputValue) { 
            Notify.info('Please, enter a search query') }
        else {
            this.setState({ inputValue: '' })
            onSubmit(inputValue)}
    }
    render() {
        const { inputValue } = this.state;

        return <SearchField className="searchbar">
            <SearchForm onSubmit={this.onSubmitBtnClick}>
                <SearchFormBtn type="submit">
                    <Search  size={16}/>
                </SearchFormBtn>

                <SearchFormInput
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={inputValue}
                onChange={this.onChange}
                />
            </SearchForm>
        </SearchField>
    }
} 

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}