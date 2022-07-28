import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Singlemovie from "./SingleMovie";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Singlemovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
