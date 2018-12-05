import React, { Component } from 'react'
import Shop from '../components/Shop'
import UserController from '../controllers/UserController'

class ShopContainer extends Component {
  state = {
    cart: []
  }

  addProduct = product => {
    this.setState({
      cart: [...this.state.cart, product]
    })
  }

  removeProduct = index => {
    this.state.cart.splice(index, 1)
    this.setState({
      cart: this.state.cart
    })
  }

  componentDidMount () {
    const { username } = this.props
    if (username) {
      UserController.getCart(username).then(cart => {
        this.setState({
          cart
        })
      })
    }
  }

  componentDidUpdate () {
    const { username } = this.props
    const { cart } = this.state
    UserController.saveCart(username, cart).then(response => {
      // success
    })
  }
  
  render() {
    return (
      <Shop
        {...this.props} 
        cart={this.state.cart}
        addProduct={this.addProduct}
        removeProduct={this.removeProduct}
      />
    )
  }
}

export default ShopContainer