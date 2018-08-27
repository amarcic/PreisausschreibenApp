import React from 'react';
import { Row, Col, List } from 'antd';
//import { Link } from 'react-router-dom';

import RouteById from './RouteById';
import withPromise from './withPromise';

let RouteWithPromise = withPromise( RouteById );

export default function MemberListJury( props ) {

    let juryMembers = props.juryMembers;

    return(
        <Row>
            <List 
                header={<h3>Jury</h3>}
                grid={{column: 2}}
                size="small"
                dataSource={juryMembers}
                renderItem = { item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta 
                                title={<RouteWithPromise query={item.identifier[0]} text={item.name} />}  //{item.name}
                                description={item.anmerkung}
                            />
                        </List.Item>
                    </Col>
                }
            />
        </Row>
    );
}