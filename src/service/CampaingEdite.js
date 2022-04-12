import axios from "axios";
import moment from "moment";

export const campaingEdite = async (data, id) => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));

  const infoCampaing1 = await axios.post(
    "http://localhost:3005/campaign/specific",
    { token: tokenLS, id }
  );

  console.log("la que recibe por parametro" + data)
  
  const infoCampaing = infoCampaing1.data.campaigns;
  console.log("la que trae de la base de datos" + infoCampaing)

  const info = {
    URL_objetivo:
      data.URL_objetivo != "" ? data.URL_objetivo : infoCampaing.objectives.URL_objetivo,
    ageMax: data.ageMax != "" ? data.ageMax : infoCampaing.rules.ageMax,
    ageMin: data.ageMin != "" ? data.ageMin : infoCampaing.rules.ageMin,
    description:
      data.description != "" ? data.description : infoCampaing.description,
    endDate: data.endDate != "" ? data.endDate : infoCampaing.endDate,
    gender: data.gender != "" ? data.gender : infoCampaing.rules.gender,
    impresionesDeseadas:
      data.impresionesDeseadas != ""
        ? data.impresionesDeseadas
        : infoCampaing.objectives.impresionesDeseadas,
    language: data.language != "" ? data.language : infoCampaing.rules.language,
    name: data.name != "" ? data.name : infoCampaing.name,
    speech: data.speech != "" ? data.speech : infoCampaing.rules.speech,
    startDate: data.startDate != "" ? data.startDate : infoCampaing.startDate,
    type: data.type != "" ? data.type : infoCampaing.type,
    imgUrl: data.img != "" ? data.img : infoCampaing.imgUrl
  };

  console.log(info)

  try {
    const res = await axios.put("http://localhost:3005/campaign/update", {
      token: tokenLS,
      data: info,
      id    
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const campaignGet = async (id) => {
  const tokenLS = JSON.parse(localStorage.getItem("tokenLogin"));

  try {
    let res = await axios.post(
      "http://localhost:3005/campaign/specific",
      { token: tokenLS, id }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
