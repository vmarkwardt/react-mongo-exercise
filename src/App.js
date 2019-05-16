import React, { useEffect, useState } from 'react';
import {
  getCards,
  postCards,
  getLocal,
  setLocal,
  patchCard,
  deleteCard,
} from './services';
import CardList from './components/CardList';
import { Form } from './components/Form';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const [cards, setCards] = useState(getLocal('cards') || []);

  useEffect(() => {
    getCardsUpdateStateLS();
  });

  useEffect(() => {
    setLocal('cards', cards);
  }, [cards]);

  function getCardsUpdateStateLS() {
    getCards()
      .then((data) => {
        setCards({ cards: data });
        setLocal('cards', data);
      })
      .catch((error) => console.log(error));
  }

  function handleSubmit({ newCard }) {
    postCards(newCard)
      .then((newCard) => {
        this.setState({
          cards: [newCard, ...this.state.cards],
        });
        setLocal('cards', this.state.cards);
      })
      .catch((error) => console.log(error));
  }

  function handleEditOnClick(card) {
    console.log('tja, wie kann ich nun auf das frm zugreifen?');
  }

  function handleUpdateCard(card) {
    updateState(card);
    patchCard(card)
      .then((card) => console.log('updatedCard: ', card))
      .catch((error) => console.log('Error at update card: ', error));
  }

  function handleDeleteCard(_id) {
    deleteCard(_id)
      .then((data) => getCardsUpdateStateLS())
      .catch((error) => console.log('Error at update card: ', error));
  }

  function updateState(card) {
    const cardsCopy = [...cards];
    const index = cardsCopy.map((item) => item._id).indexOf(card._id);
    cardsCopy[index] = card;
    setCards({ cards: cardsCopy });
    setLocal('cards', cardsCopy);
  }

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/create"
            render={(props) => <Form onSubmit={handleSubmit} {...props} />}
          />
          <Route path="/not-found" component={() => <h1>Not Found</h1>} />
          <Route
            path="/"
            render={(props) => (
              <CardList
                cardList={cards}
                bookmarkOnClick={handleUpdateCard}
                editOnClick={handleEditOnClick}
                deleteOnClick={handleDeleteCard}
                {...props}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
