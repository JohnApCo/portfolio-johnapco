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
import TitleLayout from "../layouts/TitleLayout";
import { ContactForm } from "../sections/contact";
import Link from "next/link";
import withTransition from "../components/animate/withTransition";
import Page from "../components/Page";
import { MotionViewport, varFade } from "../components/animate";
import { motion } from "framer-motion";

const socialInfo = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/johnapco/",
  },
  { title: "Github", icon: <FaGithub />, url: "https://github.com/JohnApCo/" },
  { title: "Codepen", icon: <FaCodepen />, url: "https://codepen.io/JohnApCo" },
  {
    title: "Discord",
    icon: <FaDiscord />,
    url: "https://www.linkedin.com/in/johnapco/",
  },
];
const SocialLink = ({ title, icon, href = "", ...other }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className="inline-block mx-[0.3rem]"
    >
      <Link href={href} legacyBehavior>
        <a
          title={title}
          className="bg-divider grid [&_svg]:m-auto w-10 h-10 rounded-full hover:bg-primary hover:text-white"
        >
          {icon}
        </a>
      </Link>
    </motion.div>
  );
};
function Contact() {
  return (
    <Page title="Contact">
      <TitleLayout title={"get in touch"} titleBg={"Contact"}>
        <div className="grid grid-cols-3 gap-10">
          <MotionViewport
            variants={varFade().inLeft}
            className="col-span-3 lg:col-span-1 [&>*]:pb-4"
          >
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
              {socialInfo.map((el, index) => (
                <SocialLink
                  key={index}
                  title={el.title}
                  icon={el.icon}
                  href={el.url}
                />
              ))}
            </div>
          </MotionViewport>
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
