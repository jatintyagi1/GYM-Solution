import NavCard from "../Components/Header/NavCard"
import Navbar from "../Components/Header/Navbar"
import HomeSlider from "../Components/Sliders/HomeSlider"
import OurBrand from "../Components/HomePage/OurBrand"
import Footer from '../Components/Footer/Footer'

export default function Home() {
    return (
        <>
            <NavCard />
            <Navbar />
            <HomeSlider />
            <OurBrand />
            <Footer />
        </>
    )
}