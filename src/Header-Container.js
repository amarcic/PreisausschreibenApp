import React from 'react';
import Header from'./Header';

export default class Header_Container extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: this.props.getTitle(),
            navi: { nav_btn_labels: [ 'leude', 'zeug' ] }
        }
    }
    render() {
        return(
            <Header title={this.state.title} nav={this.state.navi} />
        );
    }
    
}