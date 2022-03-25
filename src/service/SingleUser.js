import axios from "axios";

export const persistence = async () => {
  const token = JSON.parse(localStorage.getItem("tokenLogin"));
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    "Content-Type": "application/json",
  };
  const data = await axios
    .post("https://accounts.clusterby.com/auth", bodyParameters, config)
    .catch(console.log);
  return data;
};
