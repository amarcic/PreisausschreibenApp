import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Table, Row, Col } from 'antd';

import dateHelper from './dateHelper';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

// is this the right place for the columns definition? should it be inside the SearchPage function?

const columnsPreisausschreiben = [
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Ort</span>,
        dataIndex: '_source.esPlacename',
        key: '_source.esPlacename',
        // will have to check, if the unique keys generated when the array is mapped are used in a meaningful way (index for unique keys not recommended)
        render: (text) => <span> {text} </span>,
        //render: (text, record) => <ul> {record._source.ereignisse.map( ( ereignis, i ) => <li key={i} >  {(ereignis.zeit? ereignis.zeit.datum : "") + ", " + ereignis.ereignistyp + ", " + ( ereignis.ort? ereignis.ort.ortsname : "" )} </li>)} </ul>
        sorter: (a, b) =>  {if ( a._source.esPlacename > b._source.esPlacename ) {return 1;} 
                                    if ( a._source.esPlacename < b._source.esPlacename ) {return -1;}
                                    return 0;},
        sortDirection: ['descend', 'ascend']
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Zeit</span>,
        dataIndex: '_source.esStart',
        key: '_source.esStart',
        render: (text, record) => <span>{dateHelper(text) + " bis " + dateHelper(record._source.esEnd)}</span>,
        sorter: (a, b) =>  {if ( a._source.esEnd > b._source.esEnd ) {return 1;} 
                                    if ( a._source.esEnd < b._source.esEnd ) {return -1;}
                                    return 0;},
        sortDirection: ['descend', 'ascend']
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Ausschreibung</span>,
        dataIndex: '_source.beteiligte',
        key: 'value.ausschreibung',
        render: (text, record ) => <Link to={"/dokumente/" + record._id}> {text.filter( participant => participant.rolle.indexOf('ausschreibende Institution/Person')>-1 ).length>0? text.filter( participant => participant.rolle.indexOf('ausschreibende Institution/Person')>-1 ).map(participant => participant.name).join(", "): "unbekannt"} </Link>
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Aufgaben</span>,
        dataIndex: '_source.aufgaben',
        key: 'value.aufgaben',
        render: (text) => text.map( task => task.aufgabentyp ).join(", ")
        /*render: (text, record) => <div>{record.value.aufgaben.split( "," ).join(", ")}</div>*/
    }
]

// if the sider is added with a custom component the surrounding ant Layout component will be
// missing the ant-layout-has-sider class and not render sider and content correctly 
export default function SearchPage( props ) {

    let columns;

    const data = props.requestData || [];
    
    //the variables and forEach block filter the data so only unique ids remain in the array
    //can be taken out when using elasticsearch
    //let dataIds = [];
    //let dataUnique = [];

    //props.requestData ? data = props.requestData : data = [] ;

    
    
   /* data.forEach( function( e ) {
        if( dataIds.indexOf( e.id ) === -1 ) {
            dataIds.push( e.id );
            dataUnique.push( e );
        }
    } );
    */

    switch( props.collection ) {
        case "preisausschreiben": columns = columnsPreisausschreiben; break;
        case "personen": columns = columnsPersonen; break;
        case "koerperschaften": columns = columnsKoerperschaften; break;
        case "serien": columns = columnsSerien; break;
    }

    return(
        <Layout>
            {/* waiting for elasticsearch
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
            </Sider>*/}
            <Content style={{ marginTop: "50px" }}>
            
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Layout>
                <Row><Col span={24}>
                    <p>Suchbegriff: {props.query}</p>
                    {
                        /* as it is the id can be repeated, since results can be repeated in the view
                        right now I use it as a cheap filter... but really shouldn't
                        I keep it for now since elasticsearch should be able to filter results before sending the response object
                        */
                        //antd table component sets the word-break CSS property to "break-all"; solution below (changing it in the table component) does not work
                        <Table
                            bodyStyle={{ backgroundColor: "#ffffff" }}
                            columns={columns} 
                            dataSource={data} 
                            rowKey={ record => record._id }
                            //onRow={ (record) => {return { onClick: ()=>{alert("hello");} }; }  }
                            />
                    }
                </Col></Row>     
                </Layout>
               
            </Content>
        </Layout>
    );
}