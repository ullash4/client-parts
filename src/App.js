import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Components/Shared/Navbar";
import NotfoundPage from "./Components/Shared/NotfoundPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Shared/Footer";
import Login from "./Components/Shared/Login";
import Signup from "./Components/Shared/Signup";
import Purchase from "./Components/Pages/Products/Purchase";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./Components/Pages/Dashboard/ManageAllOrders";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct";
import MyOrder from "./Components/Pages/Dashboard/MyOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivetRoute from "./Components/Shared/PrivetRoute";
import PrivetRouteAdmin from "./Components/Shared/PrivetRouteAdmin";
import Payment from "./Components/Pages/Dashboard/Payment";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allparts/:id" element={
          <PrivetRoute>
        <Purchase />
        </PrivetRoute>
        } />

        <Route
          path="/dashboard"
          element={
            <PrivetRoute>
              <Dashboard />
            </PrivetRoute>
          }
        >
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="makeadmin" element={<PrivetRouteAdmin>
            <MakeAdmin />
          </PrivetRouteAdmin>} />
          <Route path="manageallorders" element={<PrivetRouteAdmin>
            <ManageAllOrders />
          </PrivetRouteAdmin>} />
          <Route path="manageproduct" element={<PrivetRouteAdmin>
            <ManageProduct />
          </PrivetRouteAdmin>} />
          <Route path="myorder" element={<MyOrder />} />
        </Route>

        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
