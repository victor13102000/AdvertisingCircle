import axios from "axios";

export const loginRegister = async (data) => {
  data.username = btoa(data.username);
  data.password = btoa(data.password);
  try {
    const res = await axios.post("https://accounts.clusterby.com/signin", data);
    if (res.data.token) {
      localStorage.setItem("tokenLogin", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(data.username));
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const userSearch = async() => {
  const username = atob(JSON.parse(localStorage.getItem("user")));
  console.log(username)
  try{
    const res = await axios.post("http://localhost:3005/user/data", {"username": username})
    return res 
  }catch(err){ console.log(err)}
      
}