import React from "react";

import Nav_Main from './nav-main';
import Title from './Title';

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <Title title={this.props.title} subtitle={this.props.subtitle} />
                <Nav_Main/>
            </div>
        );
    }
}