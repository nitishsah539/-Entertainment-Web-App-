import React from 'react';

export default function MovieGrid({ title, movies }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="grid">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            <p>{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}