import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const ItemMenuLateral = (props) => {
  const classes = useStyles();

  return props.linkInterno ? (
    <Link id={props.label} to={props.goTo} className={classes.link}>
      <div className={classes.item}>
        {props.icone}
        <Typography className={classes.label}>{props.label}</Typography>
      </div>
    </Link>
  ) : (
    <a
      id={props.label}
      href={props.goTo}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      <div className={classes.item}>
        {props.icone}
        <Typography className={classes.label}>{props.label}</Typography>
      </div>
    </a>
  );
};

const useStyles = makeStyles({
  item: {
    height: "72px",
    width: "80px",
    textAlign: "center",
  },
  icon: {
    color: "#FFFFFF",
  },
  label: {
    color: "#FFFFFF",
    fontSize: "8pt",
    fontWeight: "300",
    wordBreak: "break-word",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
});

export default ItemMenuLateral;
