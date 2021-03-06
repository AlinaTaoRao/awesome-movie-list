import "./styles.css";
import { Link } from "react-router-dom";

export const SearchBox = ({ movieName, handleChange,handleSearch }) => {
  return (
    <div className="search-box">
      <input
        className="movie-name-input"
        type="text"
        placeholder="Search for a movie"
        name="movie-name"
        value={movieName}
        onChange={handleChange}
      />
      <Link to="/">
      <button className="movie-name-search" type="submit" onClick={handleSearch}>
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </button>
      </Link>
    </div>
  );
};
