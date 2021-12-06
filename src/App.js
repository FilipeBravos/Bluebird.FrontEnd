import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
//import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { getToken } from "./pages/useToken";
import Layout from "./Home/Layout";
import Agenda from "./pages/Agenda";
import Avaliação from "./pages/Avaliação";
import Relatorio from "./pages/Relatorio";

function Home() {
  return <h1>Home</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="index" element={<Home />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="avaliaçao" element={<Avaliação />} />
          <Route path="relatorio" element={<Relatorio />} />
          <Route path="agenda" element={<Agenda />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
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
