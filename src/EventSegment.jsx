import React from 'react';
import { Row, Col, Tooltip, Collapse, Drawer, Button, Badge } from 'antd';
import Markdown from 'markdown-to-jsx';

const Panel = Collapse.Panel;

import dateHelper from './dateHelper';


export default function EventSegment(props){

    const events = props.events;
    const comments = props.comments;
    const showDrawer = props.showDrawer;

        return(
            <Row>
                <h2>Ereignisse { comments && comments.length>0 ? <span style={{float: "right"}} ><Badge count={comments.length} ><Button type="normal" onClick={showDrawer} >Ergänzende Informationen</Button></Badge></span> : "" }</h2>
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
                                        <Markdown>{event.beschreibung ? event.beschreibung : event.ereignistyp }</Markdown>, <Tooltip title={ event.ort.ortszusatz ? event.ort.ortszusatz 
                                            : "keine weiteren Angaben zum Ort" } >{event.ort.ortsname? event.ort.ortsname : ""}</Tooltip>
                                    </Col>
                                </Row>}
                        >
                        <Col offset={1}>
                            Art des Ereignisses: {event.ereignistyp ? <span> {event.ereignistyp} <br /></span> : ""}
                            {event.wettbewerbskontext ? <span>{"Wettbewerbskontext: " + event.wettbewerbskontext.join(", ")}<br /></span> : ""  }
                            {event.zeit.datumszusatz ? <span>{"Zusatz zum Datum: " + event.zeit.datumszusatz}<br /></span> : ""}
                            {event.ort.ortszusatz ? <span>{"Zusatz zum Ort: " + event.ort.ortszusatz}<br /></span> : ""}
                        </Col>
                        </Panel>
                    </Collapse>
                )}
                { comments && comments.length>0 && <Drawer 
                    title="Ergänzende Informationen zu den Ereignissen"
                    placement="right"
                    closable={false}
                    onClose={props.onClose}
                    visible={props.visible}
                    width="30%"
                    
                >
                    {comments.map( (comment, index) => <p key={index}><Markdown>{comment.text}</Markdown></p> )}
                </Drawer>}
            </Row>
        );
}