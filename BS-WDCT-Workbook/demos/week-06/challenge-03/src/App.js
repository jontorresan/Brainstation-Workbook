import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const locationApi = city => `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=e86222355af7460b9e753283326cfbb7&language=en&pretty=1`
const weatherApi = (lat, lng) => `https://api.darksky.net/forecast/82317ee0c43e86070fe114fabe7b32b7/${lat},${lng}`

class App extends Component {

  state = {
    timezone: '',
    weather: {},
    city: '',
    loading: true
  }

  componentDidMount() {
    this.getWeather('Vancouver')
  }

  getWeather = city => {
    axios
      .get(locationApi(city))
      .then(({ data }) => data.results[0].geometry)
      .then(pos => axios.get(weatherApi(pos.lat, pos.lng)))
      .then(({ data }) => {
        this.setState({
          timezone: data.timezone,
          weather: data.currently,
          loading: false
        })
      })
  }

  render() {
    return (
      <div className="App">
          <input type="text" onChange={e => this.setState({
            city: e.target.value
          })} />
          <button onClick={() => {
            this.setState({
              loading: true
            }, () => this.getWeather(this.state.city))
            }
          }>Get Weather</button>
      {this.state.loading ? <div>loading...</div> : (
        <div>
          <h1>{this.state.timezone}</h1>
          <h2>The weather is currently: {this.state.weather.summary}</h2>
          <h2>The temperature is: {this.state.weather.temperature}</h2>
        </div>
      )}
      </div>
    );
  }
}

export default App;
