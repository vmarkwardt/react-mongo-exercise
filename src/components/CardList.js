import React from 'react';
import Card from './Card';

export default function CardList({ cardList, bookmarkOnClick, editOnClick,deleteOnClick }) {
  return (
    <ul>
      {cardList.map((card) => (
        <Card
          card={card}
          key={card._id}
          bookmarkOnClick={bookmarkOnClick}
          editOnClick={editOnClick}
          deleteOnClick={deleteOnClick}
        />
      ))}
    </ul>
  );
}
