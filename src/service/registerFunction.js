
import axios from "axios";

export const registerFunction = async (data) => {
  data.email = btoa(data.email);
  data.password = btoa(data.password);
  data.username = btoa(data.username);
  const res = await axios.post("https://accounts.clusterby.com/signup ", data);

  return res;
};

export const profileRegister = async (data) =>{
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"))
   
  try{
    const res = await axios.put("http://localhost:3005/user/update", {token: tokenLS, data})
    return res
  }catch(error){
    console.log(error)
  }
}

export const profileGet = async (data) =>{
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"))
   
  try{
    const res = await axios.post("http://localhost:3005/user/data", {token: tokenLS})
    return res.data.data.data
  }catch(error){
    console.log(error)
  }
}