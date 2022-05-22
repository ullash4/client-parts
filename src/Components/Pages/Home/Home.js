import React from 'react'
import BusinessStats from './BusinessStats'
import ContactUs from './ContactUs'
import Landing from './Landing'
import Marketing from './Marketing'

function Home() {
  return (
    <div>
      <Landing />
      <Marketing />
      <BusinessStats />
      <ContactUs />
    </div>
  )
}

export default Home