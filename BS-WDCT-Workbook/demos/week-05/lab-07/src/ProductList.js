import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
  render() {

    console.log(this.props.products)

    const productList = this.props.products.map((product, i) => {
      console.log(product)
      return <Product name={product.name} price={product.price} key={i} />
    })

    return (
      <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
          {productList}
        </tbody>
      </table>
    </div>
    )
  }
}

export default ProductList