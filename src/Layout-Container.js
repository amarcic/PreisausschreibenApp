//React Component for the application layout
import React from 'react';
//import 'w3-css/w3.css';

import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

/*
import Body from './Body';
import Header_Container from './Header-Container';
import Footer from './Footer';
import Sidebar from './Sidebar';
*/

export default class Layout_Container extends React.Component {
    constructor() {
        super();
        this.state = {
            header: {
                header_title: {
                    main_title: "Musikalische Preisausschreiben 1825 bis 1826",
                    subtitle: "Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika"
                },
                headerStyle: { w3class: "w3-container w3-black" }
            }
        };
    }
    getTitle() {
        return this.state.header.header_title;
    }

    render() {
        return(
            <Layout>
                <Header>
                    <Row gutter={16}>
                        <Col span={5}>
                            <div className="header--title">
                                Musikalische Preisausschreiben 1825 bis 1826
                            </div>
                            <div className="header--title__subtitle">
                                Grundriss und Datenbank
                            </div>
                        </Col>
                        <Col span={17}>
                        <div>
                            <Menu mode="horizontal" theme="dark">
                                <Menu.Item key="1">Über das Projekt</Menu.Item>
                                <Menu.Item key="2">Publikationen</Menu.Item>
                                <Menu.Item key="3">Bibliographie</Menu.Item>
                                <Menu.Item key="4">Visualisierungen</Menu.Item>
                            </Menu>
                        </div>
                        </Col>
                    </Row>
                </Header>

                <Content>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Suchergebnisse</Breadcrumb.Item>
                    </Breadcrumb>
                </Content>

                <Layout>
                    <Sider>
                        <Menu mode="inline">
                            <SubMenu key="sub1" title="Dokumenttypen">
                                <Menu.Item key="1">Preisausschreiben</Menu.Item>
                                <Menu.Item key="2">Personen</Menu.Item>
                                <Menu.Item key="3">Körperschaften</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title="Schlagworte">
                                <Menu.Item key="1">Verein</Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content>
                        here is some content
                    </Content>
                </Layout>
                <Footer style={{testAlign: 'center'}}>
                    Musikalische Preisausschreiben
                </Footer>

            </Layout>
        );
        /*
        return(
            <div>
                <Header_Container getTitle={this.getTitle.bind(this)} />
                <Body/>
                <Sidebar navItems={["first", "second", "third"]} />
                <Footer/>
            </div>
        );
        */
    }
}

