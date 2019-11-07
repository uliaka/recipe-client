import React from 'react';

function Recipe(props) {
  return (
    <div onClick={() => props.onClick(props)}
        className="container-recipe">
        <h1>{props.title}</h1>
        <p>{props.created}</p>
    </div>
  );
}


export default Recipe;