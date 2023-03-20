import { Component } from "react"
import { SearchField, SearchForm, SearchFormBtn, SearchFormInput } from "./Searchbar.styled"

export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    onChange = ({ target }) => {
        this.setState({ inputValue: target.value })
    }

    render() {
        const { onSubmit } = this.props;

        return <SearchField className="searchbar">
            <SearchForm onSubmit={(e) => onSubmit(e, this.state.inputValue)}>
                <SearchFormBtn type="submit">
                    <span>S</span>
                </SearchFormBtn>

                <SearchFormInput
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.onChange}
                />
            </SearchForm>
        </SearchField>
    }
} 