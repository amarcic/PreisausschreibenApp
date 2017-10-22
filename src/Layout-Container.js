//React Component for the application layout
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import CouchDataStore from './CouchDataStore';

import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import SearchBanner from './SearchBanner';
import SearchRow from './SearchRow';

const apiUrl = 'http://www.mocky.io/v2/59e752d10f00003107ee99e7';
const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };

export default class Layout_Container extends React.Component {
    constructor() {
        super();
        this.state = {
            data: CouchDataStore.getResults(),
            messages: [],
            searchInput: "suche...",
            fromProm: null,
            requestData: [{"id":"4e01325f487dfba0bb454f4f050460f8","key":"4e01325f487dfba0bb454f4f050460f8","value":{"vorname":"Jean","nachname":"Harzé","namenszusatz":" "}},
            {"id":"4e01325f487dfba0bb454f4f05046a59","key":"4e01325f487dfba0bb454f4f05046a59","value":{"vorname":"Henri","nachname":"Hanlet","namenszusatz":" "}}]
        };
    }

    componentWillMount() {
        CouchDataStore.subscribe( this.updateData );
    }

    componentDidMount() {
        //not using the data store yet
        fetch( apiUrl, requestOptions )
            .then( response => response.json() )
            .then( data => this.setState( { requestData: data.rows } ) )
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
                    <div className="header--title" style={{
                                                        width: '200px',
                                                        float: 'left'
                                                    }}>
                        <Link to="/">Musikalische Preisausschreiben</Link>
                    </div>              
                    <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
                        <SubMenu title={<span>Über das Projekt</span>}>
                            <Menu.Item key="1">Forschungsvorhaben</Menu.Item>
                            <Menu.Item key="2">Mitarbeiter</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">Publikationen</Menu.Item>
                        <Menu.Item key="4">Bibliographie</Menu.Item>
                        <Menu.Item key="5">Visualisierungen</Menu.Item>
                    </Menu>
                </Header>

                <Row>
                            <Route path="/" exact component={SearchBanner} />
                            <Route path="/search" component={SearchRow} />
                </Row>

                <Route path="/" exact component={LandingPage} />
                <Route path="/search" render={ (props) => <SearchPage requestData={this.state.requestData} {...props} /> } />

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

