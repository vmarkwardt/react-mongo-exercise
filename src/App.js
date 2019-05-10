import React, { Component } from 'react';
import { getCards } from './services';
import CardList from './components/CardList';
import { Form } from './components/Form';

export default class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    getCards()
      .then((data) => this.setState({ cards: data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { cards } = this.state;
    console.log('cards array? ', cards);
    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.handleSubmit} />
        <CardList cardList={cards} />
      </main>
    );
  }

  handleSubmit = ({ event, newCard }) => {
    event.preventDefault();
    console.log(' handleSubmit: ', newCard);

    this.setState({ ...this.state.cards, newCard });
  };
}
