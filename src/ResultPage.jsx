import React from 'react';
import { Link } from 'react-router-dom';

import { Table, Layout, Breadcrumb } from 'antd';

const Content = Layout;

import PersonPage from './PersonPage';
import withPromise from './withPromise';
const PersonPageWithPromise = withPromise( PersonPage );

export default function ResultPage( { match } ) {

    return(
        <Layout>
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search" >Suchergebnisse</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search"> {match.params.docId} </Link></Breadcrumb.Item>
                </Breadcrumb>
                <PersonPageWithPromise query={match.params.docId} />
            </Content>
        </Layout>
    );
}