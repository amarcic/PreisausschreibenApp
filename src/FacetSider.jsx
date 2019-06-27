import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout, Menu, Input, Checkbox, Dropdown, Icon, Slider, Radio, Row, Col } from 'antd';
import { filterOption } from 'rc-mentions/lib/util';

const countriesArray = [
    "Kingdom of the Netherlands",
    "Kingdom of Belgium",
    "Kingdom of Spain",
    "France",
    "Federal Republic of Germany",
    "Hungary",
    "Ireland",
    "United Kingdom of Great Britain and Northern Ireland",
    "Mexico",
    "United States",
    "Czechia",
    "Repubblica Italiana",
    "Republic of Austria",
    "Republic of Croatia",
    "People’s Democratic Republic of Algeria",
    "România",
    "Hellenic Republic",
    "Switzerland",
    "Republic of Poland",
    "Russian Federation",
    "Kingdom of Denmark",
    "Republic of Slovenia",
    "Grand Duchy of Luxembourg",
    "Kingdom of Norway",
    "Republic of Latvia",
    "Federative Republic of Brazil",
    "Kingdom of Sweden"
  ];

  const countries = (
    <Row>
        <Col><Checkbox value="algeria">Algerien</Checkbox></Col>
        <Col><Checkbox value="belgium">Belgien</Checkbox></Col>
        <Col><Checkbox value="brazil">Brasilien</Checkbox></Col>  
        <Col><Checkbox value="denmark">Dänemark</Checkbox></Col>
        <Col><Checkbox value="germany">Deutschland</Checkbox></Col>
        <Col><Checkbox value="france">Frankreich</Checkbox></Col>
        <Col><Checkbox value="hellenic">Griechenland</Checkbox></Col>
        <Col><Checkbox value="ireland">Irland</Checkbox></Col>
        <Col><Checkbox value="italiana">Italien</Checkbox></Col>
        <Col><Checkbox value="croatia">Kroatien</Checkbox></Col>
        <Col><Checkbox value="latvia">Lettland</Checkbox></Col>
        <Col><Checkbox value="luxembourg">Luxemburg</Checkbox></Col>
        <Col><Checkbox value="mexico">Mexiko</Checkbox></Col>
        <Col><Checkbox value="netherlands">Niederlande</Checkbox></Col>
        <Col><Checkbox value="norway">Norwegen</Checkbox></Col>
        <Col><Checkbox value="austria">Österreich</Checkbox></Col>
        <Col><Checkbox value="poland">Polen</Checkbox></Col>
        <Col><Checkbox value="românia">Rumänien</Checkbox></Col>
        <Col><Checkbox value="russian">Russland</Checkbox></Col>
        <Col><Checkbox value="switzerland">Schweiz</Checkbox></Col>
        <Col><Checkbox value="sweden">Schweden</Checkbox></Col>     
        <Col><Checkbox value="slovenia">Slovenien</Checkbox></Col>
        <Col><Checkbox value="spain">Spanien</Checkbox></Col>
        <Col><Checkbox value="czechia">Tschechien</Checkbox></Col>
        <Col><Checkbox value="hungary">Ungarn</Checkbox></Col>
        <Col><Checkbox value="britain">Vereinigtes Königreich</Checkbox></Col>
        <Col><Checkbox value="states">Vereinigte Staaten</Checkbox></Col>
 
    </Row>
);

//should this be a form?
const filter = [
    {
        nested: {
            path: "aufgaben",
            filter: {
                and: [
                    {
                        terms: { "aufgaben.aufgabentyp.raw": [ "zu vertonender Text", "Komposition"] }
                    },
                    {
                        term: { systematik: "kantate" }
                    }
                ]
            }
        }
    },
    {
        nested: {
            path: "ereignisse",
            filter: {
                and: [
                    {
                        term: { esCountry: "france" }
                    }
                ]
            }
        }
    },
    {
        term: { schlagwoerter: "italien" }
    },
    {
        term: { esPlacename: "paris" }
    }, {
        range: {
            esStart: {
                from: "1825-01-01",
                to: "1865-12-31"
            }
        }
    }
]

//if I want to feed it with props from state, this needs to be inside the function component;
let filterObj = { filter: []}

const CheckboxGroup = Checkbox.Group;
const { Sider } = Layout;
const { SubMenu } = Menu;

const optionsType = [ {label: "Preisausschreiben", value: "contest"}, {label: "Personen", value: "person"} ]
const optionsParticipants = [ 
                                {label: "TeilnehmerIn", value: "TeilnehmerIn"}, 
                                {label: "Jurymitglied", value: "Jurymitglied"}, 
                                {label: "ausschreibende Institution/Person", value: "ausschreibende Institution/Person"}, 
                                {label: "OrganisatorIn/RepräsentantIn", value: "OrganisatorIn/RepräsentantIn"},
                                {label: "InterpretIn", value: "InterpretIn"},
                                {label: "JournalistIn", value: "JournalistIn"},
                                {label: "KomponistIn/ArrangeurIn", value: "KomponistIn/ArrangeurIn"},
                                {label: "AutorIn", value: "AutorIn"},
                                {label: "MäzenIn", value: "MäzenIn"},
                                {label: "LehrerIn von TeilnehmerIn", value: "LehrerIn von TeilnehmerIn"},
                                {label: "Sonstige", value: "Sonstige"},
                            ]

const menuRoles = (
    <Menu>
        <Menu.Item key="0">TeilnehmerIn</Menu.Item>
        <Menu.Item key="1">Jurymitglied</Menu.Item>
        <Menu.Item key="2">ausschreibende Institution/Person</Menu.Item>
        <Menu.Item key="3">OrganisatorIn/RepräsentantIn</Menu.Item>
        <Menu.Item key="4">InterpretIn</Menu.Item>
        <Menu.Item key="5">JournalistIn</Menu.Item>
        <Menu.Item key="6">KomponistIn/ArrangeurIn</Menu.Item>
        <Menu.Item key="7">AutorIn</Menu.Item>
        <Menu.Item key="8">MäzenIn</Menu.Item>
        <Menu.Item key="9">LehrerIn von TeilnehmerIn</Menu.Item>
        <Menu.Item key="10">Sonstige</Menu.Item>
    </Menu>
);

const searchFields = (
        <Row>
            <Col><Checkbox value="beteiligte.name">Beteiligte</Checkbox></Col>
            <Col><Checkbox value="aufgaben.spezifizierung">Aufgabenstellung</Checkbox></Col>
            <Col><Checkbox value="schlagwoerter">Tags</Checkbox></Col>
            <Col><Checkbox value="formalia">Formalia</Checkbox></Col>
            <Col><Checkbox value="quellen">Quellen</Checkbox></Col>
            <Col><Checkbox value="_all">...zurücksetzen</Checkbox></Col>
        </Row>
);

const taskTypes = (
        <Row>
            <Col><Checkbox value="Komposition">Komposition</Checkbox></Col>
            <Col><Checkbox value="Performance">Performance</Checkbox></Col>
            <Col><Checkbox value="zu vertonender Text">zu vertonender Text</Checkbox></Col>
            <Col><Checkbox value="Text über Musik">Text über Musik</Checkbox></Col>
            <Col><Checkbox value="Sonstiges">Sonstiges</Checkbox></Col>
        </Row>
);

/*const countries = (
        <Row>
            <Col><Checkbox value="france">Frankreich</Checkbox></Col>
            <Col><Checkbox value="belgium">Belgien</Checkbox></Col>
            <Col><Checkbox value="italy">Italien</Checkbox></Col>
            <Col><Checkbox value="netherlands">Niederlande</Checkbox></Col>
            <Col><Checkbox value="Sonstiges">Sonstiges</Checkbox></Col>
        </Row>
);*/

function handleSelect(e) {
    console.log(e.item.props.children);
} 

class FacetSider extends React.Component {

    //let selectValue = props.searchType;
    //elasticsearch depended

    constructor( props ) {
        super(props);
        this.state = {
            strQueryObj: { simple_query_string: { query: "", fields: ["_all"] } },
            filter: {taskTypes: {}},
            filterTaskTypes: [],
            filterTimeSpan: [20,70],
            filterCountry: [],
            onFields: ["_all"]
        }
        
        this.onChange = this.onChange.bind(this);
        this.onChangeTaskTypes = this.onChangeTaskTypes.bind(this);
        this.onChangeTimeSpan = this.onChangeTimeSpan.bind(this);
        this.onChangeFields = this.onChangeFields.bind(this);
        this.onChangeCountries = this.onChangeCountries.bind(this);
    }

    onChange(checkedValues) {
       /*can be deleted soon*/ }

    onChangeTaskTypes(checkedValues) {
        this.setState( {filterTaskTypes: checkedValues} )
        this.props.updateQuery({ 
            strQueryObj: this.state.strQueryObj, 
            filterTaskTypes: checkedValues, 
            filterTimeSpan: this.state.filterTimeSpan,
            filterCountry: this.state.filterCountry, 
            /*filterObj: this.state.filter,*/ 
            offset: 0, 
            type: this.props.searchType
        });

    }

    onChangeTimeSpan(value) {
        this.setState( {filterTimeSpan: value} )
        this.props.updateQuery({ 
            strQueryObj: this.state.strQueryObj, 
            filterTimeSpan: value, 
            filterCountry: this.state.filterCountry,
            filterTaskTypes: this.state.filterTaskTypes, 
            /*filterObj: this.state.filter,*/ 
            offset: 0, 
            type: this.props.searchType});
    }

    onChangeFields(checkedValues) {
        this.setState({onFields: checkedValues});
        const queryStr = this.state.strQueryObj.simple_query_string.query;
        console.log( "querystr: " + queryStr );
        let queryObj = { simple_query_string: {query: queryStr, fields: checkedValues} };
        this.props.updateQuery({ 
            strQueryObj: queryObj, 
            /*filterObj: this.state.filter,*/ 
            filterTaskTypes: this.props.filterTaskTypes, 
            filterCountry: this.props.filterCountry,
            filterTimeSpan: this.props.filterCountry,
            type: this.props.searchType,
            offset: 0
        });
    }

    onChangeCountries(checkedValues) {
        this.setState( {filterCountry: checkedValues} )
        this.props.updateQuery({ strQueryObj: this.state.strQueryObj, filterCountry: checkedValues, filterTimeSpan: this.state.filterTimeSpan, filterTaskTypes: this.state.filterTaskTypes, /*filterObj: this.state.filter,*/ offset: this.props.offset, type: this.props.searchType});
    }

    render() {
        return(
            <Sider>
            <Menu style={ {width: 256} } mode="inline" defaultOpenKeys={['subTaskTypes', this.props.filterCountry&&this.props.filterCountry.length>0?'subCountries':'']}>
                        <Menu.Item style= {{ height: 70}}>
                            <Input.Search 
                                size="large"
                                placeholder="Ihre Suche..."
                                style={{marginTop: 25}}
                                onSearch={ value => {
                                            //if component is changed to a stateful component extending React.Component, use this.props.history.push(...)
                                            let cleanedInput = value.toLowerCase();
                                            this.state.strQueryObj = {simple_query_string: { query: cleanedInput, fields: this.state.onFields } };
                                            //this.props.history.push('/prosearch');
                                            this.props.updateQuery({ 
                                                                    strQueryObj: {simple_query_string: { query: cleanedInput, fields: this.state.onFields } }, 
                                                                    /*filterObj: this.state.filter,*/ 
                                                                    filterTaskTypes: this.props.filterTaskTypes, 
                                                                    filterCountry: this.props.filterCountry, 
                                                                    filterTimeSpan: this.props.filterTimeSpan, 
                                                                    type: this.props.searchType , 
                                                                    offset: 0
                                                                });
                                            } 
                                        }
                            />
                            <Icon type="question-circle" />
                        </Menu.Item>
                        <Menu.Item>
                        <Dropdown trigger={['click']} overlay={<Menu><Menu.Item><CheckboxGroup onChange={this.onChangeFields} value={this.props.filterTaskTypes} >{searchFields}</CheckboxGroup></Menu.Item></Menu>}><span>suchen nur in <Icon type="down" /></span></Dropdown>
    
                        </Menu.Item>
                        <SubMenu key="subTaskTypes" title="Aufgabentypen">
                            <Menu.Item style={{height: 150}} key="10">
                                <CheckboxGroup onChange={this.onChangeTaskTypes} defaultValue={this.props.filterTaskTypes} >
                                        {taskTypes}
                                </CheckboxGroup>
                            </Menu.Item>
                        </SubMenu>
                        {/*<Menu.Divider >o</Menu.Divider>
                        <Menu.Item>Name</Menu.Item>
                        <SubMenu key="subRole" title="Rolle" multiple="true" onClick={handleSelect}>
                            <Menu.Item key="0">TeilnehmerIn</Menu.Item>
                            <Menu.Item key="1">Jurymitglied</Menu.Item>
                            <Menu.Item key="2">ausschreibende Institution/Person</Menu.Item>
                            <Menu.Item key="3">OrganisatorIn/RepräsentantIn</Menu.Item>
                            <Menu.Item key="4">InterpretIn</Menu.Item>
                            <Menu.Item key="5">JournalistIn</Menu.Item>
                            <Menu.Item key="6">KomponistIn/ArrangeurIn</Menu.Item>
                            <Menu.Item key="7">AutorIn</Menu.Item>
                            <Menu.Item key="8">MäzenIn</Menu.Item>
                            <Menu.Item key="9">LehrerIn von TeilnehmerIn</Menu.Item>
                            <Menu.Item key="10">Sonstige</Menu.Item>                   
                        </SubMenu>*/}
                        <Menu.Divider />
                        <Menu.Item style={{height: 110}}>
                        <div>
                            Zeitspanne<br />
                            <Slider range marks={{0: "", 20: "1820", 70: "1870", 100: ""}} onAfterChange={this.onChangeTimeSpan} defaultValue={this.props.filterTimeSpan || [20,70] } tipFormatter={ value => `18${value}` } style={{marginTop:20}} />
                        </div>
                        </Menu.Item>
                        <SubMenu key="subCountries" title="Länder"><Menu.Item style={{height: 680}} key="11"><CheckboxGroup onChange={this.onChangeCountries} defaultValue={this.props.filterCountry}>{countries}</CheckboxGroup></Menu.Item></SubMenu>
                        <Menu.Divider />
                        
                        
                        
                        
                        
            </Menu>
    
                {/*<Menu theme="light" mode="inline" defaultOpenKeys={['sub1','sub2']}>
                    <SubMenu key="sub1" title="Dokumenttypen">
                        <Menu.Item key="1"><Checkbox onChange={onChange}>Preisausschreiben</Checkbox></Menu.Item>
                        <Menu.Item key="2">Personen</Menu.Item>
                        <Menu.Item key="3">Körperschaften</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Beteiligte">
                        <Menu.Item key="4"><Checkbox onChange={onChange}>Name</Checkbox></Menu.Item>
                        <Menu.Item key="5">Rolle </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title="Ort und Zeit" >
    
                    </SubMenu>
                                    </Menu>*/}
            </Sider>
    
        );
    }
}

export default withRouter(FacetSider);