//React Component for the application layout
import React from 'react';
import { Route, Link } from 'react-router-dom';
//import 'w3-css/w3.css';

import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import CouchDataStore from './CouchDataStore';

import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import SearchBanner from './SearchBanner';
import SearchRow from './SearchRow';
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
            data: CouchDataStore.getResults(),
            messages: [],
            searchInput: "suche..."
        };
    }

    componentWillMount() {
        CouchDataStore.subscribe( this.updateData );
    }

    updateData() {
        this.setState( {
            data: CouchDataStore.getResults()
        } );
    }

    getTitle() {
        return this.state.header.header_title;
    }

    updateInput( event ) {
        this.setState( {
            searchInput: event.target.value
        } );
    }



    render() {
        return(
            <Layout>
                <Header>
                    <Row gutter={10}>
                        <Col span={3}>
                            <div className="header--title">
                                <Link to="/">Musikalische Preisausschreiben</Link>
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

                <Row>
                            <Route path="/" exact component={SearchBanner} />
                            <Route path="/search" component={SearchRow} />
                </Row>

                <Layout style={{ backgroundColor: "#ffffff" }}>
                    <Sider style={{backgroundColor: "#ffffff"}}>
                        <Menu theme="dark" mode="inline">
                            <SubMenu key="sub1" title="Dokumenttypen">
                                <Menu.Item key="1">Preisausschreiben</Menu.Item>
                                <Menu.Item key="2">Personen</Menu.Item>
                                <Menu.Item key="3">Körperschaften</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title="Schlagworte">
                                <Menu.Item key="1">Verein</Menu.Item>
                                <Menu.Item key="2">Eisenbahn</Menu.Item>
                                <Menu.Item key="3">Gemeindefest</Menu.Item>
                                <Menu.Item key="4">Bergbau</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ marginLeft: "50px" }}>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/search" component={SearchPage} />
                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>
                    Musikalische Preisausschreiben ©2017 {console.log(this.state.data)}
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

