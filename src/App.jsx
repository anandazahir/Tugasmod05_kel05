import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { PokemonProvider } from "./component/pokemon";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <h1 className="text-white">TUGAS MODUL 5 | KEL.05</h1>
      <div className="d-flex justify-content-center mt-2">
        <PokemonProvider>
          <Routes>
            <Route path="/" exact element={<Page1 />}></Route>
            <Route path="/page-2" exact element={<Page2 />}></Route>
          </Routes>
        </PokemonProvider>
      </div>
      <div className="d-flex gap-4 justify-content-center mt-3">
        <Link className="text-white text-center h6" to="/">
          PAGE 1
        </Link>
        <Link className="text-white text-center h6" to="/page-2">
          PAGE 2
        </Link>
      </div>
    </Router>
  );
};

export default App;
