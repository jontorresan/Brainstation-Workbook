import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardActions
} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import AddIcon from '@material-ui/icons/Add'
import { BackEndBaseUrl } from '../config'
import Grid from '@material-ui/core/Grid'

const classes = {
  image: {
    width: 300,
    height: 300
  }
}

const Product = ({ product, addProduct }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardHeader title={product.name} />
        <CardMedia classes={classes.image}>
          <img src={`${BackEndBaseUrl}${product.picture}`} alt={product.name} />
        </CardMedia>
        <CardTitle />
        <CardActions>
          <FloatingActionButton mini={true}
            onClick={() => {
              addProduct(product)
            }}
          >
            <AddIcon />
          </FloatingActionButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Product
