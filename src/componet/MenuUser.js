import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import axios from 'axios';
import { useNavigate } from 'react-router';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const tokenLS= JSON.parse(localStorage.getItem('tokenLogin'))
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const userLS= JSON.parse(localStorage.getItem('user'))
  const logoutFunction = ()=>{
    const config = {
      headers: { Authorization: `Bearer ${tokenLS}` },
    }
    const bodyParameters = {
      "Content-Type": "application/json",
    };

    axios
      .post("https://accounts.clusterby.com/signout", bodyParameters, config)
      .then(()=> {localStorage.removeItem("user")
        localStorage.removeItem("tokenLogin")})
        .then(()=>navigate('/'))
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
    <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary"></Badge>
              <AccountCircle />
            {userLS}
            </IconButton>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
          <ListItemText primary="Change password" />
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
            <ListItemIcon>
          <ListItemText onClick={logoutFunction} primary="Logout" />
            </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}