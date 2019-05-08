import React from 'react';
import { Row, Col, List, Tooltip, Icon, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

//export default function MemberListJury( props ) {
//    console.log(props);
export default function MemberListJury (props) {
    //const juryMembers = props.juryMembers;
    //const comments = props.comments.map( comment => comment.text ).join('\n');

    return(
        <Row>
            <List 
                header={<h3>Jury { props.comments && props.comments.length>0 ? <Button type="normal" onClick={props.showDrawer} >Kommentare</Button> : "" }</h3>}
                grid={{column: 2}}
                size="small"
                dataSource={props.juryMembers}
                renderItem = { item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta 
                                title={<span><Link target="_blank" to={"/dokumente/" + item.identifier[0]} >{item.name}</Link></span>}
                                description={item.anmerkung}
                            />
                        </List.Item>
                    </Col>
                }
            />
            { props.comments && props.comments.length>0 && <Drawer 
                title="Kommentare zu Jury und Beurteilung"
                placement="right"
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
                width="30%" 
            >
                {props.comments.map( (comment, index) => <p key={index}>{comment.text}</p> )}
            </Drawer>}
        </Row>
    );
}
// <Tooltip title={comments} ><Icon type="plus-square" theme="outlined" /></Tooltip> : ""