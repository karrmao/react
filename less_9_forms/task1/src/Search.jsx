import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = event => {
    console.log(event.target.value);
    //set value to state ↓↓↓
    this.setState({ value: event.target.value });
  };
  //search btn↓↓↓
  search = event => {
    //cancel the default behavior↓↓↓
    event.preventDefault();
    //console.log(this.state.value);
    //console.log(`Wellcome ${this.state.value}`);
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
export default Search;
