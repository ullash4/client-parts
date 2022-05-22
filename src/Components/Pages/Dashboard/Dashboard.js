import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center ">
    <h1>Welcome to Dashboard</h1>
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content gap-3">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to={'/dashboard/myprofile'}>My Profile</NavLink></li>
      <li><NavLink to={'/dashboard/addproduct'}>Add Product</NavLink></li>
      <li><NavLink to={'/dashboard/addreview'}>Add Review</NavLink></li>
      <li><NavLink to={'/dashboard/makeadmin'}>Make Admin</NavLink></li>
      <li><NavLink to={'/dashboard/manageallorders'}>Manage All Orders</NavLink></li>
      <li><NavLink to={'/dashboard/manageproduct'}>Manage Products</NavLink></li>
      <li><NavLink to={'/dashboard/myorder'}>My Order</NavLink></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard