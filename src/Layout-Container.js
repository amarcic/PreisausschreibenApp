//React Component for the application layout
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Layout, Menu, Row, Col } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer } = Layout;

import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ProSearchPage from './ProSearchPage';
import SearchBanner from './SearchBanner';
import GlossaryPage from "./GlossaryPage";
import OnDataPage from "./OnDataPage";
import CorpusPage from './CorpusPage';
import SearchInfoPage from "./SearchInfoPage";
import ErrorBoundary from './ErrorBoundary'
import CreditsPage from './CreditsPage';
import DocViewSwitch from './DocViewSwitch';

import withPromise from './withPromise';
import withESData from './withESData';
import OnMethodsPage from './OnMethodsPage';
import BibliographyPage from './BibliographyPage';
import ArticlePage from "./ArticlePage";

const SearchPageWithESData = withESData( ProSearchPage );

export default class Layout_Container extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            searchInput: "Ihre Suche...",
            //queryObject: { match: { "_all": {query: '', operator: "or"} } },
            stringQueryObject: { simple_query_string: {query:'Ihre Suche...', fields: ["_all"]} },
            //filterObject: { taskTypes: {} },
            filterTaskTypes: [],
            filterTimeSpan: [20,70],
            filterCountry: [],
            offset: 0,
            sort: {},
            searchCollection: "preisausschreiben",
            searchType: "contest",
            searchESfield: "ortsname",
            requestData: null
        };
        this.updateQuery = this.updateQuery.bind(this);
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

    updateQuery( value ) {
        console.log(this.state.sort);
        this.setState(
            { stringQueryObject: value.strQueryObj, /*filterObject: value.filterObj,*/ filterTimeSpan: value.filterTimeSpan, filterCountry: value.filterCountry, filterTaskTypes: value.filterTaskTypes, searchType: value.type, sort: value.sort, offset: value.offset }
        );
    }

    render() {
        return(
            <Layout>
                <Header style={{borderBottom: '1px solid #EDF2F7' }}>
                    <div className="header--title" style={{
                                                        width: '200px',
                                                        float: 'left'
                                                    }}>
                        <Link to="/"><img src={"/assets/logo.png"} height={"24px"} /></Link>
                    </div>   
                    {/*<div style={{fontFamily: "'Source Sans Pro', sans", letterSpacing: '0.04em', fontSize: '17px'}}>
                            <span>Musikalische Preisausschreiben 1820 bis 1870</span><br />
                            <span>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</span>
                                                </div>      */}     
                    <Menu mode="horizontal" style={{ lineHeight: '58px', letterSpacing: '0.04em', fontSize: '14px', color: '#4A5568', float: 'right' }}  >
                        <SubMenu title={<span>Forschung</span>} >
                            <Menu.Item key="5"><Link to="/grundriss">Grundriss</Link></Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/methodik">Methodik</Link>
                            </Menu.Item>
                            <Menu.Item key="7"><Link to="/bibliografie">Bibliografie, 1820-1870</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/korpus">Korpus</Link></Menu.Item>
                            {/*<Menu.Item key="9">Publikationen</Menu.Item>*/}
                            <Menu.Item key="9"><Link to="/glossar">Glossar</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/onsearch">Anleitung zur Suche</Link></Menu.Item>
                            {/*<Menu.Item key="10">Visualisierungen und Analysen</Menu.Item>*/}
                        </SubMenu>
                        <SubMenu title={<span>Über das Projekt</span>}>
                            <Menu.Item key="11">
                                <Link to="/about">Forschungsziel</Link>
                            </Menu.Item>
                            {/*<Menu.Item key="12">Mitarbeiter</Menu.Item>*/}
                            <Menu.Item key="13">
                                <Link to="/credits">Beteiligte</Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link to="/daten">Daten</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>

                <Row>
                            <Route path="/" exact render={ (props) => <SearchBanner updateQuery={this.updateQuery} searchType={this.state.searchType} {...props} />  } />
                            {/*below is just a quick hack to get to landing page, when opening the index.html in couchdb*/}
                            {/*<Route path='/search' render={ (props) => <SearchRow updateInput={this.updateInput} searchCollection={this.state.searchCollection} {...props} /> } />*/}
                            <Route path="/index.html" exact render={ (props) => <SearchBanner updateQuery={this.updateQuery} searchType={this.state.searchType} {...props} />  } />
                            {/*<Route path="/overview" render={ (props) => <ErrorBoundary><SeriesPageWithPromise query="none" collection="overview_competitions" {...props} /></ErrorBoundary> } />*/}
                            <Route path="/about" component={AboutPage} />
                            <Route path="/methodik" component={OnMethodsPage} />
                            <Route path="/korpus" component={CorpusPage} />
                            <Route path="/glossar" component={GlossaryPage} />
                            <Route path="/bibliografie" component={BibliographyPage} />
                            <Route path="/credits" component={CreditsPage} />
                            <Route path="/daten" component={OnDataPage} />
                            <Route path="/onsearch" component={SearchInfoPage} />
                            <Route path="/grundriss" component={ArticlePage} />
                </Row >
                <Row type="flex" justify="center" style={{ paddingLeft: "60px", paddingRight: "60px", paddingBottom: "70px"}}>
                    <Route path="/" exact component={LandingPage} />
                    {/*below is just a quick hack to get to landing page, when opening the index.html in couchdb*/}
                    <Route path="/index.html" exact component={LandingPage} />
                    <Route path="/dokumente/:docId" render={ (props) => {const DocViewSwitchWithPromise = withPromise( DocViewSwitch ); return(<ErrorBoundary><DocViewSwitchWithPromise query={props.match.params.docId} {...props}/></ErrorBoundary>);} } ></Route>
                    {/*<Route path="/search" render={ (props) => <ErrorBoundary> <SearchPageWithPromise query={this.state.searchInput} collection={this.state.searchCollection} {...props} /> </ErrorBoundary> } />*/}
                    <Route path="/prosearch" render={ (props) => <ErrorBoundary> <SearchPageWithESData strQuery={this.state.stringQueryObject} /*filterObj={this.state.filterObject}*/ filterCountry={this.state.filterCountry} filterTimeSpan={this.state.filterTimeSpan} filterTaskTypes={this.state.filterTaskTypes} updateQuery={this.updateQuery} searchType={this.state.searchType} sort={this.state.sort} offset={this.state.offset} {...props} /> </ErrorBoundary> } />
                </Row>

                <Footer>
                    <Row>
                        <Col span={8}>
                            <Link to="/"><img src={"/assets/dfg_logo_schriftzug_blau_foerderung_en.gif"} height={"72px"} /></Link>
                            <Link to="/"><img src={"/assets/ContentUKLAN.jpg"} height={"72px"} /></Link>
                        </Col>
                        <Col span={8}>
                            <div style={{textAlign: 'center', fontSize: 12}}>
                                <span>Musikalische Preisausschreiben 1820 bis 1870</span><br />
                                <span>Grundriss, Datenbank und Bibliografie auf Grundlage von Musikperiodika</span><br />
                                <span>Musikalische Preisausschreiben ©2020 | Universität zu Köln</span><br />
                                Lizenziert unter <a href="https://creativecommons.org/licenses/by/4.0/">CC BY</a>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{/*marginLeft: '15px'*/position: 'absolute', left: "50%" }}>
                                <Link to="/"><img src={"/assets/CCeH-Logo_transparent_w100.png"} height={"60px"} /></Link>
                            </div>
                        </Col>
                    </Row>
                </Footer>

            </Layout>
        );
    }
}

