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
        <SayFullName name="Илья" surname="Муромец" link="http://vk.com" />
        <SayFullName name="Добрыня" surname="Никитич" link="http://facebook.com" />
        <SayFullName name="Алексей" surname="Попович" link="http://twitter.com" />       
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Имя: {props.name}, Фамилия: {props.surname} </h1>
        <a href={props.link} target="_blank"> Link zu meinem Profil </a>
      </div>  
    )
} 

export default App;
