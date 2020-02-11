import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col } from 'antd';

const { Content } = Layout; 

export default function AboutPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/about">Forschungsziel</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <div>
                                <h1 style={{fontSize: "1.7rem"}}>Forschungsziel</h1>
                                <p>Die Datenbank, die Bibliografie sowie der begleitende Grundriss zur Geschichte musikbezogener Preisausschreiben in der Zeit von 1820 bis 1870 stellen das Ergebnis eines Forschungsprojekts dar, das an der Universität zu Köln zwischen Januar 2016 und Juni 2019 durchgeführt wurde. Ziel des Projektes war es, musikalische Preisausschreiben aus der Zeit von 1820 bis 1870 für die Forschung zu erschließen, grundlegende Informationen in einer <Link to="/">Datenbank</Link> für die Forschung verfügbar zu machen, eine <Link to="/bibliografie">Bibliografie</Link> theoretischer Aufsätze und Kommentare über Preisausschreiben aus jener Zeit zu erstellen und einen ersten <Link to="/">überblicksartigen Entwurf</Link> einer Geschichte musikbezogener Preisausschreiben jener Zeit zu verfassen. Das Projekt knüpfte an die in mehreren Fächern derzeit geführte Diskussion über Konkurrenz an; seine Ergebnisse liefern späteren Studien einen Wegweiser zu zentralem Material im Hinblick auf Geschichte und Soziologie des ästhetischen (musikalischen) Urteils und rücken musikalische Praktiken, Inhalte, Werke und Objekte in den Fokus, die in den herkömmlichen Meistererzählungen keine oder keine nennenswerte Rolle gespielt haben (und vielfach unbekannt sind), obwohl sie für eine kulturwissenschaftliche Betrachtung der Musik substanziell sein können. Das Projekt konzentrierte sich auf einen Quellentypus, der eine möglichst ausführliche Übersicht über das Material ermöglicht: musikbezogene Periodika. Es verstand sich entsprechend als Grundlagenforschung, die auf der Basis des umfassendsten Quellenkorpus Material gesichtet, erschlossen und skizziert hat.</p>
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
} 

