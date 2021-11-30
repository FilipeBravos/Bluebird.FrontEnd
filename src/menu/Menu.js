import React from "react";
import { Edit } from "react-feather";

export const menu = () => [
  {
    nome: "Cadastro Paciente",
    goTo: "/cadastro",
    icone: <Edit style={{ color: "#FFFFFF" }} />,
    linkInterno: true,
    exibir: true,
  },
];
