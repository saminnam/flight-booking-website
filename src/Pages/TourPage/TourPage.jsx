import GlobalHero from "../../Components/GlobalHero";
import WhyChoose from "../../Components/WhyChoose";
import Features from "./Features";
import TouristDestination from "./TouristDestination";
import TouristGallery from "./TouristGallery";

const TourPage = () => {
  return (
    <>
      <GlobalHero title={"Choose Your Destinations Here..."} />
      <WhyChoose/>
      <TouristDestination/>
      <Features />
      <TouristGallery/>
    </>
  );
};

export default TourPage;
