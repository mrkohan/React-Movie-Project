import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowCategories, QueryMovies } from "../Commons/Main";

const Search = () => {
  const dispatch = useDispatch();
  const [title, MovieTitle] = useState("");
  const [category, CategoryTitle] = useState(" ");

  const AllCats = useSelector((state) => state.movies.AllCats);

  // get list of the categories
  useEffect(() => {
    dispatch(ShowCategories());
  }, [dispatch]);

  useEffect(() => {
// if category is null then return all movies , if title is not null then return filtered movies by name 
//and if both are not null then return filtered movies by name and category

    { category === "" ? dispatch(QueryMovies([ ]))
    : category === "" & title !== "" ?  dispatch(QueryMovies([title]))
    : dispatch(QueryMovies([category,title]))}
  }, [dispatch, title,category]);
      
    return (
  <div className="sm:w-full md:w-full lg:w-1/6 mb-4 bg-white sidebar">
<h4 className="sb-title">Search for movie</h4>
      <input type="text" placeholder="Find a movie" autoComplete="off" onChange={(e)=>{MovieTitle(e.target.value)}} className="search-box"/>
      <div className="category-links">
        <input id="-1" type="radio" name="category" value=' ' onChange={(e)=>{CategoryTitle(e.target.value)}} defaultChecked />
        <h2 className="category_section md:mr-2 ">
          <label htmlFor="-1">All categories</label>
        </h2>
        {AllCats.map((AllCats, index) => (
          <div key={index}>
            <input id={AllCats.id} value={AllCats.id} type="radio" name="category" onChange={(e) => { CategoryTitle(e.target.value)}}/>
            <h2 className="category_section md:mr-2 mt-2 md:mt-0">
              <label htmlFor={AllCats.id}>{AllCats.name}</label>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;