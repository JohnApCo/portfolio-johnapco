import {
  FaCodepen,
  FaDiscord,
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaPencilAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { InfoItem } from "../components/InfoItem";
import Layout from "../layouts";
import TitleLayout from "../layouts/TitleLayout";
import { ContactForm } from "../sections/contact";
import Link from "next/link";
import withTransition from "../components/animate/withTransition";
import Page from "../components/Page";

const SocialLink = ({ icon, href = "", ...other }) => {
  return (
    <div className="inline-block mx-[0.3rem]">
      <Link href={href} legacyBehavior>
        <a className="bg-divider grid [&_svg]:m-auto w-10 h-10 rounded-full hover:bg-primary hover:text-background">
          {icon}
        </a>
      </Link>
    </div>
  );
};
function Contact() {
  return (
    <Page title="Contact">
      <TitleLayout title={"get in touch"} titleBg={"Contact"}>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3 lg:col-span-1 [&>*]:pb-4">
            <h4 className="uppercase leading-none my-0">Don&apos;t be shy!</h4>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <InfoItem
                icon={<FaEnvelopeOpen />}
                itemText={"MAIL ME"}
                valueText={"john.apco.dev@gmail.com"}
              />
              <InfoItem
                icon={<FaPhoneAlt />}
                itemText={"Call ME"}
                valueText={"+51988002346"}
              />
            </div>

            <div className="">
              <SocialLink
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/johnapco/"
              />
              <SocialLink
                icon={<FaGithub />}
                href="https://github.com/JohnApCo"
              />
              <SocialLink
                icon={<FaCodepen />}
                href="https://codepen.io/JohnApCo"
              />
              <SocialLink icon={<FaDiscord />} href="/" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </TitleLayout>
    </Page>
  );
}
Contact = withTransition(Contact);
export default Contact;
