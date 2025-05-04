import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MultiBanner from '../components/MultiBanner'
import NewCollection from '../components/NewCollection'
import MidBanner from '../components/MidBanner'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'
import AppLayout from '../components/layout/app'

const Home = () => {
  return (
    <AppLayout>
      <HeroBanner/>
      <MultiBanner/>
      <NewCollection/>
      <MidBanner/>
      <TopSellers/>
      <Features/>
    </AppLayout>
  )
}

export default Home