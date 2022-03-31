import axios from "axios";

export const selectUserType = async (tipo) => {
  // const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  const user = atob(JSON.parse(localStorage.getItem("user")));

  try {
    const res = axios.post("http://localhost:3005/user/create", {
      username: user,
      type: tipo,
      data: {},
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
