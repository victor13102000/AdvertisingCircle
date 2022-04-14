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
import Publisher from "./componet/Publisher"
import Profile from "./componet/Profile";
import Campaign from "./componet/CreateCampaing";
import EditCampaign from "./componet/EditCampaing";
import Simple from './componet/Simple'
import Advertiser from './componet/Advertiser'
import SingleViewPublisher from "./componet/SingleViewPublisher"
import { useSelector } from "react-redux";
import Favorites from "./componet/Favorites";

function App() {
  //const [type, setType] = useState("")
  const typeLS = useSelector(state => state.type)
  

  useEffect(() => {
    persistence();
    //setType(JSON.parse(JSON.stringify(localStorage.getItem("type"))))

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
        <Route path="/advertiser" element={typeLS === "advertiser" ? <Advertiser/>: <h1>ERROR</h1>} />
        <Route path="/publisher" element={typeLS === "publisher" ? <Publisher/>: <h1>ERROR</h1>} />
        <Route path= "/publisher/:query" element={typeLS === "publisher" ? <Publisher/>: <h1>ERROR</h1>}/>
        <Route path= "/profile" element={<Profile/>}/>
        <Route path="/newCampaign" element={<Campaign/>} />
        <Route path="/editCampaign/:id" element={<EditCampaign/>} />
        <Route path="/favorites" element={typeLS === "publisher" ? <Favorites/>: <h1>ERROR</h1>} />
        <Route path="/simpleview/:id" element={typeLS === "advertiser"?<Simple/>:<SingleViewPublisher />}/>

      </Routes>
    </div>
  );
}

export default App;
