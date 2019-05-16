import React from 'react';
import CardList from './CardList';

export default function CardsPage({
  cardList,
  bookmarkOnClick,
  editOnClick,
  deleteOnClick,
}) {
  return (
    <CardList
      cardList={cardList}
      bookmarkOnClick={bookmarkOnClick}
      editOnClick={editOnClick}
      deleteOnClick={deleteOnClick}
    />
  );
}
