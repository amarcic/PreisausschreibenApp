import React from 'react';

import { Table, Layout } from 'antd';

const Content = Layout;

export default function PreisausschreibenPage( props ) {

    return(
        <Layout>
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Id des angezeigten Dokuments</Link></Breadcrumb.Item>
                </Breadcrumb>
            </Content>
        </Layout>
    );
}