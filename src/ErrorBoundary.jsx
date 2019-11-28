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
                return <div>
                        <h1>Leider ist ein Fehler aufgetreten.</h1>
                        <h2>Falls das Problem bestehen bleibt, wenden Sie sich bitte an <a href="https://musikwissenschaft.phil-fak.uni-koeln.de/11591.html">die Projektverantwortlichen</a>.</h2>
                </div>;
            }
            return this.props.children;
    }
}