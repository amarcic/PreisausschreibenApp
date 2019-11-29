import React from 'react';
import { Layout, Menu, Table, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

import dateHelper from './dateHelper';
import FacetSider from './FacetSider';
import Markdown from 'markdown-to-jsx';
//import EsSearchBox from './EsSearchBox';

const { Content } = Layout;

//sorter for columns only sort through the currently displayed results. I should either use elasticsearch for sorting (so all results are sorted) or drop the function 
const columnsPreisausschreiben = [
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Ort</span>,
        dataIndex: '_source.esPlacename',
        key: '_source.esPlacename',
        // will have to check, if the unique keys generated when the array is mapped are used in a meaningful way (index for unique keys not recommended)
        render: (text) => <span> {text} </span>/*,
        sorter: (a, b) =>  {if ( a._source.esPlacename > b._source.esPlacename ) {return 1;} 
                                    if ( a._source.esPlacename < b._source.esPlacename ) {return -1;}
                                    return 0;},
        sortDirection: ['descend', 'ascend']*/
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Zeit</span>,
        dataIndex: '_source.esStart',
        key: '_source.esStart',
        render: (text, record) => <span>{dateHelper(text) + " bis " + dateHelper(record._source.esEnd)}</span>,
        sorter: true,
        //bad idea: the function will be repeated once for every line of results displayed
        //sorter: (a, b, sortOrder) => props.updateQuery({ input: props.query, type: props.searchType, sort: {on: "esStart", order: sortOrder} }),
        /*sorter: (a, b) =>  {if ( a._source.esEnd > b._source.esEnd ) {return 1;} 
                                    if ( a._source.esEnd < b._source.esEnd ) {return -1;}
                                    return 0;},*/
        sortDirection: ['descend', 'ascend']
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Ausschreibung</span>,
        dataIndex: '_source.beteiligte',
        key: 'value.ausschreibung',
        render: (text, record ) => <span>{text.filter( participant => participant.rolle.indexOf('ausschreibende Institution/Person')>-1 ).length>0? text.filter( participant => participant.rolle.indexOf('ausschreibende Institution/Person')>-1 ).map(participant => participant.name).join(", "): "unbekannt"} </span>
    },
    {
        title: <span style={{ fontFamily: "'Source Sans Pro', sans"}} >Aufgaben</span>,
        dataIndex: '_source.aufgaben',
        key: 'value.aufgaben',
        render: (text) => text.map( task => task.aufgabentyp ).join(", ")
        /*render: (text, record) => <div>{record.value.aufgaben.split( "," ).join(", ")}</div>*/
    }
]

function ProSearchPage( props ) {

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
            <Content style={{ marginTop: "10px" }}>
            
                {/*<Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/search">Suchergebnisse</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col>
                        <EsSearchBox updateQuery={props.updateQuery} strQuery={props.strQuery} filterCountry={props.filterCountry} filterTaskTypes={props.filterTaskTypes} filterTimeSpan={props.filterTimeSpan} searchType={props.searchType} />
                    </Col>
                </Row>*/}
                <Row style={{marginTop: "50px"}}>
                    <Col span={6}>
                        <span>Filter:</span>
                        <FacetSider query={props.strQuery} /*filterObj={props.filterObj}*/ filterCountry={props.filterCountry} filterTimeSpan={props.filterTimeSpan} filterTaskTypes={props.filterTaskTypes} updateQuery={props.updateQuery} offset={props.offset} searchType={props.searchType} />
                    </Col>
                    <Col span={18}>
                        <span>{props.hitsCount?props.hitsCount+" Treffer": "Keine Treffer" }</span>
                        {/*let's put the map here. should be closed by default, so rendering can start once it is opened*/}
                        <Table
                            //bodyStyle={{ backgroundColor: "#ffffff" }}#
                            style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "0" }} 
                            columns={columns} 
                            dataSource={data} 
                            rowKey={ record => record._id }
                            pagination={{ total: props.hitsCount, current: props.offset/10+1, showTotal: total => total + ' Treffer', onChange: (page, pageSize) => props.updateQuery({ strQueryObj: props.strQuery, /*filterObj: props.filterObj,*/filterCountry: props.filterCountry, filterTimeSpan: props.filterTimeSpan, filterTaskTypes: props.filterTaskTypes, type: props.searchType, sort: props.sort, offset: (page-1)*pageSize}) }}
                            onHeaderRow={ (column, index) => {return {onClick: event => props.updateQuery({ strQueryObj: props.strQuery, /*filterObj: props.filterObj,*/ filterCountry: props.filterCountry, filterTaskTypes: props.filterTaskTypes, filterTimeSpan: props.filterTimeSpan, type: props.searchType, sort: {on: "esStart", order: "asc"}, offset: props.offset })}} }
                            onRow={ (record) => {return { onClick: (event)=>{props.history.push('/dokumente/' + record._id);} }; }  }
                            />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default withRouter( ProSearchPage );