import { Button, Container, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "./Layout";
import { Link, Outlet } from "react-router-dom";
import "./auth.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  return (
    <>
      <Layout>
        <Container className="auth_container">
          <Paper className="auth">
            <div className="auth_header">
              <h5>Create Account</h5>
            </div>
            <div>
              <formm className="auth_form">
                <TextField
                  value={name}
                  type="text"
                  style={{ margin: "5px 0px" }}
                  onChange={(e) => setName(e.target.value)}
                  label="insira seu nome"
                />
                <TextField
                  value={phoneNo}
                  type="text"
                  style={{ margin: "5px 0px" }}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  label="Insira o Celular"
                />
                <TextField
                  value={email}
                  type="email"
                  style={{ margin: "5px 0px" }}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Insira seu Email"
                />
                <TextField
                  value={password}
                  type="password"
                  style={{ margin: "5px 0px" }}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Insira sua senha"
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
                  Sign UP
                </Button>
              </formm>
            </div>
            <div className="auth_bottom">
              <p>
                Already have an Account?
                <span>
                  <Link to="/">Log In</Link>
                </span>
              </p>
            </div>
          </Paper>
        </Container>
      </Layout>

      <Outlet />
    </>
  );
};

export default SignUp;
