//React Component for the application layout
import React from 'react';
import Nav_Main from './nav-main';

export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Nav_Main/>
                <h2>It works, indeed, does it not</h2>
            </div>
        );
    }
}

