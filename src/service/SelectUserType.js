import axios from "axios";

export const selectUserType = async (tipo) => {

  const tokenSL = JSON.parse(localStorage.getItem("tokenLogin"));

  try {
    const res = axios.put("http://localhost:3005/user/update/type", {
      token: tokenSL,
      type: tipo
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
