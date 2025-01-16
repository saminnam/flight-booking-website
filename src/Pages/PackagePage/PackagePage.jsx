import AboutUs from "../../Components/AboutUs";
import GlobalHero from "../../Components/GlobalHero";
import PricingCard from "../../Pages/PackagePage/PricingCard";

const PackagePage = () => {
  return (
    <>
      <GlobalHero title={"Choose Your Special Package Here..."} />
      <AboutUs/>
      <PricingCard />
    </>
  );
};

export default PackagePage;
