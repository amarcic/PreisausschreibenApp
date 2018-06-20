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
                    <Col>
                        <List.Item>
                            <List.Item.Meta
                                title={item.name + ( item.leistungen ? ", mit: " + item.leistungen : "" ) }
                            />
                        </List.Item>
                    </Col>
                }            
            />
        </Row>
    );
}