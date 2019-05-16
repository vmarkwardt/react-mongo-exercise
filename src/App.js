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
  /*
  useEffect(() => {
    getCardsUpdateStateLS();
  });

  useEffect(() => {
    setLocal('cards', cards);
  }, [cards]);
*/
  function getCardsUpdateStateLS() {
    getCards()
      .then((data) => {
        setCards(data);
        setLocal('cards', data);
      })
      .catch((error) => console.log(error));
  }

  function handleSubmit({ newCard }) {
    postCards(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setLocal('cards', cards);
      })
      .catch((error) => console.log(error));
  }

  function handleEditOnClick(card) {}

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
    setCards(cardsCopy);
    setLocal('cards', cardsCopy);
  }

  return (
    <BrowserRouter>
      <main>
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
      </main>
    </BrowserRouter>
  );
}
