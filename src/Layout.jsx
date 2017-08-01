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

    render() {
        return(
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Body/>
                <Footer/>
            </div>
        );
    }
}

