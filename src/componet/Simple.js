import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ListItem, List } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CardMedia } from "@mui/material";
import Moment from "react-moment";

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
  const classes = useStyles();
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("tokenLogin"));
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState("");
  const [campaignRules, setCampaignRules] = useState("");
  const [campaignObjetives, setCampaignObjetives] = useState("");
  const [campaignInit, setCampaignInit] = useState("");
  const [campaignEnd, setCampaignEnd] = useState("");

  useEffect(async () => {
    const datos = await axios.post("http://localhost:3005/campaign/specific", {
      token: token,
      id: id,
    });
    if (datos.data.success) {
      setCampaign(datos.data.campaigns);
      setCampaignRules(datos.data.campaigns.rules);
      setCampaignObjetives(datos.data.campaigns.objectives);
      setCampaignInit(datos.data.campaigns.startDate);
      setCampaignEnd(datos.data.campaigns.endDate);
    }
  }, []);

  const deleteCampaign = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/campaign/deleteCampaign", {
        token: token,
        id: id,
      })
      .then(() => navigate("/advertiser"));
  };

  const editCampaign = (e) => {
    e.preventDefault();
    navigate(`/editCampaign/${id}`);
  };

  const finishCampaign = (e) => {
    axios
      .put("http://localhost:3005/campaign/cancelCampaing", {
        token: token,
        id: id,
      })
      .then(()=> navigate('/advertiser'));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{campaign.name}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CardMedia
              component="img"
              height="200"
              image="https://media-cdn.tripadvisor.com/media/photo-s/1d/30/9e/c1/full-suite-digital-branding.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
          >{`Campaign description: ${campaign.description}`}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Campaign rules:
            <List>
              <ListItem>{`Age publisher: ${campaignRules.ageMin}-${campaignRules.ageMax}`}</ListItem>
              <ListItem>{`gender publisher: ${campaignRules.gender}`}</ListItem>
              <ListItem>{`language publisher: ${campaignRules.language}`}</ListItem>
              <ListItem>{`Speech publisher: ${campaignRules.speech}`}</ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Campaign objetives:
            <List>
              <ListItem>{`URL: ${campaignObjetives.URL_objetivo}`}</ListItem>
              <ListItem>{`Unwanted visits: ${campaignObjetives.impresionesDeseadas}`}</ListItem>
            </List>
          </Paper>
        </Grid>
        {campaign.state === "Created" && (
          <Grid item xs={3}>
       
            <Paper className={classes.paper}>
              <Button onClick={deleteCampaign}>Delete campaign</Button>
            </Paper>
          </Grid>
        )}
        {campaign.state === "Created" && (
          <Grid item xs={3}>
        
            <Paper className={classes.paper}>
              <Button onClick={editCampaign}>Edit campaign</Button>
            </Paper>
          </Grid>
        )}
        {campaign.state === "In Progress" && (
            <Grid item xs={3}>
         
              <Paper className={classes.paper}>
                <Button onClick={finishCampaign}>Finish campaign</Button>
              </Paper>
            </Grid>
        )}
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Beginning: <br />{" "}
            <Moment format="MMMM Do, YYYY">{campaign.startDate}</Moment>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Ends: <br />{" "}
            <Moment format="MMMM Do, YYYY">{campaign.startEnd}</Moment>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            State campaign: <br />
            {campaign.state}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}