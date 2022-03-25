import "./App.css";
import SignIn from "./componet/Login";
import SignUp from "./componet/Register";
import Navbar from "./componet/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { persistence } from "./service/SingleUser";

function App() {
  useEffect(() => {
    persistence();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
