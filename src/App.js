import "./App.css";
import SignIn from "./componet/Login";
import SignUp from "./componet/Register";
import Navbar from "./componet/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(()=>{
    const tokenLocal = localStorage.getItem('tokenLogin')
    const token = tokenLocal.substring(1, tokenLocal.length - 1)
console.log(token)


const config = {
  headers: { "Authorization": `Bearer ${token}`  }
}
console.log('config', config)
const bodyParameters = {
  "Content-Type": "application/json"
};
axios.post( 
  'https://accounts.clusterby.com/auth',
  bodyParameters,
  config
).then(console.log).catch(console.log); 



}, [])

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path= "/register" element={<SignUp />} />
        <Route path= "/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
