import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "./data.js";
import { Cards } from "./components/cards/Cards.jsx";
import { SearchBox } from "./components/search-box/SearchBox.jsx";
import {Logo} from './components/logo/Logo.jsx';

function App() {
  // add state
  const [movieData, setMovieData] = useState(data);
  const [movieName, setMovieName] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // filter movies
  useEffect(() => {
    /* way 1: .match(), works, best way*/
    const myMovies=data.filter(item => item.Title.match(new RegExp(movieName, 'i'))); //option 1: includes, works
    // const myMovies=data.filter(item => item.Title.match(new RegExp(`\\b${movieName}\\b`, 'i'))); // option 2: search word, works
    /* way 2: includes(), works*/
    // const myMovies = data.filter((item) =>
    //   item.Title.toLowerCase().includes(movieName.toLowerCase())
    // );
    /* way 3: indexOf(), works */
  //   const myMovies = data.filter((item) =>
  //   item.Title.toLowerCase().indexOf(movieName.toLowerCase()) !== -1
  // );

    console.log("myMovies:", myMovies);
    setFilteredData(myMovies);
  }, [movieName]);

  return (
    <div className="App">
      <Logo handleHome={() => setMovieData(data)}/>
      <SearchBox
        movieName={movieName}
        handleChange={(e) => setMovieName(e.target.value)}
        handleSearch={() => setMovieData(filteredData)}
      />
      <Cards data={movieData} />
    </div>
  );
}

export default App;
