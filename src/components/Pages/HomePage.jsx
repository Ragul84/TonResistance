import React from 'react'
import Banner from '../Banner/Banner.jsx'
import CoinsTable from '../CoinsTable.jsx'
import Spotlight from '../Spotlight.jsx'
import Header from '../Header.tsx'
import Learn from '../Learn.jsx'
function HomePage() {
  return (
    <>
      <Header />
      <Learn />
      <Spotlight />
      <Banner />
      <CoinsTable />
    </>
  )
}

export default HomePage
