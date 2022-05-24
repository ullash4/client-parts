import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

function Dashboard() {
  const [user]= useAuthState(auth);
  const [admin]= useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <h1>Welcome to Dashboard</h1>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content gap-3">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"/dashboard/myprofile"}>My Profile</NavLink>
          </li>
          {admin ? <li>
            <NavLink to={"/dashboard/addproduct"}>Add Product</NavLink>
          </li> : <li>
            <NavLink to={"/dashboard/addreview"}>Add Review</NavLink>
          </li>}
          
          {admin && <li>
            <NavLink to={"/dashboard/makeadmin"}>Make Admin</NavLink>
          </li>}
          {admin && <li>
            <NavLink to={"/dashboard/manageallorders"}>
              Manage All Orders
            </NavLink>
          </li>}
          {admin ? <li>
            <NavLink to={"/dashboard/manageproduct"}>Manage Products</NavLink>
          </li>: <li>
            <NavLink to={"/dashboard/myorder"}>My Order</NavLink>
          </li>}
          
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
