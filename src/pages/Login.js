import { Button, Container, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import PropTypes from "prop-types";
import { saveToken } from "./useToken";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      email,
      password,
    });

    saveToken(token);

    navigate("/home");
  };
  return (
    <Layout>
      <Container className="auth_container">
        <Paper className="auth">
          <div className="auth_header">
            <h5>Log in</h5>
          </div>
          <div>
            <form className="auth_form" onSubmit={handleSubmit}>
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
                label="insira sua Senha"
              />

              <Button
                variant="contained"
                type="submit"
                style={{
                  margin: "5px 0px",
                  padding: "10px 20px",
                  backgroundColor: "#ff8f00",
                  color: "white",
                }}
              >
                Log
              </Button>
            </form>
          </div>
          <div className="auth_bottom">
            <p>
              Don't Have an account?
              <span>
                <Link to="/Signup">Sign UP</Link>
              </span>
            </p>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
