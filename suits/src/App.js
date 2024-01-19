// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Footer } = Layout;

const NavBar = () => {
  return (
    <Footer style={{ position: 'fixed', bottom: 50, right: 15, width: '100%' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ display: 'flex', justifyContent: 'space-evenly', borderRadius: '15px' }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />} style={{ borderRadius: '15px' }} />
        {/* <Link to="/">home</Link> */}
        <Menu.Item key="search" icon={<SearchOutlined />} style={{ borderRadius: '15px' }} />
        {/* <Link to="/recherche">recherche</Link> */}
        <Menu.Item key="profile" icon={<UserOutlined />} style={{ borderRadius: '15px' }} />
        {/* <Link to="/profil">profil</Link> */}
      </Menu>
    </Footer>
  );
};

export default NavBar;

