import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddReview() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const ratings = data.ratings;
    const review = data.review;
    const userReview = {
      name,
      ratings,
      review,
    };
    fetch("https://morning-refuge-94486.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully added review");
      });
    console.log(data);
  };
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            {...register("ratings")}
            type="number"
            placeholder="Ratings"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            {...register("review")}
            type="text"
            placeholder="Review"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <input
          className="btn bg-black outline-none text-white hover:text-white btn-wide mt-5"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
}

export default AddReview;
