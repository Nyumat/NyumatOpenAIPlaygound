import Layout from "../components/Layout";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Login from "../pages/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/intro" element={<Intro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
