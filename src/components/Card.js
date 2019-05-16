import React from 'react';
import Tag from './Tag';
import styled from 'styled-components';

const StyledLi = styled.li`
  box-shadow: 4px 5px 8px -8px rgba(25, 25, 112, 0.6);
  background: rgb(255, 250, 241);
  margin: 10px 0;
  padding: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 5px;
  }

  & > header {
    display: flex;
    justify-content: space-between;
  }

  .tag {
    margin: 2px;
    padding: 5px;
    display: inline-block;
    background: papayawhip;
    border-radius: 5px;
    box-shadow: 4px 5px 8px -8px rgba(25, 25, 112, 0.6);
  }

  .card-nav {
    display: flex;
    justify-content: space-between;
  }

  .card-button {
    margin: 5px;
    padding: 5px;
  }

  .card-button-bookmark {
    align-self: flex-end;
  }

  .bookmarked {
    background: peachpuff;
  }
`;

export default function Card({
  card,
  bookmarkOnClick,
  editOnClick,
  deleteOnClick,
}) {
  return (
    <StyledLi className="card">
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
    </StyledLi>
  );
}
