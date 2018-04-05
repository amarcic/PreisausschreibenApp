import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col, Card } from 'antd';
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
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ maxWidth: "1680px" }}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Card hoverable cover={<img src="http://via.placeholder.com/300x300"/>} onClick={ () => props.history.push('/overview') } bordered={false}  ><Meta title="Preisausschreibensuche" description="1100 Preisausschreiben" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card cover={<img src="http://via.placeholder.com/300x300"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false} ><Meta title="Personensuche" description="2608 Personen" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card cover={<img src="http://via.placeholder.com/300x300"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false}><Meta title="Körperschaften" description="899 Vereine, Institutionen, etc" /></Card>
                            </Col>
                        </Row>
                        
                        <Row gutter={24} style={{marginTop: "24px"}}>
                            <Col span={8}>
                                <Card title="Themen und Schlagworte" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#18A497" }} > 493 Themen und 399 Schlagworte <img src="http://via.placeholder.com/300x350"/></Card>
                            </Col>
                            <Col span={8}>
                                <Card title="zufälliger Vorschlag:" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#18A497" }} > Académie royale des Sciences, des Lettres et des Beaux-Arts de Belgique (Classe des Beaux-Arts), 1857-02-07 bis 1857-09-00, Verfassen eines Kantatentextes und Komposition der Kantate *La Mort d'Abel* mit Orchester. </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Visualisierungen und Analysen" hoverable onClick={ () => props.history.push('/overview') } bordered={false} style={{ backgroundColor: "#18A497" }} > Regionale Verteilung, Temporale Verteilung, etc. <img src="http://via.placeholder.com/300x350"/></Card>
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