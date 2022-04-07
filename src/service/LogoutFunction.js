import axios from "axios";

const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));

const removeLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokenLogin");
  localStorage.removeItem("type")
};

export const LogoutFunction = () => {
  const config = {
    headers: { Authorization: `Bearer ${tokenLS}` },
  };
  const bodyParameters = {
    "Content-Type": "application/json",
  };
  removeLocalStorage();
  axios.post("https://accounts.clusterby.com/signout", bodyParameters, config);
};
