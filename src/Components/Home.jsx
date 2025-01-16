import Hero from './Hero'
import Network from './Network'
import Destination from './Destination'
import AboutUs from './AboutUs'
import WhyChoose from './WhyChoose'
import Benefits from './Benefits'
import Blogs from './Blogs'
import Status from './Status'
// import ChooseUs from '../Pages/AboutUsPage/ChooseUs'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <main>
      <Hero/>
      <Network/>
      <AboutUs/>
      <WhyChoose/>
      {/* <ChooseUs/> */}
      <Destination/>
      <Status/>
      <Benefits/>
      <Blogs/>
      <Testimonials/>
    </main>
  )
}

export default Home
