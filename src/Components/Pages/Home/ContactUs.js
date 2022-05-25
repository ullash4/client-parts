import React from "react";
import contactus from "../../../assets/contactus.png";

function ContactUs() {
  return (
    <div className="my-16 px-10">
      <h1 className="max-w-xl text-3xl font-bold sm:text-6xl mb-6">
        Stay Conneted{" "}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-1">
          <span className="relative text-white mx-1 px-1"> with </span>
        </span>{" "}
        Cavalry Parts
      </h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-32">
          <img
            data-aos="zoom-in-left"
            data-aos-duration="1300"
            data-aos-delay="500"
            src={contactus}
            className="w-[694px] h-[455px] rounded-lg shadow-2xl"
            alt=""
          />
          <div
            data-aos="flip-down"
            data-aos-duration="1300"
            data-aos-delay="500"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
