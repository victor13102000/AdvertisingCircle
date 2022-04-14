import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ListItem, List } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import {
  Box,
  CardMedia,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import Moment from "react-moment";
import swal from "sweetalert";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 12,
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
  const [campaign, setCampaign] = useState("");
  const [campaignRules, setCampaignRules] = useState("");
  const [campaignObjetives, setCampaignObjetives] = useState("");
  const [campaignInit, setCampaignInit] = useState("");
  const [campaignEnd, setCampaignEnd] = useState("");

  useEffect(async () => {
    const datos = await axios.post(
      "http://localhost:3005/campaign/specificToPublisher",
      {
        token: token,
        id: id,
      }
    );
    if (datos.data.success) {
      setCampaign(datos.data.campaigns);
      setCampaignRules(datos.data.campaigns.rules);
      setCampaignObjetives(datos.data.campaigns.objectives);
      setCampaignInit(datos.data.campaigns.startDate);
      setCampaignEnd(datos.data.campaigns.endDate);
    }
  }, []);

  const onSubmit = () => {
    axios
      .post("http://localhost:3005/campaign/addtofavorite", {
        token: token,
        id: campaign._id,
      })
      .then(() => swal({ text: "Add to favorite", icon: "success" }))
      .catch(() =>
        swal({
          title: "ERROR",
          text: "This campaign has already been added",
        })
      );
  };

  function diferenciaDeDias() {
    const today = new Date();
    const init = new Date(campaignInit);
    const end = new Date(campaignEnd);
    let days;

    if (campaign.state === "Created") {
      const difference = init.getTime() - today.getTime();
      days = difference / (1000 * 3600 * 24);
    } else {
      const difference = end.getTime() - today.getTime();
      days = difference / (1000 * 3600 * 24);
    }

    return Math.round(days);
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="1600" style={{ paddingTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <CardMedia
                height="525"
                component="img"
                image={
                  campaign.imgUrl
                    ? campaign.imgUrl
                    : "https://jovenclubnuevitas2.cubava.cu/wp-content/themes/childcare/images/default.png"
                }
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography
                color={"#676767"}
                gutterBottom
                variant="h3"
                component="div"
              >
                {campaign.name}
              </Typography>
            </Paper>

            <Grid item>
              <Paper className={classes.paper}>
                <Typography
                  textAlign={"left"}
                  color={"#676767"}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Campaign rules:
                </Typography>

                <List>
                  <ListItem>{`Age publisher: ${campaignRules.ageMin}-${campaignRules.ageMax}`}</ListItem>
                  <ListItem>{`Gender publisher: ${campaignRules.gender}`}</ListItem>
                  <ListItem>{`Language publisher: ${campaignRules.language}`}</ListItem>
                  <ListItem>{`Speech publisher: ${campaignRules.speech}`}</ListItem>
                </List>
              </Paper>

              <Paper className={classes.paper}>
                <Typography
                  textAlign={"left"}
                  color={"#676767"}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Campaign objetives:
                </Typography>

                <List>
                  <ListItem>{`URL: ${campaignObjetives.URL_objetivo}`}</ListItem>
                  <ListItem>{`Wanted visits: ${campaignObjetives.impresionesDeseadas}`}</ListItem>
                </List>

                <IconButton
                  style={{ marginLeft: "85%" }}
                  onClick={() => onSubmit()}
                  aria-label="add to favorites"
                >
                  <StarRoundedIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                textAlign={"left"}
                color={"#676767"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Campaign description:
              </Typography>
              {campaign.description}
            </Paper>
          </Grid>

          <Grid container xs={12}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                Begins: <br />{" "}
                <Moment format="MMMM Do, YYYY">{campaignInit}</Moment>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                Ends: <br />{" "}
                <Moment format="MMMM Do, YYYY">{campaignEnd}</Moment>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                State campaign:
                {campaign.state}, <br />
                {campaign.state === "Created"
                  ? `${diferenciaDeDias()} until this campaign starts.`
                  : campaign.state === "In Progress" &&
                    `${diferenciaDeDias()} days for this campaign finish.`}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
