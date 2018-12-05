import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Insta Gallery</h1>
        <CardList cards={this.props.cards} />
      </div>
    )
  }
}

class CardList extends Component {
  render () {
    const cards = this.props.cards.map((card, i) => {
      return <Card key={i} src={card.imgSrc} title={card.title} />
    })

    return (
      <div className='row'>
        {cards}
      </div>
    )
  }
}

class Card extends Component {
  render () {
    return (
      <div className='col'>
        <div className='card'>
          <div className='card-image'>
            <img src={this.props.src} alt='' className='img-fluid' />
            <span className='card-title'>{this.props.title}</span>
          </div>
          <div className='card-content'>
            <p>
              Powering the next generation of creators. Build your skills in business, design & technology.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
