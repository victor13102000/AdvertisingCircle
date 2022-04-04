import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { LogoutFunction } from "../service/LogoutFunction";
import { useNavigate } from "react-router";
import React from "react";
import { Link } from "react-router-dom";

const MenuUserNadvar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const logoutFunction = () => {
    LogoutFunction();
    navigate("/");
  };
  return (
    <><Link to= "/profile" style={{ textDecoration: 'none'}}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
      </Link>
      <MenuItem onClick={logoutFunction}>Logout</MenuItem>
    </>
  );
};

export default MenuUserNadvar;
