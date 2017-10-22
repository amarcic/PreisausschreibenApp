import React from 'react';
import { Menu, Layout } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
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
        );
    }
}
