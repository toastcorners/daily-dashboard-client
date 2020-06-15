import React, { Component } from 'react'
import SignIn from './SignIn'
import './App.css';

class App extends Component {

  state = {
    news: [],
    forecast: [],
    horoscope: ""
  }

  componentDidMount(){
  this.fetchNews()
  }

  fetchNews = () => {
    fetch('http://localhost:3000/api/v1/news_articles')
    .then(resp => resp.json())
    .then(data => {
      this.setState({news: data})
    })
  }





render() {
  return (
    <div>
    <SignIn />
    <h1>I'm here</h1>
    
    </div>
    )
  }
}

export default App;
