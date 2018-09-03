import React from 'react';
import { Row, Col, Tooltip, Collapse, Icon} from 'antd';

const Panel = Collapse.Panel;

import dateHelper from './dateHelper';

export default function EventsList( props ) {

    const events = props.events;
    const comments = props.comments.map( comment => comment.text ).join('\n');
//    console.log(comments);

        return(
            <Row>
                <h3>Ereignisse { comments ? <Tooltip title={comments} ><Icon type="plus-square" theme="outlined" /></Tooltip> : "" }</h3>
                {events.map( (event, i) =>
                    <Collapse bordered={false} key={i}>
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
            </Row>
        );
    }
//}