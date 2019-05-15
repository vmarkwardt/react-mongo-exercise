import React from 'react';

export function Form({ onSubmit, history }) {
  return (
    <form onSubmit={formSubmit}>
      <label>
        Title:
        <input name="title" type="text" placeholder="title" />
      </label>
      <label>
        Tags:
        <input name="tags" type="text" placeholder="tag1, tag2, tag3" />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          type="text"
          rows={3}
          placeholder="description"
        />
      </label>
      <button> Add Card </button>
    </form>
  );

  function formSubmit(event) {
    event.preventDefault();
    const { target: form } = event;

    const newCard = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      tags: form.tags.value
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => !!tag),
    };

    onSubmit({ newCard });

    console.log('% HISTORY: ', history);
    history.push('/');
  }
}

/*
Create a Form component to create new Cards

Make sure to create an Array of Strings from the tag String
Add that Form above the CardList

Add a function postCard to services

Use postCard in the Form and update the state when the server responds with a new card


*/
