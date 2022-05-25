import React from "react";
import headerpic from '../../../assets/headerpic.png'

function Landing() {
  return (
    <header className="bg-white dark:bg-gray-800">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg ">
            <h1
              data-aos="fade-left"
              className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl"
            >
              Find your
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-3">
                <span className="relative text-white mx-1 px-1"> premium </span>
              </span>
              parts for Bike exported from US
            </h1>
            <p
              data-aos="fade-left"
              className="mt-2 text-gray-600 dark:text-gray-300"
            >
              We work with the best bike parts dealers in US to find your
              bike parts.
            </p>
            <div
              data-aos="fade-right"
              className="grid gap-6 mt-8 sm:grid-cols-2"
            >
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Premium selection</span>
              </div>

              <div
                data-aos="fade-right"
                className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Insurance</span>
              </div>

              <div
                data-aos="fade-right"
                className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">All legal documents</span>
              </div>

              <div
                data-aos="fade-right"
                className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">From US parts dealers</span>
              </div>

              <div
                data-aos="fade-right"
                className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Payment Security</span>
              </div>

              <div
                data-aos="fade-right"
                className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-down"
          className="flex items-center justify-center w-full h-96 lg:w-1/2 "
        >
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={headerpic}
            alt="glasses"
          />
        </div>
      </div>
    </header>
  );
}

export default Landing;
