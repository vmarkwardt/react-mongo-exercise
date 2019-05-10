import React from 'react';
import Tag from './Tag';

export default function Card({ card, bookmarkOnClick }) {
  return (
    <li>
      <header>
        <h3>{card.title}</h3>
        <button
          className={card.isBookmarked ? 'bookmarked' : ''}
          onClick={() =>
            bookmarkOnClick({ ...card, isBookmarked: !card.isBookmarked })
          }
        >
          {card.isBookmarked ? 'bookmarked' : 'set bookmark'}
        </button>
      </header>
      <p>{card.description}</p>
      <Tag tagList={card.tags} />
    </li>
  );
}
