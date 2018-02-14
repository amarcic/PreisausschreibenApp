import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log("fehler: " + error, info);
    }

    render() {
        if(this.state.hasError) {
            return <h1>mmm... why did you do this?</h1>;
        }
        return this.props.children;
    }
}