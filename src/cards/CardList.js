import React from 'react';
import Card from './Card';

function CardList({ cardList, bookmarkOnClick, editOnClick, deleteOnClick }) {
  return (
    <ul>
      {cardList.map((card) => (
        <Card
          {...card}
          key={card._id}
          bookmarkOnClick={() =>
            bookmarkOnClick({ ...card, isBookmarked: !card.isBookmarked })
          }
          editOnClick={editOnClick}
          deleteOnClick={deleteOnClick}
        />
      ))}
    </ul>
  );
}

export default CardList;
