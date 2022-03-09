import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./Components/MovieSection/List";
import DetailsPage from "./Components/MovieSection/DetailsPage";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route
            path="/movie/:id/:slug"
            render={(props) => <DetailsPage {...props} />} 
            element={<DetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
