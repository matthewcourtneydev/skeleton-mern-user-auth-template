import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import User from "./pages/user";
import PrivateRoutes from "./utils/private-routes";
import Nav from "./elements/nav";

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
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path="/user" element={<User />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
