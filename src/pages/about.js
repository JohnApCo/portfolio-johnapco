import Image from "next/image";
import Button from "../components/Button";
import HeaderTitle from "../components/HeaderTitle";

//assets/images
import avatar from "../../public/img/john_apco_v3.png";
import Divider from "../components/Divider";
import SubTitle from "../components/SubTitle";

//icons
import {
  FaCss3Alt,
  FaGitAlt,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLanguage,
  FaPencilAlt,
  FaReact,
  FaSuitcase,
  FaWordpress,
} from "react-icons/fa";

import { SiFirebase, SiTailwindcss } from "react-icons/si";

import { MdEmail, MdLanguage, MdLocationOn, MdPhone } from "react-icons/md";
import Layout from "../layouts";
import TitleLayout from "../layouts/TitleLayout";

const InfoItem = ({ icon, itemText, valueText, ...other }) => {
  return (
    <li className="pb-2 [&_svg]:inline [&_svg]:mr-3 [&_svg]:text-primary">
      {icon}
      <span className="opacity-80 capitalize inline-block w-32 font-semibold">
        {itemText}:
      </span>
      <span className="block pl-8">{valueText}</span>
    </li>
  );
};

const SkillItem = ({ icon, title, ...other }) => {
  return (
    <div className="col-span-6 lg:col-span-3 text-center">
      <div
        className={`mx-auto p-2 border-2 rounded-full w-[1.6em] aspect-square text-8xl [&_svg]:mx-auto grid [&_svg]:m-auto hover:border-primary`}
      >
        {icon}
      </div>
      <h6 className="uppercase my-0 font-semibold">{title}</h6>
    </div>
  );
};

const ListItem = ({ icon, time, title, place, description, ...other }) => {
  return (
    <div className="col-span-12 lg:col-span-6 relative pl-16 after:content-[''] after:absolute after:border-l-[1px] after:bg-divider after:top-0 after:bottom-0 after:left-5">
      <div className="absolute w-10 h-10 left-0 top-0 rounded-full bg-primary text-background grid [&_svg]:m-auto z-10 ">
        {icon}
      </div>
      <span className="bg-divider px-3 rounded-full font-medium tracking-wider ">
        {time}
      </span>
      <h5 className="leading-none font-medium">
        {title}
        <span className="opacity-80 ">{` - ${place}`}</span>
      </h5>
      <p>{description}</p>
    </div>
  );
};
export default function About() {
  return (
    <>
      {/* <HeaderTitle title={"about me"} titleBg={"Resume"}></HeaderTitle> */}
      {/* <div className="pt-24 md:pt-0 container px-6 md:px-4 mx-auto"> */}
      <div className="flex flex-row">
        <div className="grid grid-cols-12 gap-6">
          <div className="w-1/3 lg:w-full mx-auto col-span-12 lg:col-span-5 xl:col-span-5">
            <Image
              src={avatar}
              alt="avatar johnapco"
              style={{ objectFit: "cover" }}
              quality={100}
              className="rounded-full w-full aspect-square m-auto mb-5 bg-slate-100 object-[0%_20%]"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-12 text-center lg:text-left">
                <h4 className="my-0">
                  I&apos;am <span className="text-primary">John</span>, a Web
                  Developer
                </h4>
                <p className="mt-2 mb-4">
                  Hi! My name is John Frei Apaza Coaquira. I am a Web Developer,
                  and I&apos;m very passionate and dedicated to my work. With 2
                  years experience as a professional Web developer, I have
                  acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
              <div className="col-span-6">
                <ul>
                  <InfoItem
                    icon={<FaPencilAlt />}
                    itemText={"first name"}
                    valueText={"John Frei"}
                  />
                  <InfoItem
                    icon={<FaPencilAlt />}
                    itemText={"last name"}
                    valueText={"Apaza Coaquira"}
                  />
                  <InfoItem
                    icon={<MdLanguage />}
                    itemText={"nationality"}
                    valueText={"Peruvian"}
                  />
                  <InfoItem
                    icon={<MdLocationOn />}
                    itemText={"address"}
                    valueText={"Perú"}
                  />
                </ul>
              </div>
              <div className="col-span-6">
                <ul>
                  <InfoItem
                    icon={<MdPhone />}
                    itemText={"phone"}
                    valueText={"+51 988002346"}
                  />
                  <InfoItem
                    icon={<MdEmail />}
                    itemText={"email"}
                    valueText={"john.apco.dev@gmail.com"}
                  />
                  <InfoItem
                    icon={<FaGraduationCap />}
                    itemText={"degree"}
                    valueText={"Bachelor"}
                  />
                  <InfoItem
                    icon={<FaLanguage />}
                    itemText={"languages"}
                    valueText={"Spanish,English"}
                  />
                </ul>
              </div>
              <div className="col-span-12 my-6">
                <Button
                  href="/files/CV_John_Frei_Apaza_Coaquira_2020.docx"
                  iconClass="fa-download"
                  download
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <SubTitle>My Skills</SubTitle>
      <div className="grid grid-cols-12 gap-4">
        <SkillItem icon={<FaHtml5 color="#E34F26" />} title="HTML" />
        <SkillItem icon={<FaCss3Alt color="#1572B6" />} title="CCS" />
        <SkillItem icon={<FaJs color="#F7DF1E" />} title="Javascript" />
        <SkillItem icon={<FaReact color="#61DAFB" />} title="React" />
        <SkillItem icon={<FaGitAlt color="#F05032" />} title="Git" />
        <SkillItem icon={<SiTailwindcss color="#06B6D4" />} title="Tailwind" />
        <SkillItem icon={<SiFirebase color="#FFCA28" />} title="Firebase" />
        <SkillItem icon={<FaWordpress color="#21759B" />} title="Wordpress" />
      </div>
      <Divider />
      <SubTitle>Experience & Education</SubTitle>
      <div className="grid grid-cols-12 gap-14 mb-24">
        <ListItem
          icon={<FaSuitcase />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
        <ListItem
          icon={<FaSuitcase />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
        <ListItem
          icon={<FaSuitcase />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
        <ListItem
          icon={<FaGraduationCap />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
        <ListItem
          icon={<FaGraduationCap />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
        <ListItem
          icon={<FaGraduationCap />}
          time={"2019 - 2019"}
          title="Instrumentista"
          place="Repsol"
          description="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,m"
        />
      </div>
      {/* </div> */}
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <TitleLayout title={"about me"} titleBg={"Resume"}>
        {page}
      </TitleLayout>
    </Layout>
  );
};
