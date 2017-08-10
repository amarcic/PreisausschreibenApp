// Component for main navigation element
import React from 'react';

export default class Nav_Main extends React.Component {
    constructor() {
        super();
        this.btn1text = "people";
        this.btn2text = "other";
    }
    render() {
        return (
            <div>
                <span><Nav-Button btn_label={this.btn1text}/><button>{this.btn2text}</button></span>
            </div>
        );
    }
}