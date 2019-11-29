import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout; 

export default function CreditsPage( props ) {
    return(
        <Layout>
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/credits">Beteiligte</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Layout>
                    <h3>Bildnachweise</h3>
                    <ul>
                        <li>Eidgenössisches Sängerfest 1854 in Winterthur (Zentralbibliothek Zürich, <a href="http://doi.org/10.3931/e-rara-38066">http://doi.org/10.3931/e-rara-38066</a>)</li>
                        <li>Elsässischer Gesangswettbewerb 1859 in Schlestadt (Bibliothèque nationale de France, ark:/12148/btv1b10214370x)</li>
                        <li>Teilnehmer des europäischen Militärmusikwettbewerbs 1867 zur Pariser Weltausstellung  (University of Ottawa/Internet Archive, ark:/13960/t39z9w39x)</li>
                    </ul>
                </Layout>

            </Content>
        </Layout>
    );
}