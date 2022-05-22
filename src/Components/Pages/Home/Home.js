import React from 'react'
import PartsForHome from '../Products/PartsForHome'
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
      <ContactUs />
    </div>
  )
}

export default Home