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
                    {/*<Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    </Breadcrumb>*/}
                    <div style={{ /*maxWidth: "1680px",*/ textAlign: "center", marginTop: 60, marginRight: "auto", marginLeft: "auto", width: 600 }}>
                        Was finde ich hier? <br />
                        Die Datenbank enthält Einträge zu 1310 Preisausschreiben und basiert auf einem
                        Korpus zeitgenössischer Musikperiodika, die im Rahmen eines DFG-
                        Forschungsprojektes an der Universität zu Köln von 2016 bis 2019 ausgewertet
                        wurden.
                        {/*<Row gutter={24}>
                            <Col span={8}>
                                <Card hoverable cover={<img alt="Bücherstapel" src="/app/Preisausschreibenstapel.jpg"/>} onClick={ () => props.history.push('/overview') } bordered={false}  ><Meta title="Preisausschreibensuche" description="1100 Preisausschreiben" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card cover={<img alt="Collage Portraits" src="/app/Personenstapel.jpg"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false} ><Meta title="Personensuche" description="2608 Personen" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card cover={<img alt="Eidgenössisches Sängerfest 1854 in Winterthur (Zentralbibliothek Zürich, http://doi.org/10.3931/e-rara-38066)" src="/app/Winterthur1854.jpg"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false}><Meta title="Körperschaftensuche" description="899 Vereine, Institutionen, etc" /></Card>
                            </Col>
                        </Row>
                        
                        <Row gutter={24} style={{marginTop: "24px"}}>
                            <Col span={8}>
                                <Card cover={<img src="http://via.placeholder.com/300x300"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false} ><Meta title="Suche über Themen und Schlagworte" description="493 Themen und 399 Schlagworte" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card hoverable onClick={ () => props.history.push('/overview') } bordered={false} > Académie royale des Sciences, des Lettres et des Beaux-Arts de Belgique (Classe des Beaux-Arts), 1857-02-07 bis 1857-09-00, Verfassen eines Kantatentextes und Komposition der Kantate *La Mort d'Abel* mit Orchester.<Meta title="zufälliger Vorschlag" /></Card>
                            </Col>
                            <Col span={8}>
                                <Card cover={<img src="http://via.placeholder.com/300x300"/>} hoverable onClick={ () => props.history.push('/overview') } bordered={false} ><Meta title="Visualisierungen und Analysen" description="Regionale Verteilung, Temporale Verteilung, etc." /></Card>
                            </Col>
                        </Row>*/}
                    </div>
                    {/*<Layout>
                        <div>
                        </div>
                    </Layout>*/}
                </Col>
                </Row>
                </Content>
        </Layout>
        
    );
}

export default withRouter( LandingPage );