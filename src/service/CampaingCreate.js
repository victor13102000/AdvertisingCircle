import axios from "axios";

export const campaignCreate = async (data) => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  try {
    const datos = await axios.post("http://localhost:3005/campaign/create", {
      token: tokenLS,
      data,
    });
    console.log(datos);
  } catch (err) {
    console.log("Error", err);
  }
};
