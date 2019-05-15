import React from 'react';

export default function Tag({ className, tag }) {
  //return <p className="tag">Tags -> {tagList.join(', ')}</p>;
  return <li className={className}>{tag} </li>;
}
