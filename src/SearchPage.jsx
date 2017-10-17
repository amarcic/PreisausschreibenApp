import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu } from 'antd';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

// if the sider is added with a custom component the surrounding ant Layout component will be
// missing the ant-layout-has-sider class and not render sider and content correctly 
export default function SearchPage( props ) {
    return(
        <Layout style={{ backgroundColor: "#ffffff" }}>
            <Sider style={{backgroundColor: "#ffffff"}}>
                <Menu theme="dark" mode="inline">
                    <SubMenu key="sub1" title="Dokumenttypen">
                        <Menu.Item key="1">Preisausschreiben</Menu.Item>
                        <Menu.Item key="2">Personen</Menu.Item>
                        <Menu.Item key="3">Körperschaften</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Schlagworte">
                        <Menu.Item key="1">Verein</Menu.Item>
                        <Menu.Item key="2">Eisenbahn</Menu.Item>
                        <Menu.Item key="3">Gemeindefest</Menu.Item>
                        <Menu.Item key="4">Bergbau</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ marginLeft: "50px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Layout>what did you expect</Layout>
            </Content>
        </Layout>
    );
}