import React, {PureComponent} from 'react';
import css from '../../style.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends PureComponent {
    state = {
        inputText: ''
    }
    handleInput = e => {
        this.setState({
            inputText: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        const {inputText} = this.state;
        onSubmit(inputText)
        this.setState({
            inputText: ''
        })
    }
    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                    value={this.state.inputText}
                    onChange={this.handleInput}
                    className={css.SearchFormInput}
                    type="text"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}