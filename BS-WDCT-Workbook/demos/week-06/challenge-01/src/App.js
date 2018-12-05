import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/workshops'>Workshops</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={Courses} />
          <Route path='/workshops/:id' component={Workshops} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    )
  }
}

// Component using a class
// class Courses extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Courses</h1>
//         <nav>
//           <Link to={this.props.match.url + '/wd'} >Web Dev</Link>
//           <Link to={this.props.match.url + '/ux'}>UX</Link>
//           <Link to={this.props.match.url + '/ds'}>Data Science</Link>
//         </nav>
//         <Switch>
//           <Route path={this.props.match.path + '/wd'} exact component={WebDev} />
//           <Route path={this.props.match.path + '/ux'} component={UX} />
//           <Route path={this.props.match.path + '/ds'} component={DataScience} />
//         </Switch>
//       </div>
//     )
//   }
// }

// Component using a function (aka Stateless Functional Component)
const Courses = ({ match: { path, url, params } }) => {
    return (<div>
      <h1>Courses</h1>
      <nav>
        <Link to={url + '/wd'} >Web Dev</Link>
        <Link to={url + '/ux'}>UX</Link>
        <Link to={url + '/ds'}>Data Science</Link>
      </nav>
      <Switch>
        <Route 
          path={path + '/wd'} 
          exact 
          render={(routerProps) => <Course subject='Web Dev'  {...routerProps} />}
        />
        <Route 
          path={path + '/ux'} 
          render={(routerProps) => <Course subject='UX' {...routerProps }/>} 
        />
        <Route 
          path={path + '/ds'} 
          render={(routerProps) => <Course subject='Data Science' {...routerProps} />} />
      </Switch>
    </div>)
}

const Course = (props) => <h1>{props.subject}</h1>

// Stateless Functional Component
// Using object destructuring right inside the parameter definition.
// Javascript knows that the parameter is an object, and we can 
// destructure right off of the parameter
const Workshops = ({ match: { url, path, params } }) => {
    return (
      <div>
        <h1>Workshops</h1>
        <nav>
          <Link to={url + '/seo'} >SEO</Link>
          <Link to={url + '/ui'}>UI Design</Link>
        </nav>
        <Switch>
          <Route path={path + '/seo'} exact component={SEO} />
          <Route path={path + '/ui'} component={UI} />
        </Switch>
        <p>Id: {params.id}</p>
      </div>
    )
  }

const SEO = () => <h1>SEO</h1>
const UI = () => <h1>UI</h1>

class Contact extends Component {
  render() {
    return (
      <h1>Contact</h1>
    )
  }
}


export default App;
