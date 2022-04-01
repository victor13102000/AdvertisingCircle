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
    console.log(res)
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const userSearch = async() => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  try{
    const res = await axios.post("http://localhost:3005/user/create", {token: tokenLS})
    console.log(res)
    return res.data
  }catch(err){ console.log(err)}
      
}