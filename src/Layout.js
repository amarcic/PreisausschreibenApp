//React Component for the application layout
import React from 'react';
//import 'w3-css/w3.css';

import Body from './Body';
import Header_Container from './Header-Container';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            header: {
                header_title: {
                    main_title: "Musikalische Preisausschreiben 1825 bis 1826",
                    subtitle: "Grundriss, Datenbank und Bibiografie auf Grundlage von Musikperiodika"
                },
                headerStyle: { w3class: "w3-container w3-black" }
            }
        };
    }
    getTitle() {
        return this.state.header.header_title;
    }

    render() {
        return(
            <div>
                <Header_Container getTitle={this.getTitle.bind(this)} />
                <Body/>
                <Sidebar navItems={["first", "second", "third"]} />
                <Footer/>
            </div>
        );
    }
}

