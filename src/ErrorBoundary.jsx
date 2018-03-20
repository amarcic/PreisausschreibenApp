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
                    <h1>Sie verwenden die Beta-Version dieser Webanwendung</h1>
                    <h2>leider ist etwas schiefgegangen... vermutlich ist die Entwicklung der aufgerufenen Funktion noch nicht abgeschlossen</h2>
                </div>;
        }
        return this.props.children;
    }
}