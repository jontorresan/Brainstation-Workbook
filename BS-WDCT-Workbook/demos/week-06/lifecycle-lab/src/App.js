import React, { Component } from 'react';
import './App.css';
import request from 'request'
import axios from 'axios'

const nasaUrl = 'https://api.nasa.go/planetary/apod?api_key=NP6EqWhL7HsvhKRrUzmOG7moB0ETUavrrdsMd5wh'

class App extends Component {
  state = {
    img: '',
    loading: true
  }

  componentDidMount() {
    axios
      .get(nasaUrl)
      .then(res => {
        const { data } = res
        this.setState({
          img: data.url,
          loading: false,
          title: data.title
        })      
      })
      .catch(err => {
        console.debug('ERROR!')
        console.log(err)
      })

    // request(nasaUrl, (error, response, body) => {
    //   const data = JSON.parse(body)
    //   this.setState({
    //     img: data.url,
    //     loading: false,
    //     title: data.title
    //   })
    // })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? 'Loading...' : (
          <div>
            <h1>{this.state.title}</h1>
            <img src={this.state.img} alt="" width='500'/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
