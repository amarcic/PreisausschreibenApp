//React Component for the application layout
import React from 'react';
//import 'w3-css/w3.css';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: {
                title: "Musikalische Preisausschreiben 1825 bis 1826",
                subtitle: "Grundriss, Datenbank und Bibiografie auf Grundlage von Musikperiodika"
            },
            headerStyle: { w3class: "w3-container w3-black" }
        };
    }

    render() {
        return(
            <div>
                <Header text={this.state.headerText} />
                <Body/>
                <Footer/>
            </div>
        );
    }
}

