import React from 'react';
import { Row, Col, Tooltip, Collapse, Drawer, Button } from 'antd';
//import EventItem from './EventItem';
//import { Link } from 'react-router-dom';
const Panel = Collapse.Panel;

import dateHelper from './dateHelper';


export default function EventsList(props){

    const events = props.events;
    const comments = props.comments;
    const showDrawer = props.showDrawer;

        return(
            <Row>
                <h3>Ereignisse { comments && comments.length>0 ? <Button type="normal" onClick={showDrawer} >Kommentare</Button> : "" }</h3>
                {events.map( (event,index) =>
                    <Collapse bordered={false} key={index} >
                        <Panel
                            header={
                                <Row>
                                    <Col offset={0} span={5}>
                                        <Tooltip title={ event.zeit.datumszusatz? event.zeit.datumszusatz : "keine weiteren Angaben zum Datum" }>
                                        {event.zeit.datum? dateHelper(event.zeit.datum): 
                                            ( event.zeit.von ? dateHelper(event.zeit.von) + ( event.zeit.bis ?
                                                                                        " - " + dateHelper(event.zeit.bis) : " - ..."  )  
                                                    : "" ) }
                                        </Tooltip>
                                    </Col>
                                    <Col>
                                        {event.beschreibung ? event.beschreibung : event.ereignistyp }, <Tooltip title={ event.ort.ortszusatz ? event.ort.ortszusatz 
                                            : "keine weiteren Angaben zum Ort" } >{event.ort.ortsname? event.ort.ortsname : ""}</Tooltip>
                                    </Col>
                                </Row>}
                        >
                        <Col offset={1}>
                            Art des Ereignisses: {event.ereignistyp ? <span> {event.ereignistyp} <br /></span> : ""}
                            {event.wettbewerbskontext ? "Wettbewerbskontext: " + event.wettbewerbskontext.join(", ") : ""  }
                        </Col>
                        </Panel>
                    </Collapse>
                )}
                { comments && comments.length>0 && <Drawer 
                    title="Kommentare zu den Ereignissen"
                    placement="right"
                    closable={false}
                    onClose={props.onClose}
                    visible={props.visible}
                    width="30%"
                    
                >
                    {comments.map( (comment, index) => <p key={index}>{comment.text}</p> )}
                </Drawer>}
            </Row>
        );
            {/*<List 
                dataSource={this.state.events}
                renderItem={ item =>
                    <List.Item>
                        <EventItem eventType={item.ereignistyp} date={item.zeit} location={item.ort} desciption={item.beschreibung} context={item.wettbewerbskontext} />
                    </List.Item>
                
            />}
        )*/}
}