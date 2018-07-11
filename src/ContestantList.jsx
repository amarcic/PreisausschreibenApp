import React from 'react';
import { Row, Col, List } from 'antd';
import { Link } from 'react-router-dom';

export default function ContestantList( props ) {

    const contestants = props.contestants;
    console.log(contestants);

    return (
        <Row>
            <List 
                header={<div><h3>Weitere TeilnehmerInnen</h3></div>}
                grid={ {column: 2} }
                dataSource={ contestants /*.filter( contestant => !contestant.hasOwnProperty('ranks') )*/ }
                renderItem={ item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta
                                title={item.name + ( item.leistungen ? ", mit: " + item.leistungen : "" ) }
                                description={ item.kollaboration? " Gemeinsam teilgenommen mit: " + item.kollaboration.map( coll => contestants.find( contestant => contestant.identifier[0]===coll ).name  ).join(", ")
                                /*reason for the problem is the following: this component does only 
                                have access to participants; but a collaboration can include people who did not directly participate (i.e. a teacher);
                                I can simply not filter out non-participants... but that is odd, too*/
                                : "" }
                            />                            
                        </List.Item>
                    </Col>
                }            
            />
        </Row>
    );
}