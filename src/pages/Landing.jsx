import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import CollectionCards from '../components/CollectionCards/CollectionCards'
import CarouselCards from '../components/CarouselCards/CarouselCards'
import Video from '../components/VideoCard/Video'
import Engagement from '../components/Engagement/Engagement'
import GiftInsparation from '../components/GiftInsparation/GiftInsparation'
import Testimonial from '../components/Testimonial/Testimonial'
import NewsLetterSection from '../components/NewsLetterSection/NewsLetterSection'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <CollectionCards />
      <CarouselCards />
      <Video />
      <Engagement />
      <GiftInsparation />
      <Testimonial />
      <NewsLetterSection />
      <Footer />
    </>
  )
}

export default Landing