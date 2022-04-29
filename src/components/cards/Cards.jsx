import "./styles.css";
import { MovieList } from "../../logic/MovieList";


/* way 1 for details feature: global var, works*/
export const Cards = ({ data }) => {
  // console.log("data: ", data);

  return (
    <div className="cards-container">
     <MovieList movies={data}/>
    </div>
  );
};

/* way 2 for details feature: name or value attribute, works */
// export const Cards = ({ mData, handleDetails }) => {
//   return (
//     <div className="cards-container">
//   <MovieList mData={mData} handleDetails={handleDetails}/>
//     </div>
//   );
// };
