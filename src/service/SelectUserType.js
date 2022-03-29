import axios from "axios";

export const selectUserType = async (data) => {
    // axios.post(pedido a la api enviando la data "tipo de usuario" + el token)

    const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));

  console.log(data + " " + tokenLS);

  


};