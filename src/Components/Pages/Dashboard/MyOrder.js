import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

function MyOrder() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://morning-refuge-94486.herokuapp.com/order?email=${user.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );

  if (isLoading) {
    refetch();
    return <Loading></Loading>;
  }

  // console.log(orders);

  const handleDelete = (id) => {
    const sure = window.confirm("Are sure to delete it?");
    if (sure) {
      fetch(`https://morning-refuge-94486.herokuapp.com/order/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          console.log(data);
          toast.success("successfully delete one order");
        });
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center">My orderment {orders.length}</h1>

      <div className="overflow-x-auto ">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className="hover" key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user?.photoURL ||
                            "https://images.pexels.com/photos/5875794/pexels-photo-5875794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {order.userName || "Normal guy"}
                      </div>
                      <div className="text-sm opacity-50">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td>{order.productname}</td>
                <td>{order.quantity} pices</td>

                <td>
                  {order.productPrice && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs mx-1">Pay</button>
                    </Link>
                  )}
                  {order.productPrice && order.paid && (
                    <button className="btn btn-xs btn-success mx-1">
                      Paid
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-xs mx-1 btn-error"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrder;
