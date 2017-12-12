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
        key: 'value.nachname',
        render: (text, record) => <Link to={"/dokumente/person/" + record.id}> {text} </Link>
    },
    {
        title: 'Vorname',
        dataIndex: 'value.vorname',
        key: 'value.vorname'
    },
    {
        title: 'Alias',
        dataIndex: 'value.alias',
        key: 'value.alias'
        //render: (text, record) => record.value.name.alias? <ul>{ record.value.name.alias.map( alias => {<li>alias</li>} ) }</ul> : ""
    }
]

const columnsPreisausschreiben = [
    {
        title: 'Ausschreibung',
        dataIndex: 'value.ausschreibung',
        key: 'value.ausschreibung',
        render: (text, record ) => <Link to={"/dokumente/preisausschreiben/" + record.id}> {text} </Link>
    },
    {
        title: 'Ereignisse',
        dataIndex: 'value.ereignisse',
        key: 'value.ereignisse',
        // will have to check, if the unique keys generated when the array is mapped are used in a meaningful way (index for unique keys not recommended)
        render: (text, record) => <ul> {record.value.ereignisse.map( ( ereignis, i ) => <li key={i} >  {(ereignis.zeit? ereignis.zeit.datum : "") + ", " + ereignis.ereignistyp + ", " + ( ereignis.ort? ereignis.ort.ortsname : "" )} </li>)} </ul>
    },
    {
        title: 'Aufgaben',
        dataIndex: 'value.aufgaben',
        key: 'value.aufgaben'
    }
]

const columnsKoerperschaften = [
    {
        title: 'Bezeichnung',
        dataIndex: 'value.bezeichnung[0]',
        key: 'value.bezeichnung',
        render: (text, record ) => <Link to={"/dokumente/koerperschaft/" + record.id}> {text} </Link>
    },
    {
        title: 'Ort',
        dataIndex: 'value.ort',
        key: "value.ort" 
    },
    {
        title: 'Art',
        dataIndex: 'value.art',
        key: 'value.art'
    }
]

const columnsSerien = [
    {
        title: 'Bezeichnung der Serie',
        dataIndex: 'value',
        key: "serienbezeichnung",
        render: text => <Link to={"/dokumente/serie/" + text}> {text} </Link>
    }
]

// if the sider is added with a custom component the surrounding ant Layout component will be
// missing the ant-layout-has-sider class and not render sider and content correctly 
export default function SearchPage( props ) {

    let columns;

    let data;
    
    //the variables and forEach block filter the data so only unique ids remain in the array
    //can be taken out when using elasticsearch
    let dataIds = [];
    let dataUnique = [];

    props.requestData ? data = props.requestData : data = [] ;
    
    data.forEach( function( e ) {
        if( dataIds.indexOf( e.id ) === -1 ) {
            dataIds.push( e.id );
            dataUnique.push( e );
        }
    } );

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
                        <Table columns={columns} dataSource={dataUnique} rowKey={ record => record.id } />
                    }
                    
                </Layout>
            </Content>
        </Layout>
    );
}