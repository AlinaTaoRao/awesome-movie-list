import "./App.css";
import { useState, useEffect } from "react";
import { data, movieDetail } from "./data.js"; // movieDetail, global var, for feature details
import { Cards } from "./components/cards/Cards.jsx";
import { SearchBox } from "./components/search-box/SearchBox.jsx";
import { Logo } from "./components/logo/Logo.jsx";
import { MovieDetails } from "./components/movie-details/MovieDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* way 1 for details feature: global var */
// function App() {
//   // add state
//   const [movieData, setMovieData] = useState(data);
//   const [movieName, setMovieName] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   // filter movies
//   useEffect(() => {
//     /* way 1: .match(), works, best way*/
//     const myMovies = data.filter((item) =>
//       item.Title.match(new RegExp(movieName, "i"))
//     ); //option 1: includes, works
//     // const myMovies=data.filter(item => item.Title.match(new RegExp(`\\b${movieName}\\b`, 'i'))); // option 2: search word, works
//     /* way 2: includes(), works*/
//     // const myMovies = data.filter((item) =>
//     //   item.Title.toLowerCase().includes(movieName.toLowerCase())
//     // );
//     /* way 3: indexOf(), works */
//     //   const myMovies = data.filter((item) =>
//     //   item.Title.toLowerCase().indexOf(movieName.toLowerCase()) !== -1
//     // );

//     console.log("myMovies:", myMovies);
//     setFilteredData(myMovies);
//   }, [movieName]);

//   return (
//     <Router>
//       <div className="App">
//         <Logo
//           handleHome={() => {
//             setMovieData(data);
//             Object.keys(movieDetail).forEach((key) => delete movieDetail[key]);
//             console.log("movieDetail:",movieDetail);
//           }}
//         />
//         <SearchBox
//           movieName={movieName}
//           handleChange={(e) => setMovieName(e.target.value)}
//           handleSearch={() => setMovieData(filteredData)}
//         />
//         <Routes>
//           <Route path="/" element={<Cards data={movieData} />} />
//           <Route
//             exact
//             path="/details"
//             element={<MovieDetails movie={movieDetail} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

/* way 2 for details feature: name or value attribute, works, best way*/
function App() {
  // add state
  const [movieData, setMovieData] = useState(data);
  const [movieName, setMovieName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [myMovieDetail, setMyMovieDetail] = useState({}); // for details feature

  // filter movies
  useEffect(() => {
    /* way 1: .match(), works, best way*/
    const myMovies = data.filter((item) =>
      item.Title.match(new RegExp(movieName, "i"))
    ); //option 1: includes, works
    // const myMovies=data.filter(item => item.Title.match(new RegExp(`\\b${movieName}\\b`, 'i'))); // option 2: search word, works
    
    /* way 2: includes(), works*/
    // const myMovies = data.filter((item) =>
    //   item.Title.toLowerCase().includes(movieName.toLowerCase())
    // );
    
    /* way 3: indexOf(), works */
    //   const myMovies = data.filter((item) =>
    //   item.Title.toLowerCase().indexOf(movieName.toLowerCase()) !== -1
    // );
    setFilteredData(myMovies);
  }, [movieName]);

  return (
    <Router>
      <div className="App">
        <Logo
          handleHome={() => {
            setMovieData(data);
            Object.keys(movieDetail).forEach((key) => delete movieDetail[key]);
            console.log("movieDetail:", movieDetail);
          }}
        />
        <SearchBox
          movieName={movieName}
          handleChange={(e) => setMovieName(e.target.value)}
          handleSearch={() => setMovieData(filteredData)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                data={movieData}
                handleDetails={(e) => {
                  const index= e.target.closest('button').value;
                // console.log("my-index:",index);
                setMyMovieDetail(data[index]);
                }}
              />
            }
          />
          <Route
            exact
            path="/details"
            element={<MovieDetails movie={myMovieDetail} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
