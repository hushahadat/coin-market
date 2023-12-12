
import { getAllCoins } from './api/Api';
import { Dashboard } from './component/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React, { useState } from 'react';
import './App.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // 
];



function App() {
  const [collapsed, setCollapsed] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
       loader: getAllCoins
    },
    {
      path :"/dashboard",
      element : <h5>Hello world</h5>
    }
    
  ]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (

    <>
    <nav style={{
        minHeight: '5vh',
      }}>ssds</nav>
        <Layout
      style={{
        minHeight: '95vh',
      }}
    >
      <Sider style={{backgroundColor : '#1f183e'}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu style={{backgroundColor : '#251c4c'}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <RouterProvider router={router} />
          {/* <div
            style={{
              padding: 24,
              minHeight: 560,
              background: colorBgContainer,
              backgroundColor:'red'
            }}
          >
             
          </div> */}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Hussain ©2023 Created by Shahadat
        </Footer>
      </Layout>
    </Layout></>
  );
}

export default App;
