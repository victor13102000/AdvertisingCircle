import axios from "axios";

export const removeFromFavorite = async (id) => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  try {
    const datos = await axios.put("http://localhost:3005/campaign/removeFromFavorite", {
      token: tokenLS,
      id,
    });
    return datos;
  } catch (err) {
    console.log("Error", err);
  }
};