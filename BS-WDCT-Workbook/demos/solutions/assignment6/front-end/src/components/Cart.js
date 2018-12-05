import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const Cart = ({ cart, removeProduct }) => {
  if (cart.length === 0) {
    return <div>Your cart is currently empty.</div>
  }
  return (
    <div>
      <List>
        {cart.map((product, i) => (
          <ListItem key={i} primaryText={product.name} secondaryText={`Price: $${product.price}`}>
            <Button label="Delete"
          onClick={() => {
            removeProduct(i)
          }}>
            <DeleteIcon />
          </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      Total: ${cart.reduce((acc, product) => {
        return acc + product.price
      }, 0)}
    </div>
  )
}

export default Cart