import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

export default function SearchPage( props ) {
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Layout>what did you expect</Layout>
        </div>
    );
}