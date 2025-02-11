import React from 'react';
import { use } from '../Context/NameContext';

function NameDisplay() {
  const { name } = use();

  return (
    <div className="text-xl text-purple-600 flex justify-center items-center h-screen">
      {name ? <h2>Your Name: {name}</h2> : <h2>No name set yet.</h2>}
    </div>
  );
}


export default NameDisplay;
