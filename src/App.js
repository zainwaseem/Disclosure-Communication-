import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
