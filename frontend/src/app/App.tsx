import Layout from "../components/Layout";
import UserFetch from "../components/UserFetch";
import Home from "../pages/Home";
import UserHome from "../pages/UserHome";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserHome />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
