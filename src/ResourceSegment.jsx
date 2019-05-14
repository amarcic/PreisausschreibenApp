import React from 'react';
import { Row, Col, Collapse, List } from 'antd';
import Markdown from 'markdown-to-jsx';

const Panel = Collapse.Panel;


export default function ResourceSegment(props){

    const resources = props.resources

        return(
            <Row>
                <h2>Quellen</h2>
                <Collapse>
                    <Panel header={ resources.length + " Quellen"}>
                        <List
                            size="small"
                            itemLayout="horizontal"
                            dataSource={resources}
                            renderItem={ item =>
                                <Col offset={1}>
                                <List.Item>
                                    <List.Item.Meta 
                                    title={item.quellenangabe}
                                    description={ item.korpus===true? "Die Quelle gehört zum Korpus.": "Die Quelle gehört nicht zum Kropus." }
                                    />
                                </List.Item>
                                </Col>
                            }
                        />
                    </Panel>
                </Collapse>
            </Row>
        );
}