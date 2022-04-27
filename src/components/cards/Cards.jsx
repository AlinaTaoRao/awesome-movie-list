import "./styles.css";
import { Link } from "react-router-dom";
import { movieDetail } from "../../data.js"; // way 1 for details feature: global var

/* way 1 for details feature: global var*/
// export const Cards = ({ data }) => {
//   // console.log("data: ", data);

//   function updateMovieDetail(targetMovie) {
//     Object.assign(movieDetail, targetMovie);
//   }

//   return (
//     <div className="cards-container">
//       {data.map((movie, index) => (
//         <div key={`${index}-${movie.Title}`} className="movie-card">
//           <h2 className="movie-title">{movie.Title}</h2>
//           <button className="btn-poster">
//             <Link to="/details">
//               <img
//                 className="poster"
//                 src={movie.Poster}
//                 alt={`${movie.Title} poster`}
//                 onClick={() => updateMovieDetail(movie)}
//               />
//             </Link>
//           </button>
//           <div className="info-bar">
//             <button className="public-time">
//               <svg
//                 className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
//                 focusable="false"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
//               </svg>
//               {movie.Year}
//             </button>
//             <button className="like-icon">
//               <svg
//                 className="MuiSvgIcon-root"
//                 focusable="false"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

/* way 2 for details feature: name or value attribute */
export const Cards = ({ data, handleDetails }) => {
  // console.log("data: ", data);

  return (
    <div className="cards-container">
      {data.map((movie, index) => (
        <div key={`${index}-${movie.Title}`} className="movie-card">
          <h2 className="movie-title">{movie.Title}</h2>
          <Link to="/details">
            <button
              className="btn-poster"
              name={index}
              value={index}
              onClick={handleDetails}
            >
              <img
                className="poster"
                src={movie.Poster}
                alt={`${movie.Title} poster`}
              />
            </button>
          </Link>
          <div className="info-bar">
            <button className="public-time">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
              </svg>
              {movie.Year}
            </button>
            <button className="like-icon">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
