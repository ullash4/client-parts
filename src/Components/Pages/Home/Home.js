import React from 'react'
import PartsForHome from '../Products/PartsForHome'
import Reviews from '../Reviews/Reviews'
import BusinessStats from './BusinessStats'
import ContactUs from './ContactUs'
import Landing from './Landing'
import Marketing from './Marketing'

function Home() {
  return (
    <div>
      <Landing />
      <PartsForHome />
      <Marketing />
      <BusinessStats />
      <Reviews />
      <ContactUs />
    </div>
  )
}

export default Home