import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api";

//get categories
export const ShowCategories = createAsyncThunk(
  "AllCats/ShowCategories",
  async () => {
    const response = await api.get("/categories?_fields=id,name,slug");
    const AllCats = response.data;
    return { AllCats };
  }
);

// Get list of movies
export const GetMovieList = createAsyncThunk("movies/GetMovieList", async () => {
  const response = await api.get("/posts" +"?per_page=25");
  const movies = response.data;
  return { movies };
});



// search based on category and title
export const QueryMovies = createAsyncThunk(
  "movies/QueryMovies",
  async (GetParams) => {
    const response = await api.get("/posts", {
      params: {
        categories: GetParams[0],
        search: GetParams[1],
      },
    });

    const movies = response.data;
    return { movies };
  }
);


// Main Slice
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    listing: [],
    AllCats: [],
  },
  reducers: {},
  extraReducers: {
    [ShowCategories.fulfilled]: (state, action) => {
      if (action.payload.AllCats) {
        state.AllCats = action.payload.AllCats;
      }
    },
    [GetMovieList.fulfilled]: (state, action) => {
      if (action.payload.movies) {
        state.listing = action.payload.movies;
      }
    },
    [QueryMovies.fulfilled]: (state, action) => {
      state.listing = action.payload.movies;
    },
   

  },
});

export default moviesSlice.reducer;
