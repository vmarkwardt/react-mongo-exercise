import React from 'react';

export function Form({ onSubmit }) {
  return (
    <form onSubmit={formSubmit}>
      <label>
        Title:
        <input name="title" type="text" placeholder="title" />
      </label>
      <label>
        Description:
        <input name="description" type="text" placeholder="description" />
      </label>
      <label>
        Tags:
        <input name="tags" type="text" placeholder="tag1, tag2, tag3" />
      </label>

      <button> Add Card </button>
    </form>
  );

  function formSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const newCard = {
      title: form.title.value,
      description: form.description.value,
      tags: form.tags.value.split(', '),
    };

    onSubmit({ newCard });
  }
}

/*
Create a Form component to create new Cards

Make sure to create an Array of Strings from the tag String
Add that Form above the CardList

Add a function postCard to services

Use postCard in the Form and update the state when the server responds with a new card


*/
