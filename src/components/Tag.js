import React from 'react';

export default function Tag({ tagList }) {
  return <p>Tags -> {tagList.join(', ')}</p>;
}
