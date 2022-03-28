import axios from "axios";

const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));


export const changePassword = async (data) => {
  try {

    data.username = btoa(data.username);
    data.password = btoa(data.password);
    data.code = btoa(data.code);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenLS}`
      },
    };
    console.log(config);

    const res = await axios.post("https://accounts.clusterby.com/restore/password", data, config)


    console.log(res);
  } catch (error) {
    console.log(error);
  }

};
