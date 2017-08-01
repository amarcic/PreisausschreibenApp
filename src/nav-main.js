// Component for main navigation element
import React from 'react';

export default class Nav_Main extends React.Component {
    constructor() {
        super();
        this.text = "the navigation goes heres";
    }
    render() {
        return (
            <div>
                <span>{this.text}</span>
            </div>
        );
    }
}