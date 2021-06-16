import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ContactsOutlined, AuditOutlined } from '@ant-design/icons'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';



const { Content, Header } = Layout

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout >
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/"><HomeOutlined /> Home</Link></Menu.Item>
              <Menu.Item key="2"> <UserOutlined />
                <Link to="/about">About</Link></Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact"><ContactsOutlined /> Contact</Link></Menu.Item>
              <Menu.Item key="4">
                <Link to="/resume"><AuditOutlined /> Resume</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    )
  }
}
