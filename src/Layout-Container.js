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
import SideMenu from './SideMenu';
import Body from './Body';
import Header_Container from './Header-Container';
import Footer from './Footer';
import Sidebar from './Sidebar';
*/

let prom = fetch( 'http://www.mocky.io/v2/59de81851000003e0042a9a6', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
        });

export default class Layout_Container extends React.Component {
    constructor() {
        super();
        this.state = {
            data: CouchDataStore.getResults(),
            messages: [],
            searchInput: "suche...",
            fromProm: null
        };
        prom.then( response => response.json() )
        .then( data => { this.setState( { fromProm: data } ) } )
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
                            <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
                                <SubMenu title={<span>Über das Projekt</span>}>
                                    <Menu.Item key="1">Forschungsvorhaben</Menu.Item>
                                    <Menu.Item key="2">Mitarbeiter</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="3">Publikationen</Menu.Item>
                                <Menu.Item key="4">Bibliographie</Menu.Item>
                                <Menu.Item key="5">Visualisierungen</Menu.Item>
                            </Menu>
                        </div>
                        </Col>
                    </Row>
                </Header>

                <Row>
                            <Route path="/" exact component={SearchBanner} />
                            <Route path="/search" component={SearchRow} />
                </Row>

                <Route path="/" exact component={LandingPage} />
                <Route path="/search" component={SearchPage} />

                <Footer style={{textAlign: 'center'}}>
                    Musikalische Preisausschreiben ©2017
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

