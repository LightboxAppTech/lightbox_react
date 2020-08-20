import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import group from "../../assets/section-1.jpg";
import Avatar from "@material-ui/core/Avatar";
import DisabledLandingButton from "./DisabledLandingButton";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
  },
  heading: {
    color: theme.palette.primary.main,
    marginBottom: "2rem",
    fontSize: "2.4rem",
  },
  avatar: {
    width: "80%",
    height: "80%",
    backgroundColor: "transparent",
  },
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.heading}>
              Are you ready to kick start your <br /> professional journey in
              college?{" "}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <DisabledLandingButton text="Find Projects" align="left" />
              </Grid>
              <Grid item xs={12}>
                <DisabledLandingButton
                  text="Build Your Dream Team"
                  align="left"
                />
              </Grid>
              <Grid item xs={12}>
                <DisabledLandingButton
                  text="Join a Group of Learners"
                  align="left"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <img src={group} alt="Group Image" /> */}
            <Avatar className={classes.avatar} src={group} alt="Group Image" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SectionOne;