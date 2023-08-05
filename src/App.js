import React from "react";
import Navigate from "./Components/Navigate";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/items" element={<Home/>}/> */}

      </Routes>

    </div>
  );
}

export default App;
