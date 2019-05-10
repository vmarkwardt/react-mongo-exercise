import React, { Component } from 'react';
import { getCards } from './services';
import CardList from './components/CardList';

export default class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    getCards()
      .then((data) => this.setState({ cards: data }))
      .catch((error) => console.log(error));
    console.log('componentDidMount');
  }

  render() {
    const { cards } = this.state;
    console.log('cards array? ', cards);
    return (
      <main>
        <h1>Cards</h1>

        <CardList cardList={cards} />
      </main>
    );
  }
}

