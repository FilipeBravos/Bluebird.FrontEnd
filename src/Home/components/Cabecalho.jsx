import React from "react";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Cabecalho = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container direction="column"></Grid>
      </Toolbar>
    </AppBar>
  );
};

const drawerWidth = 81;

const useStyles = makeStyles(() => ({
  appBar: {
    position: "absolute",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    boxShadow:
      "0px 1px 1px -2px rgba(0,0,0,0.5), 0px -1px 1px 1px rgba(0,0,0,0.05), 0px 3px 20px 5px rgba(0,0,0,0.05)",
    height: "62px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
  },
  toolbar: {
    height: "62px",
    display: "flex",
    alignItems: "right",
    position: "absolute",
    right: "0px",
  },
}));

export default Cabecalho;
