import HomeCarousel from "../../Components/HomePage/HomeCarousel"
import HomeCommunityLayout from "../../Components/HomePage/HomeCommunity"
import HomeHeroSection from "../../Components/HomePage/HomepageHero"
import LatestInsights from "../../Components/HomePage/LatestInsights"
import LayoutEl from "../../Shared/LayoutEl"



const HomePage=()=>{
  return (
    <>
    <LayoutEl>
          <HomeHeroSection/>
          <HomeCarousel/>
          <LatestInsights/>
          <HomeCommunityLayout/>
    </LayoutEl>
    </>
  )
}
export default HomePage