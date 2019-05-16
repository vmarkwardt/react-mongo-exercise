import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background: peachpuff;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & * {
    margin: 5px;
  }

  & > button {
    align-self: center;
    padding: 10px;
  }

  & > textarea,
  label {
    margin: 5px;
    flex-grow: 1;
  }

  input,
  textarea {
    padding: 5px;
    font-size: 1em;
    width: 100%;
  }
`;

export default function Form({ onSubmit, history }) {
  return (
    <StyledForm onSubmit={formSubmit}>
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
    </StyledForm>
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

    onSubmit({ newCard }, history);
  }
}
