import HomeSlider from "../Components/Sliders/HomeSlider"
import OurBrand from "../Components/HomePage/OurBrand"
import OurService from "../Components/HomePage/OurService"
import Distributor from "../Components/HomePage/Distributor"

export default function Home() {
    return (
        <>
            <HomeSlider />
            <OurBrand />
            <OurService />
            <Distributor />
        </>
    )
}