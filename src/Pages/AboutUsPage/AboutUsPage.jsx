import GlobalHero from "../../Components/GlobalHero";
import Testimonials from "../../Components/Testimonials";
import ChooseUs from "./ChooseUs";
import DownloadApp from "./DownloadApp";
import Offer from "./Offer";
import Team from "./Team";

const AboutUsPage = () => {
  return (
    <>
      <GlobalHero title={"Let You Known About Us..."} />
      <ChooseUs/>
      <Offer/>
      <DownloadApp/>
      <Team/>
      <Testimonials/>
    </>
  );
};

export default AboutUsPage;
