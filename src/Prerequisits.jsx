import React from 'react';
import { Row, Col, List, Drawer, Button } from 'antd';

export default function Prerequisits( props ) {
    
    let prereqs = props.prereqs;
    let comments = props.comments;
    let showDrawer = props.showDrawer;

    return(
        <Row>
            <List 
                header={<h3>Teilnahmevoraussetzungen {comments && comments.length>0 ? <Button type="normal" onClick={showDrawer} >Kommentare</Button> : "" }</h3>}
                dataSource={prereqs}
                renderItem={ item =>
                    <List.Item>
                        <Col span={2} offset={1} >
                            {item.kriterium.join(", ")}
                        </Col>
                        <Col span={18}>
                            {item.beschreibung}
                        </Col>
                    </List.Item>
                }
            />
            { comments && comments.length>0 && <Drawer 
                title="Kommentare zu den Teilnahmevoraussetzungen"
                placement="right"
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
                width="25%"
                
            >
                {comments.map( comment => <p>{comment.text}</p> )}
            </Drawer>}
        </Row>
    );
}  