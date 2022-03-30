import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { profileRegister } from "../service/registerFunction";

function Profile(){

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        // Pedido axios pidiendo la informacion del perfil del usuario a la base de datos
        // Guardamos esos datos para poder mostrarlos por defecto en el formulario;
      }, []);

    const onSubmit = (data, e) =>{
        e.preventDefault()
        // Pedido axios editando esta informacion en la base de datos
        profileRegister(data)

    }


    return (
        <div className="paginaPerfil">
            <div className="contenedorPerfil">
                <h2>Update your profile information</h2>
                <div className="contenedorPerfilForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-row">
                            <div class="col">
                                <label for="inputFirstName4">First Name</label>
                                <input {... register("firstName")} type="text" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="inputLastName4">Last Name</label>
                                <input {... register("lastName")} type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputLanguage">Language</label>
                                    <input {... register("language")} type="text" class="form-control" id="inputLanguage"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputGender">Gender:</label>
                                    <select {... register("gender")} id="inputGender" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputAge">Age</label>
                                    <input {... register("age")} type="number" class="form-control" id="inputAge"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputInstagram4">Instagram</label>
                                    <input {... register("instagram")} type="url" class="form-control" id="inputInstagram3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputTikTok4">Tik Tok</label>
                                    <input {... register("tikTok")} type="url" class="form-control" id="inputTikTok3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputYoutube4">Youtube</label>
                                    <input {... register("youtube")} type="url" class="form-control" id="inputYoutube3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputTwitter4">Twitter</label>
                                    <input {... register("twitter")} type="url" class="form-control" id="inputTwitter3"/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
        
        

    )
}

export default Profile