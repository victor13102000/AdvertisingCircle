import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const {id} = useParams()
  const classes = useStyles();
  const token= JSON.parse(localStorage.getItem("tokenLogin"))
  const [campaign, setCampaign] = useState({});

  useEffect(()=>{
axios.post('http://localhost:3005/campaign/specifict',{
  token: token,
  id:id,
})
.then(result=> result.campaigns)
.then(campaignResult => setCampaign(campaignResult))
  },[])

  const deleteCampaign = (e)=>{
    e.preventDefault();
axios.post('http://localhost:3005/campaign/deleteCampaign', {
  token: token,
  id: id,
})
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{campaign.name}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {campaign.imgUrl && <img
              src= {campaign.imgUrl}
              width={200}
              height={200}
            />}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {campaign.description}
          </Paper>
        </Grid>
        <Grid item xs={3}>{campaign.state===1 && <Paper className={classes.paper}>
        campaign status: created, but not yet running.
          </Paper>}
          {campaign.state===2 && <Paper className={classes.paper}>
          campaign status: created and ongoing
          </Paper>}
          {campaign.state===3 && <Paper className={classes.paper}>
          campaign status: finished
          </Paper>}
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} ><button onClick={deleteCampaign}> Borrar campaña</button> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Reglas de la campaña:
            <br/>
<ul>
            {campaign.rules && campaign.data.map((rule,i)=>{
              return <>
              <li key={i}>{rule}</li>
              </>
            })}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Objetivos de la campaña:
            <br/>
            <ul>
          {campaign.objetives && campaign.objetives.map((objetive, i)=>{
            return <>
              <li key={i}>{objetive}</li>
            </>
          }) }
            </ul></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
