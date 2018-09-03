import React from 'react';
import { Row, Col, List, Tooltip, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default function MemberListJury( props ) {
    console.log(props);
    let juryMembers = props.juryMembers;
    const comments = props.comments.map( comment => comment.text ).join('\n');

    return(
        <Row>
            <List 
                header={<h3>Jury { comments ? <Tooltip title={comments} ><Icon type="plus-square" theme="outlined" /></Tooltip> : "" }</h3>}
                grid={{column: 2}}
                size="small"
                dataSource={juryMembers}
                renderItem = { item => 
                    <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta 
                                title={<span><Link to={"/dokumente/" + item.identifier[0]} >{item.name}</Link></span>}
                                description={item.anmerkung}
                            />
                        </List.Item>
                    </Col>
                }
            />
        </Row>
    );
}