import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const LoginRegisterButton= ()=>{
        return  ( <>
            <Link to="/login">
            <MenuItem>
              <p>Login</p>
            </MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>
              <p>Register</p>
            </MenuItem>
          </Link>
        </>)
}

export default LoginRegisterButton