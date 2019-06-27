import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Breadcrumb } from 'antd';

const Content = Layout;

import PersonPage from './PersonPage';
import ContestPage from './ContestPage';
import CorporatePage from './CorporatePage';
import SeriesPage from './SeriesPage';

export default function DocViewSwitch( props ) {
//    console.log("doc view switch")
//    console.log(props.requestData);
    let docData = props.requestData;

    let ResultComponent;

    switch( docData.type ) {
        case "person": ResultComponent = PersonPage; break;
        case "preisausschreiben": ResultComponent = ContestPage; break;
        case "corporation": ResultComponent = CorporatePage; break;
        case "serie": ResultComponent = SeriesPage; break;
    }

    return(
        <Layout>
            <Content>
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/" style={{
                        color: "#CBD5E0"
                    }}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/prosearch" style={{
                        color: "#CBD5E0"
                    }}>Suchergebnisse</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/prosearch" style={{
                        color: "#CBD5E0"
                    }}> {docData.docType} Objekt-ID {docData._id} </Link></Breadcrumb.Item>
                </Breadcrumb>
                <ResultComponent requestData={docData} />
            </Content>
        </Layout>
    );
}