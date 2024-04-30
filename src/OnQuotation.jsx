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
                    <Breadcrumb.Item><Link to="/quotation">Zitiervorschlag und DOI</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Layout style={{ marginTop: "20px", marginBottom: "20px" }} >
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <h1 style={{fontSize: "1.7rem"}}>Zitiervorschlag</h1>
                            <p>
                                Hentschel, Frank / Domann, Andreas / Bebermeier, Carola / Kreutzfeldt, Clemens / Marčić, Aleksander / Traudes, Jonas: „<a href={packageJSON.config.react_router_basename}>Musikalische Preisausschreiben 1820-1870. Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</a>, University of Cologne 2020, <a href="https://doi.org/10.18716/MUS.PREIS.1820-70">https://doi.org/10.18716/MUS.PREIS.1820-70</a>.
                            </p>
                            <h1 style={{fontSize: "1.7rem"}}>DOI</h1>
                            <p>
                                10.18716/MUS.PREIS.1820-70
                            </p>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
}