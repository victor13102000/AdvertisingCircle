import "./App.css";
import SignIn from "./componet/Login";
import SignUp from "./componet/Register";
import Navbar from "./componet/Navbar";
import ChangePassword from "./componet/ChangePasswordScreen";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { persistence } from "./service/SingleUser";
import RequestPassChangeScreen from "./componet/RequestPassChangeScreen";
import ChangePasswordScreen from "./componet/ChangePasswordScreen";
import ChooseUser from "./componet/ChooseUser"
import Advertiser from "./componet/Advertiser"
import Publisher from "./componet/Publisher"
import Profile from "./componet/Profile";
import { useSelector } from "react-redux";

function App() {
  const type = useSelector((state) => state.type);

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
        <Route path = "/chooseUser" element = {<ChooseUser/>}/>
        <Route path="/advertiser" element={type === "advertiser"? <Advertiser/>: <h1>ERROR</h1>} />
        <Route path="/publisher" element={type === "publisher"? <Publisher/>: <h1>ERROR</h1>} />
        <Route path= "/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
