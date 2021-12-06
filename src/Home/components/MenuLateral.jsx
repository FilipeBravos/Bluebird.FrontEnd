import React from "react";
import { Drawer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemMenuLateral from "./ItemMenuLateral";
import Logo from "../../logo/logo";
const MenuLateral = (props) => {
  const classes = useStyles();

  const criarIconesLaterais = (itens) =>
    itens
      .filter((item) => item.exibir)
      .map((item, index) => {
        return (
          <Grid key={index} item>
            <ItemMenuLateral
              label={item.nome}
              goTo={item.goTo}
              icone={item.icone}
              linkInterno={item.linkInterno}
            />
          </Grid>
        );
      });

  return (
    <>
      <Logo />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Grid container> {criarIconesLaterais(props.itens)}</Grid>
      </Drawer>
    </>
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
    marginTop: "62px",
    backgroundColor: "#20174A",
  },
  toolbar: theme.mixins.toolbar,
}));

export default MenuLateral;
