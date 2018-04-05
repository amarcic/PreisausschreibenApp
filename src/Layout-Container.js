//React Component for the application layout
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

//import CouchDataStore from './CouchDataStore';

import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import SearchPage from './SearchPage';
import SearchBanner from './SearchBanner';
import SearchRow from './SearchRow';
import ResultPage from './ResultPage';
import SeriesPage from './SeriesPage';
import ErrorBoundary from './ErrorBoundary'

import withPromise from './withPromise';

const apiUrl = 'http://www.mocky.io/v2/59e752d10f00003107ee99e7';
const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };
//const SearchPageWithPromise = withPromise( fetch(apiUrl, requestOptions), SearchPage );
const SearchPageWithPromise = withPromise( SearchPage );
const SeriesPageWithPromise = withPromise( SeriesPage );
//const ResultPageWithPromise = withPromise( ResultPage );

export default class Layout_Container extends React.Component {
    constructor() {
        super();
        this.state = {
        //    data: CouchDataStore.getResults(),
            messages: [],
            searchInput: "suche...",
            searchCollection: "preisausschreiben",
            requestData: null
        };

        this.updateInput = this.updateInput.bind(this);
    }

    getTitle() {
        return this.state.header.header_title;
    }
    
    updateInput( value ) {
        this.setState(
            { searchInput: value.input, searchCollection: value.collection }
        );
    }

    render() {
        //console.log(this.state.searchInput);
        return(
            <Layout>
                <Header>
                    <div className="header--title" style={{
                                                        width: '200px',
                                                        float: 'left',
                                                        backgroundColor: 'white'
                                                    }}>
                        <Link to="/">Beta-Version Home</Link>
                    </div>              
                    <Menu mode="horizontal" style={{ lineHeight: '80px', fontFamily: "'Source Sans Pro', sans", letterSpacing: '0.04em', fontSize: '17px', fontWeight: '40', color: '#FF5B4A', backgroundColor: 'white', float: 'right' }} theme="light" >
                        <SubMenu title={<span>Suche</span>} >
                        <Menu.Item key="1">Preisausschreiben</Menu.Item>
                        <Menu.Item key="2">Personen</Menu.Item>
                        <Menu.Item key="3">Körperschaften</Menu.Item>
                        <Menu.Item key="4">Themen und Schlagworte</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span>Forschung</span>} >
                            <Menu.Item key="5">Grundriss</Menu.Item>
                            <Menu.Item key="6">Methodik</Menu.Item>
                            <Menu.Item key="7">Bibliographie</Menu.Item>
                            <Menu.Item key="8">Publikationen</Menu.Item>
                            <Menu.Item key="9">Visualisierungen und Analysen</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span>Über das Projekt</span>}>
                            <Menu.Item key="10">
                                <Link to="/about">Forschungsvorhaben</Link>
                            </Menu.Item>
                            <Menu.Item key="11">Mitarbeiter</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>

                <Row>
                            <Route path="/" exact render={ (props) => <SearchBanner updateInput={this.updateInput} searchCollection={this.state.searchCollection} {...props} />  } />
                            {/*below is just a quick hack to get to landing page, when opening the index.html in couchdb*/}
                            <Route path="/index.html" exact render={ (props) => <SearchBanner updateInput={this.updateInput} searchCollection={this.state.searchCollection} {...props} />  } />
                            <Route path="/search" render={ (props) => <SearchRow updateInput={this.updateInput} searchCollection={this.state.searchCollection} {...props} /> } />
                            <Route path="/person/:docId" render={ (props) => <ErrorBoundary><ResultPage {...props} /> </ErrorBoundary> } ></Route>
                            {/* can I use :docId to put the value into a prop, so the Result page can render a document from the url alone? yes!*/}
                            <Route path="/dokumente/:docType/:docId" render={ (props) => <ErrorBoundary><ResultPage {...props} /> </ErrorBoundary> } ></Route>
                            <Route path="/overview" render={ (props) => <ErrorBoundary><SeriesPageWithPromise query="none" collection="overview_competitions" {...props} /></ErrorBoundary> } />
                            <Route path="/about" component={AboutPage} />
                </Row >
                <Row type="flex" justify="center"style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "120px"}}>
                <Route path="/" exact component={LandingPage} />
                {/*below is just a quick hack to get to landing page, when opening the index.html in couchdb*/}
                <Route path="/index.html" exact component={LandingPage} />
                <Route path="/search" render={ (props) => <ErrorBoundary> <SearchPageWithPromise query={this.state.searchInput} collection={this.state.searchCollection} {...props} /> </ErrorBoundary> } />
                </Row>
                <Footer style={{textAlign: 'center'}}>
                    Musikalische Preisausschreiben ©2018
                </Footer>

            </Layout>
        );
    }
}

