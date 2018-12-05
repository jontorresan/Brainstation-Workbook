import React from 'react'
import Product from './Product'
import Grid from '@material-ui/core/Grid'

const ProductList = ({ products, addProduct }) => (
  <Grid container>
    {products.map((product, i) => {
      return <Product product={product} addProduct={addProduct} key={i} />
    })}
  </Grid>
)

export default ProductList