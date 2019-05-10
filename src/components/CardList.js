import React from 'react';
import Card from './Card';

export default function CardList({ cardList }) {
  return (
    <ul>
      {cardList.map((card) => (
        <Card card={card} key={card._id} />
      ))}
    </ul>
  );
}
