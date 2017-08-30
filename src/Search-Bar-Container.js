import React from 'react';
import SearchBar from './Search-Bar';

export default class Search_Bar_Containter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchString: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchString: event.target.value.toLowerCase().trim()});
    }

    handleSubmit(event) {
        alert('searching for ' + this.state.searchString + "...");
        event.preventDefault();
    }

    render() {
        return(
            <SearchBar value={this.state.searchString} change={this.handleChange} submit={this.handleSubmit} />
        );
    }
}