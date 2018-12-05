import React from 'react'
import './App.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './Home'
import ShopContainer from '../containers/ShopContainer'

const App = ({products, username, addUser}) => (
  <div>
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </nav>
    <Switch>
      <Route
        path='/home'
        render={props => <Home {...props} addUser={addUser} />}
      />
      <Route
        path='/shop'
        render={props => (
          <ShopContainer
            products={products}
            username={username}
            {...props}
            />
          )}
      />
    </Switch>
  </div>
)

export default App
