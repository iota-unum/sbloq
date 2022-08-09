import React from 'react';
import { useState, useEffect } from 'react';
import { getSuggestions } from '../helpers/getSuggestions';

const SearchModal = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/typeahead', {
          method: 'POST',
          body: JSON.stringify(text),
        });
        const results = await response.json();
        setSuggestions(results.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSuggestions();
    console.log(suggestions);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);

    console.log(text);
  };

  return (
    <div className='bg-blue-500 w-full h-full flex flex-col '>
      <input
        type='text'
        className='w-2/3 mx-auto text-5xl text-gray-600 px-4 py-1 my-2 rounded-lg outline-none'
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {suggestions.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchModal;