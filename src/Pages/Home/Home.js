import React from 'react'
import './home.css'
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import YoutubeVideo from '../../Components/HomePageComponents/HomeVideo/YoutubeVideo';
import OurBrand from '../../Components/HomePageComponents/OurBrand/OurBrand';
import OurService from '../../Components/HomePageComponents/OurService/OurService';
// import Help from '../../Components/HomePageComponents/Help/Help';
import Distributor from '../../Components/HomePageComponents/Distributors/Distributor';
import Middle from '../../Components/HomePageComponents/MiddlePage/Middle';

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <YoutubeVideo />
      <OurBrand />
      <OurService/>
      {/* <Help/> */}
      <Distributor/>
      <Middle/>
    </div>
  )
}

export default Home;