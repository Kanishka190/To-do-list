import React, { useState } from 'react';
import { use } from '../Context/NameContext';

function NameForm() {
  const [inputValue, setInputValue] = useState('');
  const { setName } = use();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
    setInputValue('');
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg'>
        <input
          value={inputValue || ""}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className='outline-none border-2 border-gray-600 rounded px-3 py-2'
          placeholder="Enter your name"
        />
        <input
          type="submit"
          value="Submit"
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        />
      </form>
    </div>
  );
}

export default NameForm;
