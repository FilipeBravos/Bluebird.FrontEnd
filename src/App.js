import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { getToken } from "./pages/useToken";
import Layout from "./Home/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<Private />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Layout />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

const Private = () => <div>private</div>;

const useAuth = () => {
  const token = getToken();
  if (token) {
    console.log(token);
    return true;
  }
  return false;
};

function PrivateRoute() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default App;
