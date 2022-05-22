import React from "react";
import { FcManager } from "react-icons/fc";
import { BsFillHeartFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineEngineering } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";

function BusinessStats() {
  return (
    <section class="">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-xl">
          <h2
            class="text-3xl font-bold sm:text-6xl"
          >
            Business Summary Of Our Amazing Website
          </h2>

          <p
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            class="mt-4 sm:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore beatae facilis dignissimos rem praesentium officia obcaecati
            quisquam iure recusandae!
          </p>
        </div>

        <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">5000+</p>
              <p class="mt-1 text-xl font-medium">Customers</p>
            </div>
            <FcManager className="text-5xl" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">190k+</p>
              <p class="mt-1 text-xl font-medium">
                Impressions
              </p>
            </div>
            <BsFillHeartFill className="text-4xl text-red-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">$150k+</p>
              <p class="mt-1 text-xl font-medium">
                Client profits{" "}
                
              </p>
            </div>
            <GiReceiveMoney className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">10K+</p>
              <p class="mt-1 text-xl font-medium">
                Reviews 
              </p>
            </div>
            <MdOutlineReviews className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">100+</p>
              <p class="mt-1 text-xl font-medium">
                Motor Parts 
              </p>
            </div>
            <FcEngineering className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            class="p-8 shadow-xl rounded-xl flex justify-around items-center"
          >
            <div>
              <p class="text-3xl font-extrabold">100+</p>
              <p class="mt-1 text-xl font-medium">
                Staff{" "}
                
              </p>
            </div>
            <MdOutlineEngineering className="text-5xl text-pink-500" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BusinessStats;
