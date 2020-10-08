import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, image, genres }) {
  console.log(id, title);
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            image,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
      </Link>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h4 className="movie_year">{year}</h4>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <h4 className="movie_summary">{summary}</h4>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
