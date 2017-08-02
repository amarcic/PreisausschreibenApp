//React Component for the application layout
import React from 'react';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Musikalische Preisausschreiben 1825 bis 1826",
            subtitle: "Grundriss, Datenbank und Bibiografie auf Grundlage von Musikperiodika"
        };
    }

    changeTitle( title ) {
        this.setState({title});
    }

    render() {
        return(
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} subtitle={this.state.subtitle} />
                <Body/>
                <Footer/>
            </div>
        );
    }
}

