import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */

const url = process.env.PUBLIC_URL + '/img/background.jpg'

const HeaderWrapper = styled.header`
  ẁidth: 100%;
  height: 49px;
  background-color: #242424;
  opacity 0.8;
`
const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`  

const MainWrapper = styled.main`
  height: 600px;
  padding-top 130px;
  background: url(${url}) no-repeat;
  background-siez: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
