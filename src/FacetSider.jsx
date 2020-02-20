import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout, Menu, Input, Checkbox, Dropdown, Icon, Slider, Row, Col, Popover } from 'antd';

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

const CheckboxGroup = Checkbox.Group;
const { Sider } = Layout;
const { SubMenu } = Menu;

const searchFields = (
        <Row>
            <Col><Checkbox value="esTaskDescription">Aufgabenstellung</Checkbox></Col>
            <Col><Checkbox value="esTags">Schlagwörter</Checkbox></Col>
            <Col><Checkbox value="formalia">Formalia</Checkbox></Col>
            <Col><Checkbox value="quellen.quellenangabe">Quellen</Checkbox></Col>
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

class FacetSider extends React.Component {

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
        const queryStr = this.props.query.simple_query_string.query;
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
            <Menu style={ {width: 256, border: "1px solid #E2E8F0"} } mode="inline" defaultOpenKeys={['subTaskTypes', this.props.filterCountry&&this.props.filterCountry.length>0?'subCountries':'']}>
                        <Menu.Item style= {{ height: 70}}>
                            <Input.Search 
                                size="large"
                                placeholder={this.props.query.simple_query_string.query}
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
                            <Popover content="Anleitung zur Suche (z.B. Sonderzeichen) im Menü unter Forschung"><Icon type="question-circle" /></Popover>
                        </Menu.Item>
                        <Menu.Item>
                        <Dropdown trigger={['click']} overlay={<Menu><Menu.Item><CheckboxGroup onChange={this.onChangeFields} defaultValue={this.props.query.simple_query_string.fields} >{searchFields}</CheckboxGroup></Menu.Item></Menu>}><span>suchen nur in <Icon type="down" /></span></Dropdown>
    
                        </Menu.Item>
                        <SubMenu key="subTaskTypes" title="Aufgabentypen">
                            <Menu.Item style={{height: 150}} key="10">
                                <CheckboxGroup onChange={this.onChangeTaskTypes} defaultValue={this.props.filterTaskTypes} >
                                        {taskTypes}
                                </CheckboxGroup>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Divider />
                        <Menu.Item style={{height: 110}}>
                        <div>
                            Zeitspanne<br />
                            <Slider
                                min={20}
                                max={70}
                                range marks={{20: "1820", 70: "1870"}}
                                onAfterChange={this.onChangeTimeSpan}
                                defaultValue={this.props.filterTimeSpan || [20,70] }
                                tipFormatter={ value => `18${value}` }
                                style={{marginTop:20}}
                            />
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