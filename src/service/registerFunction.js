import { ControlPointSharp } from "@material-ui/icons";
import axios from "axios";

export const registerFunction = async (data) => {
  data.email = btoa(data.email);
  data.password = btoa(data.password);
  data.username = btoa(data.username);
  const res = await axios.post("https://accounts.clusterby.com/signup ", data);

  return res;
};
