import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Breadcrumb, Row, Col} from 'antd';

import * as packageJSON from '../package.json';

const { Content } = Layout; 

export default function OnDataPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/credits">Daten</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Layout style={{ marginTop: "20px", marginBottom: "20px" }} >
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <h1 style={{fontSize: "1.7rem"}}>Daten</h1>
                            <p>
                                Die Projektdaten erhalten Sie unter folgendem Link:
                                <ul>
                                    <li><a href={packageJSON.config.couchdb + "_all_docs/?include_docs=true"}>Projektdaten</a> (im JSON-Format)</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
}