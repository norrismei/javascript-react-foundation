// index.html
import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  {/* Hooks are a set of functions that allow you to add additional logic such as state 
    to components. State is any information in your UI that changes over time,
    usually triggered by user interaction. The React hook to manage state is useState() and
    returns an array. First item in the array is the state value, which you can name anything.
    Second item in the array is a function to update the value, which you can name anything
    (although it's commonly prefixed with `set` followed by the name of the state variable). 
    You can add initial value of the state by passing it through useState() */}

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* Nesting the Header component with a custom title prop */}
      <Header />
      <Header title="React 💙"/>
      <Header title="A new title"/>
      <ul>
        {/* Iterating through lists. If we don't set a unique key prop, 
          React will give us warning because it needs a way to uniquely identify items in an array
          to know which elements to update in the DOM  */}
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}