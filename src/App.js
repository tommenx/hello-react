import React, {Component} from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import DailyCheck from "./content/DailyCheck";


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <h1>工作台</h1>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                管控措施抽查
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ContainerOutlined />}>
                                Option 3
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                height: '100%'
                            }}
                        >
                            <DailyCheck/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}

export default App;