import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import useSignleProduct from "../../Hooks/useSingleProduct";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

function Purchase() {
  const [user] = useAuthState(auth);
  const [product] = useSignleProduct();
  const { handleSubmit } = useForm();
  const [value, setValue] = useState("");

  const { name, picture, price, minquantity, avquantity } = product;

  const onSubmit = () => {
    const productname = name;
    const userName = user.displayName;
    const email = user.email;
    const quantity = minquantity;
    const productPrice = price;
    const order = {
      productname,
      userName,
      email,
      quantity,
      productPrice,
    };

    fetch("https://morning-refuge-94486.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("You made an order, see your order in dashboard");
      });
  };

  let errorMessage;
  if (value > avquantity || value < minquantity) {
    errorMessage = <p className="text-red-500">Please set exact quantity</p>;
  }

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-5 bg-gray-50 ">
            <div className="flex flex-col justify-around items-center gap-5">
              <div>
                <img
                  className="w-[249px] h-[259px] rounded-xl"
                  src={picture}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl font-medium">Name: {name}</p>
                <p className="text-xl font-medium">
                  Minimun Quantity: {minquantity} pices
                </p>
                <p className="text-xl font-medium">
                  Available quantity: {avquantity} pices
                </p>
                <p className="text-xl font-medium">Price: ${price}</p>
              </div>
            </div>
          </div>

          <div className="py-5 bg-white">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    value={value || minquantity}
                    onChange={(e) => setValue(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errorMessage}
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    value={price}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <input
                  className="btn bg-black outline-none text-white hover:text-white w-full max-w-xs mt-5"
                  value="Purchase"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
