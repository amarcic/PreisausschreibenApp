import React from 'react';
import { Row, Col, Collapse, Drawer, Button } from 'antd';

import OverviewSection from "./OverviewSection";
import Tasks from './Tasks';
import TaskTabs from './TaskTabs';

const Panel = Collapse.Panel;

export default function OverviewTaskSegment( props ) {

    const formalia = props.formalia;
    const comments = props.comments;
    const showDrawer = props.showDrawer;

    return(
        <Row>
            <Col>
                <OverviewSection occasion={props.occasion} duration={props.duration} place={props.place} tender={props.tender} series={props.series} pAmount={props.pAmount} taskTypes={props.taskTypes} />
                
                { comments && comments.length>0 ? <span style={{float: "right"}} ><Button type="normal" onClick={showDrawer} >Ergänzende Informationen</Button></span> : "" }

                { props.subcompetitions
                            ? <div style={{marginTop: 50}}><h3>Aufgaben nach Teilwettbewerb</h3><TaskTabs tasks={props.tasks} subcompetitions={props.subcompetitions} conditions={props.conditions} formalia={props.formalia} /></div>
                            : <div style={{marginTop: 50}}><h3>Aufgaben</h3><Tasks tasks={props.tasks} conditions={props.conditions} formalia={props.formalia} /></div> }
                
                { formalia && 
                    <Collapse bordered={false}>
                        <Panel header={"Formalia"} >
                                <Row>
                                    <Col span={20} offset={1}>
                                        {formalia}
                                    </Col>
                                </Row>
                        </Panel>
                    </Collapse>
                }
                { comments && comments.length>0 && <Drawer 
                        title="Ergänzende Informationen zum Preisausschreiben allgemein, zu Aufgaben und Teilnehmerzahlen"
                        placement="right"
                        closable={false}
                        onClose={props.onClose}
                        visible={props.visible}
                        width="30%"
                        
                    >
                        {comments.map( (comment, index) => <p key={index}>{comment.text}</p> )}
                    </Drawer> }
            </Col>
        </Row>
    );

}