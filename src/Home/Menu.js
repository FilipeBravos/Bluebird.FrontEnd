import React from "react";
import { Clipboard, Edit, Calendar, Info } from "react-feather";

export const menu = () => [
  {
    nome: "Cadastro",
    goTo: "/cadastro",
    icone: <Edit style={{ color: "#FFFFFF" }} />,
    linkInterno: true,
    exibir: true,
  },
  {
    nome: "Avaliação",
    goTo: "/avaliação",
    icone: <Info style={{ color: "#FFFFFF" }} />,
    linkInterno: true,
    exibir: true,
  },
  {
    nome: "Relatorio",
    goTo: "/relatorio",
    icone: <Clipboard style={{ color: "#FFFFFF" }} />,
    linkInterno: true,
    exibir: true,
  },
  {
    nome: "Agenda",
    goTo: "/agenda",
    icone: <Calendar style={{ color: "#FFFFFF" }} />,
    linkInterno: true,
    exibir: true,
  },
];
