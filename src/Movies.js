import "./movies.css";
import React, { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [year, setYear] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  //The most critical problem is that you can create an infinite loop where your component continuously re-renders.
  //Every time setMovies is called, it will trigger a re-render of the Movies component,
  //which will then call fetchData again, creating an infinite loop of fetch requests and re-renders.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://y2rtzw-5001.csb.app/api/movies", {
          headers: {
            "x-api-key": "jNBxRDR91"
          }
        });
        const result = await response.json();
        setMovies(result.data);
      } catch (error) {
        console.error("Error fetching the movies data", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    if (movies && year) {
      const filtered = movies.filter((movie) => movie.Year === Number(year));
      setFilteredMovies(filtered);
      setYear("");
    }
  };

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="h1-style">Movies</h1>
      <div className="input-group">
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Enter year"
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="filtered-movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index}>{movie.Title}</div>
          ))
        ) : (
          <div>Results Not Found</div>
        )}
      </div>
    </div>
  );
}
