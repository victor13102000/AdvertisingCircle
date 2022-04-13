import axios from "axios";

export const allUserFavorites = async () => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));
  try {
    const datos = await axios.post("http://localhost:3005/campaign/listtofavorite", {
      token: tokenLS
    });
    return datos;
  } catch (err) {
    console.log("Error", err);
  }
};