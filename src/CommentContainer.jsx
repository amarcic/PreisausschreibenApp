import React from 'react';

export default class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    showDrawer() {
        this.setState( { visible: true} );
    }

    onClose() {
        this.setState( {visible: false} );
    }

    render() {}
}