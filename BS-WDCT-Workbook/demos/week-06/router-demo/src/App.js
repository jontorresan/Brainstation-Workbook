import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    activePage: 'home'
  }

  goTo = e => {
    this.setState({
      activePage: e.target.id
    })
  }

  goToAbout = (e) => {
    e.preventDefault()
    this.goTo('about')
  }

  goToContact = () => {
    this.goTo('contact')
  }

  goToHome = () => {
    this.goTo('home')
  }

  renderPage = () => {
    const { activePage } = this.state
    switch(activePage) {
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
    // let page = <Home />
    // if(this.state.activePage === 'about') page = <About />
    // else if(this.state.activePage === 'contact') page = <Contact />
    // return page
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a href="#" onClick={this.goTo} id='home'>Home</a>
          <a href="#" onClick={this.goTo} id='about'>About</a>
          <a href="#" onClick={this.goTo} id='contact'>Contact</a>
        </nav>
        {Pages[this.state.activePage]}
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

class About extends Component {
  render() {
    return (
      <div>
      <h1>About</h1>
      <p>About Content</p>
      </div>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <h1>Contact</h1>
    )
  }
}

const Pages = {
  'home': <Home />,
  'contact': <Contact />,
  'about': <About />
}

export default App;
