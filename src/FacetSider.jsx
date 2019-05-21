import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout, Menu, Input } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

function FacetSider( props ) {

    let selectValue = props.searchType;

    return(
        <Sider>
            <Input.Search 
                size="large"
                placeholder="Ihre Suche..."
                //style={{ width: 500 }}
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
            <Menu theme="light" mode="inline" defaultOpenKeys={['sub1','sub2']}>
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

    );
}

export default withRouter(FacetSider);