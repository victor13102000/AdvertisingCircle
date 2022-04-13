import axios from "axios";

export const addToFavorite = async (id) => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  try {
    const datos = await axios.post("http://localhost:3005/campaign/addtofavorite", {
      token: tokenLS,
      id,
    });
    return datos;
  } catch (err) {
    console.log("Error", err);
  }
};
