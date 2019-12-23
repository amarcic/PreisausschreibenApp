import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Breadcrumb, Row, Col} from 'antd';

const { Content } = Layout; 

export default function CreditsPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/credits">Beteiligte</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Layout style={{ marginTop: "20px", marginBottom: "20px" }} >
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <h1 style={{fontSize: "1.7rem"}}>Beteiligte</h1>
                            <p>
                                Das Projekt wurde durch die Deutsche Forschungsgemeinschaft (DFG) ermöglicht und von <a href={"https://musikwissenschaft.phil-fak.uni-koeln.de/11591.html"}>Prof. Dr. Frank Hentschel</a>, gemeinsam mit Dr. Andreas Domann, geleitet. MitarbeiterInnen waren Dr. Carola Bebermeier, Clemens Kreutzfeldt, Aleksander Marcic und Dr. Jonas Traudes. Weitere Beiträge wurden im Rahmen von Werkverträgen oder Hilfskraftstellen von Rebeka Ádány, Julia Eberhardt, Maik Köster, David Matěna und Maarten Sterckx geleistet. Zu danken haben wir außerdem Prof. Dr. Patrick Sahle und Prof. Dr. Franz Fischer vom <a href={"https://cceh.uni-koeln.de/"}>CCeH</a> sowie Christoph Müller-Oberhäuser.
                            </p>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
}