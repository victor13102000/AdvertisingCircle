import { useState } from "react";
import { useForm } from "react-hook-form";
import { campaignCreate } from "../service/CampaingCreate";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../service/UploadImage";
import swal from 'sweetalert'

function Campaign() {
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate()
  const [type, setType] = useState("");
  const [edad, setEdad] = useState(18);

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

    const file = data.img[0]
    const imgUrl = await uploadImage(file)

    data.img = imgUrl
    campaignCreate(data);
    swal({
      title: "campaign information",
      icon: "success",
      button: "ok",
      text:"campaign created successfully",
      timer: 2000
    })
    navigate('/advertiser')
  };


  return (
    <div className="paginaPerfil">
      <div className="contenedorPerfil">
        <h2>New Campaign</h2>
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
                    <select {...register("language")} className="form-control">
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
                    <option>Both</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label>Age min of publisher</label>
                  <input
                      {...register("ageMin")}
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
                      type="number"
                      min={edad}
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
            {type === "URL" && (
              <div className="form-row">
                <div className="form-group col">
                  <label>Campaign Logo</label>
                  <input
                    {...register("img")}
                    type = "file"
                    className="form-control"
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
