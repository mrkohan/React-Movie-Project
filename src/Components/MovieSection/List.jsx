import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Commons/Header";
import Slider from "../Commons/Slider";
import Footer from "../Commons/Footer";
import MovieBox from "./MovieBox";
import Search from "./Search";
import { GetMovieList} from "../Commons/Main";


const List = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.listing);

  // Fetch the list of movies
  useEffect(() => {
    dispatch(GetMovieList());
  }, [dispatch]);

  return (
    
    <div>
   
      <Header />
      <Slider />
      <div className="main-div">
      <Search />
      <div className=" md:w-4/5 w-full">
       
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <React.Fragment key={index}>
                <MovieBox movie={movie} />
              </React.Fragment>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
