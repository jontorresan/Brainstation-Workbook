import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

// class About extends Component {
//   render() {
//     return (
//       <h1>About</h1>
//     )
//   }
// }

const About = (props) => (
  <div>
  <h1>About</h1>
  <nav>
    <Link to={props.match.url + '/ceo'}>CEO</Link>
    <Link to={props.match.url + '/cto'}>CTO</Link>
    <Link to={props.match.url + '/vp'}>VP</Link>
  </nav>
  <Switch>
    <Route path={props.match.path + '/ceo'} component={CEO} />
    <Route path={props.match.path + '/cto'} component={CTO} />    
    <Route path={props.match.path + '/vp'} component={VP} />
  </Switch>
  </div>
)

const CEO = () => (
  <p>Bio of the CEO</p>
)

const CTO = () => (
  <p>Bio of the CTO</p>
)

const VP = () => (
  <p>Bio of the VP</p>
)




export default About