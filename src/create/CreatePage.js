import React from 'react';
import Form from './Form';

export default function CreatePage({ onCardCreate, ...props }) {
  return <Form onSubmit={onCardCreate} {...props} />;
}
