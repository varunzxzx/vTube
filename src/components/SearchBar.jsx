import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return(
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search here..." onChange={(event) => {this.props.onInputChange(event.target.value)}}/>
      </div>
    );
  }
}

export default SearchBar;
