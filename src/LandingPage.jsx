import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom';
//import { withRouter } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';

const { Content } = Layout;

function LandingPage( props ) {
    return(
        <Layout >
                <Content style={{ marginTop: "20px" }}>
                <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ maxWidth: "1680px" }}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Card title="Preisausschreiben" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#ffe3d1" }} >1100 Preisausschreiben</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Personen" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#fff1b5" }}>2608 Personen</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Körperschaften" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#dbf3d0" }}>899 Vereine, Institutionen, etc</Card>
                            </Col>
                        </Row>
                        
                        <Row gutter={24} style={{marginTop: "24px"}}>
                            <Col span={8}>
                                <Card title="Themen und Schlagworte" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#fff1b5" }} > 493 Themen und 399 Schlagworte </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="zufälliger Vorschlag:" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#dbf3d0" }} > Académie royale des Sciences, des Lettres et des Beaux-Arts de Belgique (Classe des Beaux-Arts), 1857-02-07 bis 1857-09-00, Verfassen eines Kantatentextes und Komposition der Kantate *La Mort d'Abel* mit Orchester. </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Visualisierungen und Analysen" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#ffe3d1" }} > Regionale Verteilung, Temporale Verteilung, etc. </Card>
                            </Col>
                        </Row>
                    </div>
                    <Layout>
                        <div>
                        </div>
                    </Layout>
                </Col>
                </Row>
                </Content>
        </Layout>
        
    );
}

export default withRouter( LandingPage );