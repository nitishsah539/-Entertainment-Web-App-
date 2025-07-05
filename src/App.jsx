import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import './style.css';

const API_KEY = 'cdf02fd3523bf76cfd12f2ba1e6b3866';

function App() {
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTrending(data.results.slice(0, 6)));

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setRecommended(data.results.slice(0, 6)));
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`)
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results.slice(0, 6)));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {searchTerm ? (
          <MovieGrid title="Search Results" movies={searchResults} />
        ) : (
          <>
            <MovieGrid title="Trending" movies={trending} />
            <MovieGrid title="Recommended For You" movies={recommended} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;