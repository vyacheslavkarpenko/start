import React, { Component } from 'react';
/*
import logo from './logo.svg';
*/
import './App.css';
/*
import First from'./components/First.js'
import Second from './components/Second';
import FirstClass from './components/FirstClass';
import View from './components/View';
*/
import Post from './components/Post';
import articles from './fixtures/articles'
import ArticlesList from './components/ArticlesList'

class App extends Component {
  render() {
    return (
        <div className="App">
      {/* 

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <First />
        <Second />
        <FirstClass />
        <View />
  */} 
      <div className="post">
        <ArticlesList articles = {articles} />
      </div>
    </div>
    );
  }
}

export default App;
