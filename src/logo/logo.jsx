import React from "react";
import { makeStyles } from "@material-ui/core";
import Bluebird from "../asset/img/bluebird.png";

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={Bluebird} width={55} alt="bluebird" />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    zIndex: 5,
    textAlign: "center",
    width: "45px",
    padding: "5px 0",
  },
});

export default Logo;
