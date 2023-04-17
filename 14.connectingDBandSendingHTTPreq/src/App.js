import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const movieData = data.results.map((moviesInfo) => {
        return {
          id: moviesInfo.episode_id,
          title: moviesInfo.title,
          openingText: moviesInfo.opening_crawl,
          releaseDate: moviesInfo.release_date,
        };
      });
      setMovies(movieData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  let content = null;

  if (isLoading) {
    content = <p>Loading data ...</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  } else if (movies.length === 0 && !error) {
    content = <p>No movies</p>;
  } else {
    content = <p>Something went wrong. Please reload</p>;
  }
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
