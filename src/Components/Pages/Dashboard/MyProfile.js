import React from 'react'
import { useForm } from 'react-hook-form';

function MyProfile() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit=data=>{
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input
  {...register("name")}
    type="text"
    placeholder="Name"
    class="input input-bordered w-full max-w-xs"
  />
</div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Rating</span>
  </label>
  <input
  {...register("ratings")}
    type="number"
    placeholder="Ratings"
    class="input input-bordered w-full max-w-xs"
  />
</div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Review</span>
  </label>
  <textarea
  {...register("review")}
    type="text"
    placeholder="Review"
    class="input input-bordered w-full max-w-xs"
  />
</div>

<input className="btn bg-black outline-none text-white hover:text-white btn-wide mt-5" type="submit" value="Add Review" />
</form>
    </div>
  )
}

export default MyProfile