import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({

   
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
   
  }));
const Search = ()=>{
    const [value, setValue] = useState("")
    const classes = useStyles();
    const navigate = useNavigate()

    function onChange(e){
      setValue(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      const searchValue = value
      e.target[0].value = ""
      
      navigate(`/publisher/${searchValue}`)
      
    }
    
    return <div className={classes.search}>
    <div className={classes.searchIcon}>
    <SearchIcon />
    </div>
    <form onSubmit={handleSubmit}>
      <InputBase
      onChange= {onChange}
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ "aria-label": "search" }}
      />
    </form>
    
  </div> 
}

export default Search