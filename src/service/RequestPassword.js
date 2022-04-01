import axios from "axios";

export const requestPassword = async (data) => {
  try {

    data.username = btoa(data.username);


    const res = await axios.post("https://accounts.clusterby.com/send/code/restore/password", data)

    console.log(res)
  } catch (error) {
    console.log(error);
  }

};
