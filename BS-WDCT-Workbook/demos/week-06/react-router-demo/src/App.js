import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
class Cats extends Component {
  render() {
    return (
      <h1>Cats</h1>
    )
  }
}
class Dogs extends Component {
  render() {
    return (
      <h1>Dogs</h1>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <Link to={this.props.match.url + '/cats'}>Cats</Link>
          <Link to={this.props.match.url + '/dogs'}>Dogs</Link>
        </div>
        <Switch>
          <Route path={this.props.match.url + '/cats'} component={Cats} />
          <Route path={this.props.match.url + '/dogs'} component={Dogs} />
        </Switch>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
      <h1>My Single Page Web Site</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
    )
  }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
