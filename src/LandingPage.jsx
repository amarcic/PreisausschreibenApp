import React from 'react';
//import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom';
//import { withRouter } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';

const { Content } = Layout;
//const { Meta } = Card;

function LandingPage( props ) {
    return(
        <Layout >
                <Content style={{ marginTop: "20px" }}>
                <Row>
                <Col>
                    <div style={{ /*maxWidth: "1680px",*/ textAlign: "center", marginTop: 60, marginRight: "auto", marginLeft: "auto", width: 600 }}>
                        Die Datenbank enthält Einträge zu 1340 musikbezogenen Preisausschreiben des 19. Jahrhunderts, die im Rahmen eines von der DFG geförderten Forschungsprojektes an der Universität zu Köln erfasst wurden.
                    </div>
                </Col>
                </Row>
                </Content>
        </Layout>
        
    );
}

export default withRouter( LandingPage );