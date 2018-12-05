import React from 'react'
import { Link, Route } from 'react-router-dom'
import ProductList from './ProductList'
import Cart from './Cart'
import Grid from '@material-ui/core/Grid'

const Shop = ({ 
  username, 
  match, 
  products, 
  cart, 
  addProduct, 
  removeProduct 
}) => {
  return (
  <div>
    <h1>ShopPage</h1>
    <nav>
      <Link to={`${match.url}/shoes`}>Shoes</Link>
      <Link to={`${match.url}/hats`}>Hats</Link>
    </nav>
    <Grid container justify="center">
      <Grid item xs={12} sm={8}>
        <Route
          exact
          path={`${match.url}/:product`}
          render={props => (
            <ProductList
              products={products[props.match.params.product]}
              addProduct={addProduct}
              {...props}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <h3>Cart for: {username}</h3>
        <Cart cart={cart} removeProduct={removeProduct} />
      </Grid>
    </Grid>
  </div>
)
}

export default Shop