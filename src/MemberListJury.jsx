import React from 'react';
import { Row, Col, List, Tooltip, Icon, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

//export default function MemberListJury( props ) {
//    console.log(props);
export default class MemberListJury extends React.Component {
    //const juryMembers = props.juryMembers;
    //const comments = props.comments.map( comment => comment.text ).join('\n');
    constructor( props ) {
        super( props );
        //console.log( "data: " + JSON.stringify(props) );
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

    render() {
        console.log("comments: " + this.props.comments.length)
       // console.log("comments:"+ JSON.stringify(this.state.comments) );
       //let comments = this.state.comments;
    return(
        <Row>
            <List 
                header={<h3>Jury { this.props.comments && this.props.comments.length>0 ? <Button type="normal" onClick={this.showDrawer} >Kommentare</Button> : "" }</h3>}
                grid={{column: 2}}
                size="small"
                dataSource={this.props.juryMembers}
                renderItem = { item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta 
                                title={<span><Link to={"/dokumente/" + item.identifier[0]} >{item.name}</Link></span>}
                                description={item.anmerkung}
                            />
                        </List.Item>
                    </Col>
                }
            />
            <Drawer 
                title="Kommentare zur Jury"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                
            >
                {this.props.comments.map( comment => comment.text ).join('\n')}
            </Drawer>
        </Row>
    );
}}
// <Tooltip title={comments} ><Icon type="plus-square" theme="outlined" /></Tooltip> : ""