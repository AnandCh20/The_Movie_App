import React, { useState } from "react";


function MovieSearch() {
  const [movies, setMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // State to manage selected movie

  // const fetchMovies = async (query) => {
  //   if (!query) return;
  //   setLoading(true);
  //   try {
  //     const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d9b0a83c9e832fe99a823757383466b9&query=${query}`;
  //     const response = await fetch(apiUrl);

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const jsonData = await response.json();
  //     setMovies(jsonData.results);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   fetchMovies(searchQuery);
  // };

  console.log(movies)

  const handleCardClick = (movieId) => {
    setSelectedMovieId((prevId) => (prevId === movieId ? null : movieId));
  };

  return (
    <div className="container mt-5">
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <div className="card" onClick={() => handleCardClick(movie.id)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <h5 className="card-title">{movie.release_date?.slice(0, 4)}</h5>
                  <h6 className="card-title">
                    {movie.adult ? "A" : "R"}
                  </h6>
                  {selectedMovieId === movie.id && (
                    <div>
                      <p className="card-text">{movie.overview}</p>
                      <p className="card-text">Rating: {movie.vote_average}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default MovieSearch;
