import React from 'react';
import { Row, Col, Tooltip, Collapse, Drawer, Button } from 'antd';
//import EventItem from './EventItem';
//import { Link } from 'react-router-dom';
const Panel = Collapse.Panel;

import dateHelper from './dateHelper';


export default class EventsList extends React.Component {
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

    render() {

//export default function EventsList( props ) {

    const events = this.props.events;
    const comments = this.props.comments;

        return(
            <Row>
                <h3>Ereignisse { comments && comments.length>0 ? <Button type="normal" onClick={this.showDrawer} >Kommentare</Button> : "" }</h3>
                {events.map( event =>
                    <Collapse bordered={false}>
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
                            {event.wettbewerbskontext ? "Wettbewerbskontext: " + event.wettbewerbskontext : ""  }
                        </Col>
                        </Panel>
                    </Collapse>
                )}
                <Drawer 
                    title="Kommentare zur Jury"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    
                >
                    {comments.map( comment => comment.text ).join('\n')}
                </Drawer>
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
}