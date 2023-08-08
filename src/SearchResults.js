// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  console.log('Search Query:', query); // Check the query in the console

  // Replace 'items' with your actual array of items to search through
  const items = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Services' },
    { id: 4, title: 'Contact' },
  ];

  // Perform the search logic based on the search query
  const searchResults = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
