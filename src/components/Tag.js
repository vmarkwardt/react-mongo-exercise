import React from 'react';

export default function Tag({ tagList }) {
  //return <p className="tag">Tags -> {tagList.join(', ')}</p>;
  return (
    <p>
      {tagList.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </p>
  );
}
