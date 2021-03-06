import { Button, Container, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Lay from "./Lay";
import { Outlet } from "react-router-dom";
import "./auth.css";
const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [convenio, setConvenio] = useState("");
  const [celularResp, setCelularResp] = useState("");

  return (
    <>
      <Lay>
        <Container className="auth_container">
          <Paper className="auth">
            <div className="auth_header">
              <h5>Cadastro de Paciente</h5>
            </div>
            <div>
              <formm className="auth_form">
                <TextField
                  value={nome}
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                  label="insira o nome da criança"
                />
                <TextField
                  value={idade}
                  type="number"
                  onChange={(e) => setIdade(e.target.value)}
                  label="Insira a idade da criança"
                />
                <TextField
                  value={nomePai}
                  type="text"
                  onChange={(e) => setNomePai(e.target.value)}
                  label="Insira o nome do pai da criança"
                />
                <TextField
                  value={nomeMae}
                  type="text"
                  onChange={(e) => setNomeMae(e.target.value)}
                  label="Insira o nome da mãe da criança"
                />
                <TextField
                  value={convenio}
                  type="text"
                  onChange={(e) => setConvenio(e.target.value)}
                  label="Insira o plano de saúde"
                />
                <TextField
                  value={celularResp}
                  type="text"
                  onChange={(e) => setCelularResp(e.target.value)}
                  label="Insira o número do celular do responsável pela criança"
                />

                <Button
                  variant="contained"
                  style={{
                    margin: "5px 0px",
                    padding: "10px 20px",
                    backgroundColor: "#ff8f00",
                    color: "white",
                  }}
                >
                  Enviar cadastro
                </Button>
              </formm>
            </div>
          </Paper>
        </Container>
      </Lay>

      <Outlet />
    </>
  );
};

export default Cadastro;
