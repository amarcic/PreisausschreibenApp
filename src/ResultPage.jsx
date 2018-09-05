import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Breadcrumb } from 'antd';

const Content = Layout;

import PersonPage from './PersonPage';
import ContestPage from './ContestPage';
import CorporatePage from './CorporatePage';
import SeriesPage from './SeriesPage';
import withPromise from './withPromise';

export default function ResultPage( { match } ) {

    let ResultComponent;

    //console.log( match.params.docType );

    switch( match.params.docType ) {
        case "person": ResultComponent = PersonPage; break;
        case "preisausschreiben": ResultComponent = ContestPage; break;
        case "koerperschaft": ResultComponent = CorporatePage; break;
        case "serie": ResultComponent = SeriesPage; break;
    }
    //console.log( ResultComponent );
    //console.log( PersonPage );

    const DocViewWithPromise = withPromise( ResultComponent );

    return(
        <Layout>
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search" >Suchergebnisse</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search"> {match.params.docType} mit Id {match.params.docId} </Link></Breadcrumb.Item>
                </Breadcrumb>
                <DocViewWithPromise query={match.params.docId} />
            </Content>
        </Layout>
    );
}