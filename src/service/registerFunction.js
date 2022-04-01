
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

  let informacionUsuario = await axios.post("http://localhost:3005/user/data", {token: tokenLS})

  informacionUsuario = informacionUsuario.data.data.data
  
  const envioInformacion = {
    firstName: data.firstName !=""? data.firstName : informacionUsuario.firstName,
    lastName: data.lastName !=""? data.lastName: informacionUsuario.lastName,
    language: data.language !=""? data.language: informacionUsuario.language,
    gender: data.gender !="Choose..."? data.gender: informacionUsuario.gender,
    age: data.age !=""? data.age: informacionUsuario.age,
    instagram: data.instagram !=""? data.instagram: informacionUsuario.instagram,
    tikTok: data.tikTok !=""? data.tikTok: informacionUsuario.tikTok,
    youtube: data.youtube !=""? data.youtube: informacionUsuario.youtube,
    twitter: data.twitter !=""? data.twitter: informacionUsuario.twitter,
  }
   
  try{
    const res = await axios.put("http://localhost:3005/user/update", {token: tokenLS, data: envioInformacion})
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