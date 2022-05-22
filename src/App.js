import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Components/Shared/Navbar";
import NotfoundPage from "./Components/Shared/NotfoundPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Components/Shared/Footer";
import Login from "./Components/Shared/Login";
import Signup from "./Components/Shared/Signup";
import ShowAllParts from "./Components/Pages/Products/ShowAllParts";
import Purchase from "./Components/Pages/Products/Purchase";
import AllReviews from "./Components/Pages/Reviews/AllReviews";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allparts" element={<ShowAllParts />} />
        <Route path="/allparts/:id" element={<Purchase />} />
        <Route path="/allreview" element={<AllReviews />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
