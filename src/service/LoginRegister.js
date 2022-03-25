import axios from "axios";

export const loginRegister = async (data) => {
  data.username = btoa(data.username);
  data.password = btoa(data.password);
  const res = await axios.post("https://accounts.clusterby.com/signin", data);
  if (res.data.token) {
    localStorage.setItem("tokenLogin", JSON.stringify(res.data.token));
    localStorage.setItem("user", JSON.stringify(data.username));
  }
  return res.data;
};
