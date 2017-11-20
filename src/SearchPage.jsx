import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Table } from 'antd';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

// is this the right place for the columns definition? should it be inside the SearchPage function?
const columns = [
    {
        title: 'Nachname',
        dataIndex: 'value.nachname',
        key: 'nachname'
    },
    {
        title: 'Vorname',
        dataIndex: 'value.vorname',
        key: 'vorname'
    },
    {
        title: 'Alias',
        dataIndex: 'value.alias',
        key: 'namenszusatz'
    }
]

// if the sider is added with a custom component the surrounding ant Layout component will be
// missing the ant-layout-has-sider class and not render sider and content correctly 
export default function SearchPage( props ) {
    return(
        <Layout style={{ backgroundColor: "#ffffff" }}>
            <Sider style={{backgroundColor: "#ffffff"}}>
                <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1','sub2']}>
                    <SubMenu key="sub1" title="Dokumenttypen">
                        <Menu.Item key="1">Preisausschreiben</Menu.Item>
                        <Menu.Item key="2">Personen</Menu.Item>
                        <Menu.Item key="3">Körperschaften</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Schlagworte">
                        <Menu.Item key="4">Verein</Menu.Item>
                        <Menu.Item key="5">Eisenbahn</Menu.Item>
                        <Menu.Item key="6">Gemeindefest</Menu.Item>
                        <Menu.Item key="7">Bergbau</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ marginLeft: "50px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Layout>
                    <p>Du suchst nach {props.query}</p>
                    {
                        <Table columns={columns} dataSource={props.requestData} />
                    }
                    
                </Layout>
            </Content>
        </Layout>
    );
}