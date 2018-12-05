import React, { Component } from 'react'
import App from '../components/App'
import UserController from '../controllers/UserController'
import ProductController from '../controllers/ProductController'

class AppContainer extends Component {
  state = {
    username: '',
    products: {},
    isLoading: true
  }

  addUser = username => {
    this.setState({
      username
    }, () => {
      UserController.saveUsername(username)
    })
  }

  componentDidMount () {
    const username = UserController.getUsername()
    ProductController.getProducts()
      .then((products) => {
        this.setState({
          username,
          products,
          isLoading: false
        })
      })
  }


  render() {
    return this.state.isLoading ? <h1>Loading...</h1> : <App 
      addUser={this.addUser} 
      products={this.state.products}
      username={this.state.username}
    />
  }
}

export default AppContainer