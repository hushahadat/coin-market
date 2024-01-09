import { useNavigate, Outlet } from "react-router-dom";

import React, { useState } from "react";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Content, Footer, Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigate = useNavigate()
  const navigate = useNavigate();
  const ChangeURl = (url) => {
    navigate(url);
  };
  const item = [
    {
      label: "Dashboard",
      key: "1",
      icon: <PieChartOutlined />,
      onClick: () => {
        ChangeURl("/");
      },
    },
    {
      label: "Detail-view",
      key: "1",
      icon: <DesktopOutlined />,
      disabled: true,
      onClick: () => {
        console.log("++++++++++++");
      },
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      {/* <nav
        style={{
          minHeight: "5vh",
        }}
      >
        NAV BAR
      </nav> */}
      <Layout
        style={{
          minHeight: "95vh",
        }}
      >
        <Sider
          style={{ backgroundColor: "#1f183e" }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{ backgroundColor: "#251c4c" }}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={item}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <main>
              <Outlet />
            </main>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Hussain ©2023 Created by Shahadat
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
