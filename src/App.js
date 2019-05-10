import React, { Component } from 'react';
import { getCards, postCards, getLocal, setLocal } from './services';
import CardList from './components/CardList';
import { Form } from './components/Form';

export default class App extends Component {
  state = {
    cards: getLocal('cards') || [],
  };

  componentDidMount() {
    getCards()
      .then((data) => {
        this.setState({ cards: data });
        setLocal('cards', this.state.cards);
      })
      .catch((error) => console.log(error));

    console.log('state:', this.state.cards);
    setLocal('cards', this.state.cards);
  }

  render() {
    const { cards } = this.state;
    console.log('RENDER: cards array? ', cards);
    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.handleSubmit} />
        <CardList cardList={cards} />
      </main>
    );
  }

  handleSubmit = ({ newCard }) => {
    console.log(' handleSubmit: ', newCard);

    // First Create new card in DB , then update state
    postCards(newCard)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cards: [...this.state.cards, data] });
        setLocal('cards', this.state.cards);
      })
      .catch((error) => console.log(error));

    console.log('ADDED CARD ');
  };
}
