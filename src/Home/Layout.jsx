import React from "react";
import { makeStyles } from "@material-ui/core";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";

const Layout = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.global}>
        <Cabecalho />
        <MenuLateral />
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles(() => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#c0c0de",
      borderRadius: "10px",
    },
  },
}));

export default Layout;
