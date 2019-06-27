import React from 'react';
import { Row, Col, List, Drawer, Button } from 'antd';

export default function Prerequisits( props ) {
    
    let conditions = props.conditions;
    let comments = props.comments;
    let showDrawer = props.showDrawer;

    return(
        <Row style={{ paddingLeft: "20px"}}>
            <List 
                header={<h1>Teilnahmevoraussetzungen {comments && comments.length>0 ? <Button type="normal" onClick={showDrawer} >Kommentare</Button> : "" }</h1>}
                dataSource={conditions}
                renderItem={ item =>
                    <Col offset={1}>
                    <List.Item>
                        <List.Item.Meta 
                            title={<span>{item.kriterium.join(", ")}</span>}
                            description={item.beschreibung}
                        />
                        {/*<Col span={2} offset={1} >
                            {item.kriterium.join(", ")}
                        </Col>
                        <Col span={18} offset={3}>
                            {item.beschreibung}
                        </Col>*/}
                    </List.Item>
                    </Col>
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