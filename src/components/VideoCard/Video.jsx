import React from 'react'
import './Video.css'

import video1 from "../../assets/videos/Practice-video.mp4";



const Video = () => {
  return (
    <section className='container'>
      <div className="video-content">
        <h2 className='fs-700'> What sets us apart</h2>
        <h1 className='text-primary-400 fw-bold fs-1100'>
          The Bake Shop Way
        </h1>
        <div className="video-container">
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <p className='fs-600'>What makes Sweet O'clock  treats so deeply delicious? It's something we call The Bake Shop Way. The Bake Shop Way is our commitment to uncompromising quality and bake-craft. It's nourishing the soul and delighting the world with exceptional taste experiences. It's what guides everything we do. Enjoy a little bake shop in every bite!</p>
      </div>
    </section>
  )
}

export default Video

