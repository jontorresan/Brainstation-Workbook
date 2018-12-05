import axios from 'axios'

const cartApi = `/cart`
const usernameKey = 'username'

export default {
  getUsername: () => {
    return localStorage.getItem(usernameKey)
  },
  saveUsername: (username) => {
    localStorage.setItem(usernameKey, username)
  },
  getCart: username => {
    return new Promise((resolve, reject) => {
      axios
        .get(cartApi, {
          username
        })
        .then(response => {

          if (!response.data.success) {
            reject(response.data)
          } else {
            localStorage.setItem('cart', JSON.stringify(response.data))
            resolve(response.data)
          }
        })
        .catch(error => {
          console.error('Error retrieving cart from server')
          console.error(error)
          console.log('Using localStorage cart instead...')
          resolve(JSON.parse(localStorage.getItem('cart')))
        })
    })
  },
  saveCart: (username, cart) => {
    return new Promise((resolve, reject) => {
      if (cart.length !== 0) {
        localStorage.setItem('cart', JSON.stringify(cart))
      }

      axios
        .post(cartApi, {
          username,
          cart
        })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('Error saving cart to server')
          console.log(error)
          console.log('Cart saved to localStorage')
          resolve(JSON.parse(localStorage.getItem('cart')))
        })
    })
  }
}