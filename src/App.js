import React, { Component } from 'react';
import { getCards, postCards, getLocal, setLocal, patchCard } from './services';
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
        <CardList
          cardList={cards}
          bookmarkOnClick={this.handleUpdateCard}
          editOnClick={this.handleEditOnClick}
        />
      </main>
    );
  }

  handleSubmit = ({ newCard }) => {
    postCards(newCard)
      .then((res) => res.json())
      .then((newCard) => {
        this.setState({
          cards: [newCard, ...this.state.cards],
        });
        setLocal('cards', this.state.cards);
      })
      .catch((error) => console.log(error));
  };

  handleEditOnClick = (card) => {
    console.log('tja, wie kann ich nun auf das frm zugreifen?');
  };

  handleUpdateCard = (card) => {
    patchCard(card)
      .then(() => this.updateState(card))
      .catch((error) => console.log('Error at update card: ', error));
  };

  updateState = (card) => {
    const cardsCopy = [...this.state.cards];
    const index = cardsCopy.map((item) => item._id).indexOf(card._id);
    cardsCopy[index] = card;
    this.setState({ cards: cardsCopy });
  };
}
