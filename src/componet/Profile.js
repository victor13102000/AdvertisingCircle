import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { profileGet, profileRegister } from "../service/registerFunction";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setInfo } from "../states/Info";

function Profile() {
  const [data, setData] = useState({});
  const type = localStorage.getItem('type')
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(async () => {
    setData(await profileGet());
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    profileRegister(data)
    localStorage.setItem("info", "true")
    dispatch(setInfo(true))
    swal({
      title: "user information",
      icon: "success",
      button: "ok",
      text: "information created or edited correctly",
      timer: 2000,
    })
    navigate(`/${type}`)

  };



  return (
    <div className="paginaPerfil">
      <div className="contenedorPerfil">
        <h2>Update your profile information</h2>
        <div className="contenedorPerfilForm">
          <form
            class="needs-validation"
            novalidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="form-row">
              <div class="col">
                <label for="validationCustom01">First Name</label>
                <input
                  {...register("firstName")}
                  defaultValue={data.firstName ? data.firstName : ""}
                  name="firstName"
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                />
                
              </div>
              <div class="col">
                <label for="validationCustom02">Last Name</label>
                <input
                  {...register("lastName")}
                  defaultValue={data.lastName ? data.lastName : ""}
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  required
                />

                </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="validationCustom03">Language</label>
                <select
                  {...register("language")}
                  class="custom-select"
                  id="validationCustom03"
                  required
                >
                  {data.language ? (
                    <>
                      <option selected>{data.language}</option>
                      {data.language === "Spanish" ? (
                        <>
                          <option>English</option>
                          <option>Portuguese</option>
                        </>
                      ) : data.language === "English" ? (
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
                    </>
                  ) : (
                    <>
                      <option selected disabled value="">Choose...</option>
                      <option>Spanish</option>
                      <option>English</option>
                      <option>Portugese</option>
                    </>
                  )}
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="validationCustom04">Gender:</label>
                <select
                  {...register("gender")}
                  class="custom-select"
                  id="validationCustom04"
                  required
                >
                  {data.gender ? (
                    <>
                      <option selected>{data.gender}</option>
                      {data.gender === "Male" ? (
                        <option>Female</option>
                      ) : (
                        <option>Male</option>
                      )}
                    </>
                  ) : (
                    <>
                      <option selected disabled value="">Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                    </>
                  )}
                </select>
        
              </div>
              <div class="form-group col-md-2">
                <label for="validationCustom05">Age</label>
                <input
                  {...register("age")}
                  defaultValue={data.age ? data.age : ""}
                  type="number"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
              </div>
              
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="validationCustom06">Instagram</label>
                <input
                  {...register("instagram")}
                  defaultValue={data.instagram ? data.instagram : ""}
                  type="url"
                  class="form-control"
                  id="validationCustom06"
                  required
                />
              </div>
             

              <div class="form-group col-md-3">
                <label for="validationCustom07">Tik Tok</label>
                <input
                  {...register("tikTok")}
                  defaultValue={data.tikTok ? data.tikTok : ""}
                  type="url"
                  class="form-control"
                  id="validationCustom07"
                  required
                />
                
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom08">Youtube</label>
                <input
                  {...register("youtube")}
                  defaultValue={data.youtube ? data.youtube : ""}
                  type="url"
                  class="form-control"
                  id="validationCustom08"
                  required
                />
                
              </div>
              <div class="form-group col-md-3">
                <label for="validationCustom09">Twitter</label>
                <input
                  {...register("twitter")}
                  defaultValue={data.twitter ? data.twitter : ""}
                  type="url"
                  class="form-control"
                  id="validationCustom09"
                  required
                />
               
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
