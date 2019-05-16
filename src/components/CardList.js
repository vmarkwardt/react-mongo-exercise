import React from 'react';
import Card from './Card';

function CardList({ cardList, bookmarkOnClick, editOnClick, deleteOnClick }) {
  console.log(cardList);
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

export default CardList;
