import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Child from './components/Child/Child';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux Training</h1>
        </header>
        <div className="propsContainer">
          <div>
          <h1>These are the redux state values:</h1>
          <h1>{this.props.name}</h1>
          <h1>{this.props.age}</h1>
            <h1>{this.props.hairColor}</h1>
            </div>
          <Child />
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, age, hairColor } = state;
  return {
    name,
    age,
    hairColor,
  };
}

export default connect(mapStateToProps)(App);

