import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutFrom from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gFnHJmxZV0fjWQXsLeSpSxXkj8b9ZPFWwe0T4a5h6E6syx75d83cYHsciYbk3Zl2Akbl3WPghXh4wDJxjwj5200bKNy4Cx4"
);

function Payment() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://morning-refuge-94486.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  console.log(order);

  return (
    <div className="my-10 bg-slate-400 p-10 rounded-lg shadow-lg">
      <div>
        <h1 className="text-2xl text-center font-bold text-primary">
          Please Make Payment for {id}
        </h1>

        <div className="my-10 mx-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Parts Name: {order.productname}</h2>
              <p>Name: {order.userName}</p>
              <p>Email: {order.email}</p>
              <p>Quantity: {order.quantity}/piece</p>
              <p>Price: ${order.productPrice}</p>
            </div>
          </div>
          <div className="bg-accent p-10 rounded-lg shadow-lg">
            <Elements stripe={stripePromise}>
              <CheckoutFrom order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
