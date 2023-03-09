import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Watch from "./watch/Watch";
import MarketPlace from "./marketplace/MarketPlace";
import Groups from "./groups/Groups";
import Gaming from "./gaming/Gaming";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watch" element={<Watch />}></Route>
            <Route path="/marketplace" element={<MarketPlace />}></Route>
            <Route path="/groups" element={<Groups />}></Route>
            <Route path="/gaming" element={<Gaming />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
