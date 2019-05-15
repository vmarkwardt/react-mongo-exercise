import React from 'react';
import Tag from './Tag';

export default function Card({
  card,
  bookmarkOnClick,
  editOnClick,
  deleteOnClick,
}) {
  return (
    <li className="card">
      <header>
        <h3>{card.title}</h3>
      </header>
      <p>{card.description}</p>
      <ul className="tagList">
        {card.tags.map((tag) => (
          <Tag key={tag} className="tag" tag={tag} />
        ))}
      </ul>
      <nav className="card-nav">
        <div>
          <button
            disabled={true}
            className="card-button button-edit-card"
            onClick={editOnClick}
          >
            Edit
          </button>
          <button
            className="card-button button-delete-card"
            onClick={() => deleteOnClick(card._id)}
          >
            Delete
          </button>
        </div>
        <button
          className={
            card.isBookmarked
              ? 'card-button card-button-bookmark bookmarked'
              : 'card-button card-button-bookmark'
          }
          onClick={() =>
            bookmarkOnClick({
              ...card,
              isBookmarked: !card.isBookmarked,
            })
          }
        >
          {card.isBookmarked ? 'bookmarked' : 'bookmark'}
        </button>
      </nav>
    </li>
  );
}
