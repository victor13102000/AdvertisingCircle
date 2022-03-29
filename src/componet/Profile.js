

function Profile(){


    return (
        <div className="paginaPerfil">
            <div className="contenedorPerfil">
                <h2>Update your profile information</h2>
                <div className="contenedorPerfilForm">
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <label for="inputFirstName4">First Name</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="inputLastName4">Last Name</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Language</label>
                                    <input type="text" class="form-control" id="inputLanguage"/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Gender:</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Age</label>
                                    <input type="text" class="form-control" id="inputAge"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Instagram</label>
                                    <input type="email" class="form-control" id="inputInstagram3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Tik Tok</label>
                                    <input type="email" class="form-control" id="inputTikTok3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Youtube</label>
                                    <input type="email" class="form-control" id="inputYoutube3"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Tweeter</label>
                                    <input type="password" class="form-control" id="inputTweeter3"/>
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