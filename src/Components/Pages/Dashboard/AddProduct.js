import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const price = data.price;
    const picture = data.image;
    const avquantity = data.avquantity;
    const minquantity = data.minquantity;
    const name = data.name;
    const email = data.email;
    const description = data.description;
    const product = {
      price,
      picture,
      avquantity,
      minquantity,
      name,
      email,
      description,
    };
    fetch("https://morning-refuge-94486.herokuapp.com/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully added a product");
      });
    console.log(data);
  };
  return (
    <div className="my-2 mb-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Please Give a valid Email",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            {...register("minquantity", {
              required: {
                value: true,
                message: "Minimum Quantity is required",
              },
            })}
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.minquantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minquantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            {...register("avquantity", {
              required: {
                value: true,
                message: "Available Quantity is required",
              },
            })}
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.avquantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.avquantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "Price Quantity is required",
              },
            })}
            type="number"
            placeholder="Price Quantity"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn bg-black outline-none text-white hover:text-white btn-wide mt-5"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
}

export default AddProduct;
