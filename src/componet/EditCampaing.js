import { useState } from "react";
import { useForm } from "react-hook-form";
import { campaignCreate } from "../service/CampaingCreate";

function EditCampaign() {
  const { register, handleSubmit } = useForm();

  const [type, setType] = useState("");

  const data = new Date();
  const mes = data.getMonth() + 1;
  const dia = data.getDate();
  const año = data.getFullYear();

  const hoy = `${año}-${mes.toString().length === 1 ? `0${mes}` : mes}-${
    dia.toString().length === 1 ? `0${dia}` : dia
  }`;

  const [day, setDay] = useState(hoy);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    
  };

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
                <select
                  {...register("type")}
                  onChange={(data) => setType(data.target.value)}
                  className="form-control"
                  required
                >
                  <option selected>Choose...</option>
                  <option>URL</option>
                  <option disabled>APP</option>
                </select>
              </div>

              {type === "URL" && (
                <>
                  <div className="form-group col-md-3">
                    <label>URL to promote</label>
                    <input
                      {...register("URL_objetivo")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Number of impressions</label>
                    <input
                      {...register("impresionesDeseadas")}
                      type="number"
                      min={1}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Language</label>
                    <select {...register("language")} class="form-control">
                      <option selected>Choose...</option>
                      <option>Spanish</option>
                      <option>English</option>
                      <option>Portugese</option>
                    </select>
                  </div>
                </>
              )}
            </div>
            {type === "URL" && (
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Gender</label>
                  <select {...register("gender")} className="form-control">
                    <option selected>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label>Age of publisher</label>
                  <input
                    {...register("agePublisher")}
                    className="form-control"
                  />
                </div>
              </div>
            )}
            {type === "URL" && (
              <div className="form-row">
                <div className="form-group col">
                  <label>Speech</label>
                  <textarea
                    {...register("speech")}
                    placeholder="Speech"
                    className="form-control"
                  />
                </div>
              </div>
            )}
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCampaign;