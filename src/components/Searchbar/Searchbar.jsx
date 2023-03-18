import { Component } from "react"

export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    onChange = ({ target }) => {
        this.setState({ inputValue: target.value })
    }

    render() {
        const { onSubmit } = this.props;

        return <header className="searchbar">
            <form className="form" onSubmit={(e) => onSubmit(e, this.state.inputValue)}>
                <button type="submit" className="button" >
                    <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.onChange}
                />
            </form>
        </header>
    }
} 