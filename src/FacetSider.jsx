import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout, Menu, Input, Checkbox, Dropdown, Icon, Row, Col } from 'antd';

const CheckboxGroup = Checkbox.Group;
const { Sider } = Layout;
const { SubMenu } = Menu;

const optionsType = [ {label: "Preisausschreiben", value: "contest"}, {label: "Personen", value: "person"} ]
const optionsParticipants = [ {label: "Name", value: "name"}, {label: "Rolle", value: "rolle"} ]

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

function onChange(checkedValues) {
    console.log(checkedValues)
}

function FacetSider( props ) {

    let selectValue = props.searchType;

    return(
        <Sider>
            <Input.Search 
                size="large"
                placeholder="Ihre Suche..."
                onSearch={ value => {
                            //if component is changed to a stateful component extending React.Component, use this.props.history.push(...)
                            let cleanedInput = value.toLowerCase();
                            let queryObj = {match: { _all: cleanedInput }};
                            props.history.push('/prosearch');
                            props.updateQuery({ input: queryObj, type: selectValue});
                            //props.updateInput(value);
                            //return console.log(value);
                            } 
                        }
        />
        <Checkbox onChange={onChange}>Preisausschreiben</Checkbox>
        <Dropdown overlay={menuRoles}><span>Rollen <Icon type="down" /></span></Dropdown>

        <Menu mode="inline">
                <SubMenu key="sub1" title="Freie Suche">
                    <Menu.Item key="1">
                        <Input.Search 
                            size="large"
                            placeholder="Ihre Suche..."
                            onSearch={ value => {
                                        //if component is changed to a stateful component extending React.Component, use this.props.history.push(...)
                                        let cleanedInput = value.toLowerCase();
                                        let queryObj = {match: { _all: cleanedInput }};
                                        props.history.push('/prosearch');
                                        props.updateQuery({ input: queryObj, type: selectValue});
                                        //props.updateInput(value);
                                        //return console.log(value);
                                        } 
                                    }
                        />
                    </Menu.Item>
                </SubMenu>
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

export default withRouter(FacetSider);