import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.scss"
import Home from "./components/home";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import User from "./components/user";
import Nav from "./components/nav";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
        <Nav isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
