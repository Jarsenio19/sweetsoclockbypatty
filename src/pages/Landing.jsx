import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import CollectionCards from '../components/CollectionCards/CollectionCards'
import CarouselCards from '../components/CarouselCards/CarouselCards'

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <CollectionCards />
      <CarouselCards />
    </>
  )
}

export default Landing