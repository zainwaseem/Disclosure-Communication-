import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import HireOn from "./Pages/HireOn";
import Reviews from "./Pages/Reviews";
import Footer from "./Components/Footer";
import BlogCard from "./Components/BlogCard";
import Help from "./Pages/Help";
import Helpform from "./Components/Helpform";
import JobCard from "./Components/JobCard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/hireon" element={<HireOn />} />
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/help" element={<Help />} />
        <Route path="/findjob" element={<JobCard />} />
        {/* <Route path="/helpform" element={<Helpform />} /> */}
        {/* <Route path="/blogs" element={<BlogCard />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
