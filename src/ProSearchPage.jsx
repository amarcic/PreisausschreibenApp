import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Menu, Table, Row, Col } from 'antd';

import dateHelper from './dateHelper';
import FacetSider from './FacetSider';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const columnsPreisausschreiben = [
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Ort</span>,
        dataIndex: '_source.esPlacename',
        key: '_source.esPlacename',
        // will have to check, if the unique keys generated when the array is mapped are used in a meaningful way (index for unique keys not recommended)
        render: (text) => <span> {text} </span>,
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

export default function SearchPage( props ) {

    let columns;

    const data = props.requestData || [];

    switch( props.searchType ) {
        case "contest": columns = columnsPreisausschreiben; break;
        case "personen": columns = columnsPersonen; break;
        case "koerperschaften": columns = columnsKoerperschaften; break;
        case "serien": columns = columnsSerien; break;
    }

    return(
        <Layout>
            <Content style={{ marginTop: "50px" }}>
            
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Row style={{marginTop: "50px"}}>
                    <Col span={4}><span>Suchbegriff: {props.query.match._all}{props.hitsCount?"("+props.hitsCount+")":"" }</span><FacetSider updateQuery={props.updateQuery} searchType={props.searchType} /></Col>
                    <Col span={18}>

                        <Table
                            bodyStyle={{ backgroundColor: "#ffffff" }}
                            columns={columns} 
                            dataSource={data} 
                            rowKey={ record => record._id }
                            pagination={{ total: props.hitsCount, showTotal: total => total + ' Treffer', onChange: (page, pageSize) => props.updateQuery({ input: props.query, type: props.searchType, offset: (page-1)*pageSize}) }}
                            //onRow={ (record) => {return { onClick: ()=>{alert("hello");} }; }  }
                            />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}