import React from 'react';
//import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom';
//import { withRouter } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';

const { Content } = Layout;
const { Meta } = Card;

function LandingPage( props ) {
    return(
        <Layout >
                <Content style={{ marginTop: "20px" }}>
                <Row>
                <Col>
                    {/*<Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    </Breadcrumb>*/}
                    <div style={{ /*maxWidth: "1680px",*/ textAlign: "center", marginTop: 60, marginRight: "auto", marginLeft: "auto", width: 600 }}>
                        Was finde ich hier? <br />
                        Die Datenbank enthält Einträge zu 1310 Preisausschreiben und basiert auf einem
                        Korpus zeitgenössischer Musikperiodika, die im Rahmen eines DFG-
                        Forschungsprojektes an der Universität zu Köln von 2016 bis 2019 ausgewertet
                        wurden.
                    </div>
                </Col>
                </Row>
                </Content>
        </Layout>
        
    );
}

export default withRouter( LandingPage );