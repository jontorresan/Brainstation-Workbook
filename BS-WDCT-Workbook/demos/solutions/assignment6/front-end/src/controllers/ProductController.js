import axios from 'axios'

const productApi = `/products`

export default {
  getProducts: () => {
    return new Promise(((resolve, reject) => {
      axios.get(productApi)
        .then(response => resolve(response.data))
        .catch(error => {
          console.error('Error retrieving products from server')
          console.error(error)
          resolve([])
        })
    }))
  }
}