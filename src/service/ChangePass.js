import axios from "axios";

export const changePassword = async (data) => {
  try {

    data.username = btoa(data.username);
    data.password = btoa(data.password);
    data.code = btoa(data.code);

    const res = await axios.post("https://accounts.clusterby.com/restore/password", data)


    console.log(res);
  } catch (error) {
    console.log(error);
  }

};
