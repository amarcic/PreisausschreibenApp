import React from 'react';
import { Row, Col, List, Button, Drawer, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

//import RouteById from "./RouteById";
//import withPromise from "./withPromise";

export default function ContestantList( props ) {

    const contestants = props.contestants;
    const comments = props.comments || [];
    const showDrawer = props.showDrawer;
//    const RouteWithPromise = withPromise( RouteById );
//    console.log("contestants: " + JSON.stringify(contestants.filter( cont => cont.kollaboration)) );

    return (
        <Row style={{ padding: "20px"}}>
            <List 
                header={<div><h3>Weitere <Tooltip title="Glossareintrag: Teilnehmer">TeilnehmerInnen</Tooltip> {comments && comments.length>0 ? <Button type="normal" onClick={showDrawer} >Kommentare</Button> : "" }</h3></div>}
                grid={ {column: 2} }
                dataSource={ contestants /*.filter( contestant => !contestant.hasOwnProperty('ranks') )*/ }
                renderItem={ item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta
                                title={<span><Link to={"/dokumente/" + item.identifier[0]}>{item.name}</Link>{( item.leistungen ? ", mit: " + item.leistungen : "" )}</span>}
                                //{<span><RouteWithPromise query={item.identifier[0]} text={item.name} />{item.leistungen ? ", mit: " + item.leistungen : "" } </span>} 
                                //{item.name + ( item.leistungen ? ", mit: " + item.leistungen : "" ) }
                                description={ item.kollaboration ? " Gemeinsam teilgenommen mit: " + item.kollaboration.map( coll =>  contestants.find( contestant => contestant.identifier[0]===coll ) ? contestants.find( contestant => contestant.identifier[0]===coll ).name : "Eingabefehler"  ).join(", ")
                                /*reason for the problem is the following: this component does only 
                                have access to participants; but a collaboration can include people who did not directly participate (i.e. a teacher);
                                I can simply not filter out non-participants... but that is odd, too*/
                                : "" }
                            />                            
                        </List.Item>
                    </Col>
                }            
            />
            { comments && comments.length>0 && <Drawer 
                    title="Kommentare zu den TeilnehmerInnen"
                    placement="right"
                    closable={false}
                    onClose={props.onClose}
                    visible={props.visible}
                    width="30%"
                    
                >
                    {comments.map( (comment, index) => <p key={index} >{comment.text}</p> )}
                </Drawer>}
        </Row>
    );
}