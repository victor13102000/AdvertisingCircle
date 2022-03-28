import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { LogoutFunction } from "../service/LogoutFunction";
import { useNavigate } from "react-router";
import React from "react";

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
    <>
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
      <MenuItem onClick={logoutFunction}>Logout</MenuItem>
    </>
  );
};

export default MenuUserNadvar;
