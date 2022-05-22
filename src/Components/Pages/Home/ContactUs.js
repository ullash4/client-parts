import React from 'react'
import contactus from '../../../assets/contactus.png'

function ContactUs() {
  return (
      <div className='my-16 px-10'>
      <h1 className='max-w-xl text-3xl font-bold sm:text-6xl mb-6'>Stay Conneted with Cavalry Parts</h1>
    <div class="hero ">
        
  <div class="hero-content flex-col lg:flex-row-reverse gap-32">
  <img  data-aos="zoom-in-left" 
  data-aos-duration="1300"
      data-aos-delay="500" src={contactus} class="w-[694px] h-[455px] rounded-lg shadow-2xl" alt=''/>
    <div  data-aos="flip-down" 
    data-aos-duration="1300"
      data-aos-delay="500" class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="1000" class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your name</span>
          </label>
          <input type="text" placeholder="Your name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Message</span>
          </label>
          <textarea type="text" placeholder="Your Message" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default ContactUs