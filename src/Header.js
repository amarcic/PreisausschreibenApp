import React from "react";

import Nav_Main from './nav-main';
import Title from './Title';

export default class Header extends React.Component {
    handleChange( e ) {
            const title = e.target.value;
            this.props.changeTitle( title );
    }
    render() {
        return(
            <div>
                <Title title={this.props.title} subtitle={this.props.subtitle} />
                <Nav_Main/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}