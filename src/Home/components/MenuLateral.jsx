import React from "react";
import { Drawer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const MenuLateral = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <Grid container></Grid>
    </Drawer>
  );
};

const drawerWidth = 81;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#20174A",
  },
  toolbar: theme.mixins.toolbar,
}));

export default MenuLateral;
