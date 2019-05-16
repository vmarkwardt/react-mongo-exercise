import React, { useEffect, useState } from 'react';
import {
  getCards,
  postCards,
  getLocal,
  setLocal,
  patchCard,
  deleteCard,
} from '../services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { createGlobalStyle } from 'styled-components';
import CardsPage from '../cards/CardsPage';
import CreatePage from '../create/CreatePage';

const GlobalStyle = createGlobalStyle`
 *{

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  } 

body {
  margin: 0;
  padding: 20px;
  font-family: roboto, sans-serif;
  color: darkslategray;
  background: papayawhip;
}`;

export default function App() {
  const [cards, setCards] = useState(getLocal('cards') || []);
  useEffect(() => {
    getCardsUpdateStateLS();
  }, []);

  useEffect(() => {
    setLocal('cards', cards);
  }, [cards]);

  function getCardsUpdateStateLS() {
    getCards()
      .then((data) => {
        setCards(data);
        setLocal('cards', data);
      })
      .catch((error) => console.log(error));
  }

  async function handleCreateCard({ newCard }, history) {
    try {
      const card = await postCards(newCard);
      setCards([card, ...cards]);
    } catch (error) {
      console.log(error);
    }

    setLocal('cards', cards);
    history.push('/');
  }

  function handleEditOnClick(card) {}

  function handleUpdateCard(card) {
    //console.log('handleUpdateCard: ', card);
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
      <GlobalStyle />
      <main>
        <Header />
        <Switch>
          <Route path="/not-found" component={() => <h1>Not Found</h1>} />
          <Route
            path="/create"
            render={(props) => (
              <CreatePage onCardCreate={handleCreateCard} {...props} />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <CardsPage
                cardList={cards}
                bookmarkOnClick={handleUpdateCard}
                editOnClick={handleEditOnClick}
                deleteOnClick={handleDeleteCard}
              />
            )}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
