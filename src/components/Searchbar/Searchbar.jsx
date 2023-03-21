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
        const { inputValue } = this.state;

        return <SearchField className="searchbar">
            <SearchForm onSubmit={(e) => {
                this.setState({ inputValue: '' })
                onSubmit(e, inputValue)
            }}>
                <SearchFormBtn type="submit">
                    <span>S</span>
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