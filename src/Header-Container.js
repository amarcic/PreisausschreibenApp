import React from 'react';
import Header from'./Header';

//it's likely I don't need the header container, since the header itself does not
//need state (data that changes over time). If components like the search bar need 
//state, they can bring their containers
//I am not even saving much propagation of props
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