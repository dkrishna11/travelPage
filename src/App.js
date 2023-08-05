import React from "react";
import Navigate from "./Components/Navigate";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage";

function App() {
  return (
    <div className="App">
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:postId" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
