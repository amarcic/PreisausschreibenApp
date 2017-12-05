import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Table } from 'antd';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

// is this the right place for the columns definition? should it be inside the SearchPage function?
const columnsPersonen = [
    {
        title: 'Nachname',
        dataIndex: 'value.nachname',
        key: 'nachname',
        render: (text, record) => <Link to={"/person/" + record.id}> {text} </Link>
    },
    {
        title: 'Vorname',
        dataIndex: 'value.vorname',
        key: 'vorname'
    },
    {
        title: 'Alias',
        dataIndex: 'value.alias',
        key: 'alias'
        //render: (text, record) => record.value.name.alias? <ul>{ record.value.name.alias.map( alias => {<li>alias</li>} ) }</ul> : ""
    }
]

const columnsPreisausschreiben = [
    {
        title: 'Ausschreibung',
        dataIndex: 'value.ausschreibung',
        key: 'ausschreibung',
        render: (text, record ) => <Link to={"/preisausschreiben/" + record.id}> {text} </Link>
    },
    /* ereignisse is an array of deeply nested objects unfit for table display*/
    {
        title: 'Ereignisse',
        dataIndex: 'value.ereignisse',
        key: "ereignisse",
        render: (text, record) => <ul> {record.value.ereignisse.map( ereignis => <li>  {(ereignis.zeit? ereignis.zeit.datum : "") + ", " + ereignis.ereignistyp + ", " + ( ereignis.ort? ereignis.ort.ortsname : "" )} </li>)} </ul>
    },
    {
        title: 'Aufgaben',
        dataIndex: 'value.aufgaben',
        key: 'aufgaben'
    }
]

const columnsKoerperschaften = [
    {
        title: 'Bezeichnung',
        dataIndex: 'value.bezeichnung[0]',
        key: 'bezeichnung',
        render: (text, record ) => <Link to={"/koerperschaft/" + record.id}> {text} </Link>
    },
    {
        title: 'Ort',
        dataIndex: 'value.ort',
        key: "ort" 
    },
    {
        title: 'Art',
        dataIndex: 'value.art',
        key: 'art'
    }
]

const columnsSerien = [
    {
        title: 'Bezeichnung der Serie',
        dataIndex: 'value',
        key: "serienbezeichnung",
        render: text => <Link to={"/serie/" + text}> {text} </Link>
    }
]

// if the sider is added with a custom component the surrounding ant Layout component will be
// missing the ant-layout-has-sider class and not render sider and content correctly 
export default function SearchPage( props ) {

    let columns;

    switch( props.collection ) {
        case "preisausschreiben": columns = columnsPreisausschreiben; break;
        case "personen": columns = columnsPersonen; break;
        case "koerperschaften": columns = columnsKoerperschaften; break;
        case "serien": columns = columnsSerien; break;
    }

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
                    <p>Du suchst nach {props.query} im {props.collection}stapel</p>
                    {
                        /* as it is the id can be repeated, since results can be repeated in the view
                        right now I use it as a cheap filter... but really shouldn't
                        I keep it for now since elastic search should be able to filter results before sending the response object
                        */
                        <Table columns={columns} dataSource={props.requestData} rowKey={ record => record.uid } />
                    }
                    
                </Layout>
            </Content>
        </Layout>
    );
}