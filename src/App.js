import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Components/Shared/Navbar";
import NotfoundPage from "./Components/Shared/NotfoundPage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
