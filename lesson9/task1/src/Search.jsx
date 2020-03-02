import React, { Component } from 'react';

class Search extends Component {
    state = { value: '' }

    onInputChange = event => {
     
        this.setState({ value: event.target.value })
    }

    search = event => {
        event.preventDefault();
        alert(`Search text: ${this.state.value}`);
    }
    
    
    render() {
        return (
            <form className="search" onSubmit={this.search}>
                <input type="text"
                    onChange={this.onInputChange}
                    value={this.state.value}
                    className="search__input"
                />
                <button className="search__button" type="submit">Search</button>
            </form>

        );
    }
}

export default Search;