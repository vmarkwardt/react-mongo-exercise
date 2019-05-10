import React from 'react';
import Tag from './Tag';

export default function Card({ card }) {
  return (
    <li>
      {card.title + ': '}
      <p>card.description</p>
      <Tag tagList={card.tags} />
    </li>
  );
}
