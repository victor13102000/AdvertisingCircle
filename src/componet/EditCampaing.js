import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { campaignGet, campaingEdite } from "../service/CampaingEdite";
import { useParams } from "react-router-dom";
function EditCampaign() {
  const { register, handleSubmit } = useForm();

  const [campaign, setCampaign] = useState("");
  const [campaignRules, setCampaignRules] = useState("");
  const [campaignObjetives, setCampaignObjetives] = useState("");
  const [campaignFechas, setCampaignFechas] = useState("");
  const [campaignFechas2, setCampaignFechas2] = useState("");

  const data = new Date();
  const mes = data.getMonth() + 1;
  const dia = data.getDate();
  const año = data.getFullYear();
  const hoy = `${año}-${mes.toString().length === 1 ? `0${mes}` : mes}-${
    dia.toString().length === 1 ? `0${dia}` : dia
  }`;

  const [day, setDay] = useState(hoy);
  const [edad, setEdad] = useState(18);

  const id = useParams();

  useEffect(async () => {
    const datos = await campaignGet(id);
    console.log(datos);
    if (datos.data.success) {
      setCampaign(datos.data.campaigns);
      setCampaignRules(datos.data.campaigns.rules);
      setCampaignObjetives(datos.data.campaigns.objectives);
      setCampaignFechas(datos.data.campaigns.startDate.split("T"));
      setCampaignFechas2(datos.data.campaigns.endDate.split("T"));
    }
  }, []);

  console.log(campaign);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    campaingEdite(data, id);
    console.log(data);
  };
  console.log(campaignFechas[0]);
  /* const start = campaign.startDate.split("T")
console.log(start[0]); */
  return (
    <div className="paginaPerfil">
      <div className="contenedorPerfil">
        <h2>Edit Campaign</h2>
        <div className="contenedorPerfilForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col">
                <label>Name</label>
                <input
                  {...register("name")}
                  defaultValue={campaign.name}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label>Description</label>
                <textarea
                  {...register("description")}
                  defaultValue={campaign.description}
                  placeholder="Description of campaings"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Start Campaign</label>
                <input
                  {...register("startDate")}
                  defaultValue={campaignFechas[0]}
                  type="date"
                  min={hoy}
                  onChange={(data) => setDay(data.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label>End Campaign</label>
                <input
                  {...register("endDate")}
                  defaultValue={campaignFechas2[0]}
                  type="date"
                  min={day}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Type:</label>
                <select {...register("type")} className="form-control" required>
                  <option selected>URL</option>
                  <option disabled>APP</option>
                </select>
              </div>

              <div className="form-group col-md-3">
                <label>URL to promote</label>
                <input
                  defaultValue={campaignObjetives.URL_objetivo}
                  {...register("URL_objetivo")}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Number of impressions</label>
                <input
                  {...register("impresionesDeseadas")}
                  defaultValue={campaignObjetives.impresionesDeseadas}
                  type="number"
                  min={1}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Language</label>
                <select {...register("language")} className="form-control">
                  <option selected>{campaignRules.language}</option>
                  {campaignRules.language === "Spanish" ? (
                    <>
                      <option>English</option>
                      <option>Portuguese</option>
                    </>
                  ) : campaignRules.language === "English" ? (
                    <>
                      <option>Spanish</option>
                      <option>Portuguese</option>
                    </>
                  ) : (
                    <>
                      <option>English</option>
                      <option>Spanish</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Gender</label>
                <select {...register("gender")} className="form-control">
                  <option selected>{campaignRules.gender}</option>

                  {campaignRules.gender === "Male" ? (
                    <>
                      <option>Female</option>
                      <option>Male</option>
                    </>
                  ) : campaignRules.gender === "Female" ? (
                    <>
                      <option>Both</option>
                      <option>Male</option>
                    </>
                  ) : (
                    <>
                      <option>Female</option>
                      <option>Both</option>
                    </>
                  )}
                </select>
              </div>
              <div className="form-group col-md-3">
                <label>Age min of publisher</label>
                <input
                  {...register("ageMin")}
                  defaultValue={campaignRules.ageMin}
                  type="number"
                  min={18}
                  onChange={(data) => setEdad(data.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Age max of publisher</label>
                <input
                  {...register("ageMax")}
                  defaultValue={campaignRules.ageMax}
                  type="number"
                  min={edad}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>Speech</label>
                <textarea
                  {...register("speech")}
                  defaultValue={campaignRules.speech}
                  placeholder="Speech"
                  className="form-control"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCampaign;
