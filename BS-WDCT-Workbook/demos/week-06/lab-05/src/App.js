import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

const trendingUrl = 'http://api.giphy.com/v1/gifs/trending?api_key=CPpOlOclGkH2ViFud1NjtgBZ7w92Tyqy'
const searchUrl = 'http://api.giphy.com/v1/gifs/search?api_key=CPpOlOclGkH2ViFud1NjtgBZ7w92Tyqy&q='

class App extends Component {
  state = {
    images: [],
    loading: true,
    searchText: ''
  }

  componentDidMount = () => {
    axios.get(trendingUrl)
      .then(res => {
        const images = res.data.data
        this.setState({
          images,
          loading: false
        })
      })
  }

  getSearch = text => {
    this.setState({
      searchText: text
    })
  }

  search = searchText => {
    axios.get(searchUrl + searchText)
      .then(res => {
        this.setState({
          images: res.data.data
        })
      })
  }

  render() {

    const imageList = this.state.images.map((image, i) => (
      <img src={image.images.downsized_medium.url} key={i} alt="" />
    ))

    return (
      <div className="App">
        <h1>Gifs</h1>
        <div>Search: 
          <input type="text" onChange={e => this.getSearch(e.target.value)} /><button onClick={() => this.search(this.state.searchText)}>Search</button></div>
        <div>
          {imageList}
        </div>
      </div>
    );
  }
}

export default App;
