import "./App.css";
import SignIn from "./componet/Login";
import SignUp from "./componet/Register";
import Navbar from "./componet/Navbar";
import ChangePassword from "./componet/ChangePasswordScreen";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { persistence } from "./service/SingleUser";
import RequestPassChangeScreen from "./componet/RequestPassChangeScreen";
import ChangePasswordScreen from "./componet/ChangePasswordScreen";

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
        <Route path="/changepassword" element={<ChangePasswordScreen />} />
        <Route path="/requestpasswordchange" element={<RequestPassChangeScreen />} />

      </Routes>
    </div>
  );
}

export default App;
