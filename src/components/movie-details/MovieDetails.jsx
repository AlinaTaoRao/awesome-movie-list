import "./styles.css";

export const MovieDetails = ({ movie }) => {
  // console.log("movie details:", movie);

  return (
    <div className="details-container">
      <div className="post-container">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="texts-container">
        <div className="title-bar columns">
          <div className="details-title">{movie.Title}</div>
          <div className="details-score columns">
            <div className="star-svg">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
                focusable="false"
                viewBox="0 0 24 24"
                color="#e4bb24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </div>
            <div className="score-number">{movie.imdbRating}/10</div>
            <div className="score-statistics">{movie.imdbVotes}</div>
          </div>
        </div>
        <div className="subInfo-bar columns ">
          <div>{movie.Year}</div>
          <div>{movie.Rated}</div>
          <div>{movie.Released}</div>
          <div>{movie.Runtime}</div>
        </div>
        <div className="description">{movie.Plot}</div>

        <div className="genre-bar columns">
          <div className="genre">Genre :</div>
          <div className="genre-names">{movie.Genre}</div>
        </div>
        <div className="director-bar columns">
          <div className="director">Director : </div>
          <div className="director-names">{movie.Director}</div>
        </div>
        <div className="writer-bar columns">
          <div className="writer">Writer : </div>
          <div className="writer-name">{movie.Writer}</div>
        </div>
        <div className="actors-bar columns">
          <div className="actors">Actors : </div>
          <div className="actor-names">{movie.Actors}</div>
        </div>
        <div className="language-bar columns">
          <div className="language">Language : </div>
          <div className="language-languages">{movie.Language}</div>
        </div>
        <div className="country-bar columns">
          <div className="country">Country : </div>
          <div className="country-country">{movie.Country}</div>
        </div>
        <div className="awards-bar columns">
          <div className="awards">Awards : </div>
          <div className="awards-awards">{movie.Awards}</div>
        </div>
        <div className="production-bar columns">
          <div className="production">Production : </div>
          <div className="production-production">N/A</div>
        </div>


      </div>
    </div>
  );
};
