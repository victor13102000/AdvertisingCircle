import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { profileGet, profileRegister } from "../service/registerFunction";
import { alertaCorrecta, alertaIncorrecta } from "../common/Alertas";


function Profile(){
    const [data, setData] = useState({})

    const { register, handleSubmit } = useForm();

    useEffect(async () => {

        setData(await profileGet())

      }, []);

    const onSubmit = async (data, e) =>{
        e.preventDefault()
        
        profileRegister(data)
        /*
        .then(()=> alertaCorrecta()
        ).catch(err => alertaIncorrecta()
        )*/
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
                                <input {... register("firstName")} defaultValue={data.firstName? data.firstName: ""} type="text" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="inputLastName4">Last Name</label>
                                <input {... register("lastName")} defaultValue={data.lastName? data.lastName: ""} type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputLanguage">Language</label>
                                    <select {... register("language")} id="inputLanguage" class="form-control">
                                        {data.language?(
                                            <>
                                                <option selected >{data.language}</option>
                                                    {data.language === "Spanish" ?(<><option>English</option><option>Portuguese</option></> ) : 
                                                    (data.language === "English"?(<><option>Spanish</option><option>Portuguese</option></> ):
                                                    (<><option>English</option><option>Spanish</option></> ))}  
                                            </>
                                        ):(
                                            <>
                                                <option selected >Choose...</option>
                                                <option>Spanish</option>
                                                <option>English</option>
                                                <option>Portugese</option>
                                            </>
                                        )}
                                    </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputGender">Gender:</label>
                                    <select {... register("gender")} id="inputGender" class="form-control">
                                        {data.gender?
                                        <>
                                        <option selected >{data.gender}</option>
                                        {data.gender === "Male"? 
                                        <option>Female</option>: <option>Male</option> }
                                        </>
                                        :
                                        <>
                                            <option selected >Choose...</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </>}
                                    </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputAge">Age</label>
                                    <input {... register("age")} defaultValue={data.age? data.age: ""}type="number" class="form-control" id="inputAge"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputInstagram4">Instagram</label>
                                    <input {... register("instagram")} defaultValue={data.instagram? data.instagram: ""} type="url" class="form-control" id="inputInstagram3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputTikTok4">Tik Tok</label>
                                    <input {... register("tikTok")} defaultValue={data.tikTok? data.tikTok: ""} type="url" class="form-control" id="inputTikTok3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputYoutube4">Youtube</label>
                                    <input {... register("youtube")} defaultValue={data.youtube? data.youtube: ""} type="url" class="form-control" id="inputYoutube3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputTwitter4">Twitter</label>
                                    <input {... register("twitter")} defaultValue={data.twitter? data.twitter: ""}type="url" class="form-control" id="inputTwitter3"/>
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