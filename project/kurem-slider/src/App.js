import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

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


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1> Привет мир! </h1>
        <SayFullName name="Илья" surname="Муромец" link="vk.com" />
        <SayFullName name="Добрыня" surname="Никитич" link="facebook.com" />
        <SayFullName name="Алексей" surname="Попович" link="twitter.com" />       
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h2> Имя: {props.name}, Фамилия: {props.surname} </h2>
        <a href={"http://" + props.link} target="_blank"> Link zu meinem {props.link} </a>
      </div>  
    )
} 

export default App;
