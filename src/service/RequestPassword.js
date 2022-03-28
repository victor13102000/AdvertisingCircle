import axios from "axios";

const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));


export const requestPassword = async (data) => {
  try {

    data.username = btoa(data.username);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenLS}`
      },
    };
    console.log(config);

    const res = await axios.post("https://accounts.clusterby.com/send/code/restore/password", data, config)


    console.log(res);
  } catch (error) {
    console.log(error);
  }

};
