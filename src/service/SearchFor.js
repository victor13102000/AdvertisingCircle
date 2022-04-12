import axios from "axios";

export const searchFor = async (nameSearchFor) => {
  const token = JSON.parse(localStorage.getItem("tokenLogin"));

  const data = await axios.post("http://localhost:3005/campaign/publisherSpecificSearch", { token: token, nameSearchFor: nameSearchFor})

  console.log("corrio la ruta para el caso de que haya query" , data.data.campaigns)
  return data.data.campaigns;
};
