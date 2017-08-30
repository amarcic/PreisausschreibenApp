// Component for main navigation element
import React from 'react';
import Nav_Button from './Nav-Button';

export default class Nav_Main extends React.Component {
    constructor() {
        super();
        this.btn1text = "people";
        this.btn2text = "other";
    }
    render() {
        return (
            <div>
                <span><Nav_Button btn_label={this.btn1text}/><Nav_Button btn_label={this.btn2text}/></span>
            </div>
        );
    }
}