import GlobalHero from "../../Components/GlobalHero";
import ContactForm from "./ContactForm";
import Tails from "./Tails";

const ContactUs = () => {
  return (
    <div className="mt-20">
      <GlobalHero title={"Feel Free To Reach Us..."} />
      <Tails />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
