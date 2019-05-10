import React from 'react';

export function Form({ onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        formSubmit;
      }}
    >
      <label>
        Title:
        <input name="title" type="text" />
      </label>
      <label>
        Description:
        <input name="description" type="text" />
      </label>
      <label>
        Tags:
        <input name="tags" type="text" />
      </label>

      <button> Add Card </button>
    </form>
  );

  function formSubmit(event) {
    const form = event.target;

    const newCard = {
      title: form.title,
      description: form.description,
      tags: form.tags.split(', '),
    };

    onSubmit({event, newCard});
  }
}

/*
Create a Form component to create new Cards

Make sure to create an Array of Strings from the tag String
Add that Form above the CardList

Add a function postCard to services

Use postCard in the Form and update the state when the server responds with a new card


*/
