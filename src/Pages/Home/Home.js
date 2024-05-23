import React from 'react'
import './home.css'
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import YoutubeVideo from '../../Components/HomePageComponents/HomeVideo/YoutubeVideo';
import OurBrand from '../../Components/HomePageComponents/OurBrand/OurBrand';
import OurService from '../../Components/HomePageComponents/OurService/OurService';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <YoutubeVideo />
      <OurBrand />
      <OurService/>
    </div>
  )
}

export default Home;