import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const NavBar = () => {
  return (
    <Footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', borderRadius: '15px' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{ borderRadius: '15px', width: '100%', textAlign: 'center', lineHeight: '64px' }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />} style={{ borderRadius: '15px', outline:'none', ':focus': { outline: 'none' } }} />
          <Menu.Item key="search" icon={<SearchOutlined />} style={{ borderRadius: '15px', outline:'none' }} />
          <Menu.Item key="profile" icon={<UserOutlined />} style={{ borderRadius: '15px', outline:'none' }} />
        </Menu>
      </div>
    </Footer>
  );
};

export default NavBar;
