import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout; 

export default function BibliographyPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/bibliographie">Bibliographie</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div>
                    <p>Hier finden Sie demnächst die Bibliographie zum Projekt.</p>
                </div>
                </Layout>
            </Content>
        </Layout>
    );
} 

