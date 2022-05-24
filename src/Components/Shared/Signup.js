import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import Loading from "./Loading";
import useToken from "../Hooks/useToken";


function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    sError,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const navigate = useNavigate()

  const [token] = useToken(user)

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(()=>{
      if(token ){
        navigate(from, {replace: true})
      }
    },[navigate , token, from])

  if(loading || updating){
    return <Loading />
  }

  const onSubmit = async(data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({displayName : data.name})
    toast.success("Yay Signup done")
  }

  let errorMessage;

  if(sError || error){
    errorMessage= <p className="text-red-500"><small>{error.message || sError.message}</small></p>
  }
 

  return (
    <div data-aos="fade-left"
    data-aos-duration="500" className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 lg:max-w-4xl my-20 p-10">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Cavalry Parts
        </h2>

        <p className="text-xl text-center text-gray-600 dark:text-gray-200 mb-3">
          Please Sign Up
        </p>

        <SocialLogin />

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="f"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="Your Name"
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
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "password must be 5 character or long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage}
            <input className="btn btn-primary w-full max-w-xs" value="sign up" type="submit" />
          </form>

          <div className="mt-4">
            <p>
              <small>Already Member At Cavalry ?{" "}
              <Link className="text-primary" to={"/login"}>
                LogIn
              </Link></small>
            </p>
          </div>
      </div>

      <div data-aos="zoom-in"
      data-aos-duration="500"
        className="hidden bg-cover rounded-lg lg:block lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")',
        }}
      ></div>
    </div>
  );
}

export default Signup;
