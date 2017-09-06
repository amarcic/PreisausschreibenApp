import React from "react";
import { DatePicker, message, Button } from 'antd';


export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }

    handleChange(date) {
        message.info('Selected Date: ' + date.toString());
        this.setState({ date });
    }

    render() {
        return (
            <div>
                this is my beautiful body <br/>
                it's rather spectral at this point in time:
                <DatePicker />
                <Button>hello</Button>
            </div>
        );
        
    }
}