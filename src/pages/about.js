import Image from "next/image";
import Button from "../components/Button";
import HeaderTitle from "../components/HeaderTitle";

//assets/images
import avatar from "../../public/img/john_apco_v4.png";
import Divider from "../components/Divider";
import SubTitle from "../components/SubTitle";

//icons
import {
  FaDownload,
  FaGraduationCap,
  FaLanguage,
  FaPencilAlt,
  FaSuitcase,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiCss3,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

import { MdEmail, MdLanguage, MdLocationOn, MdPhone } from "react-icons/md";
import Layout from "../layouts";
import TitleLayout from "../layouts/TitleLayout";
import { InfoItem } from "../components/InfoItem";
import PageTransition from "../components/animate/withTransition";
import withTransition from "../components/animate/withTransition";
import Page from "../components/Page";

const personalInfo = [
  { itemText: "first name", icon: <FaPencilAlt />, valueText: "John Frei" },
  { itemText: "last name", icon: <FaPencilAlt />, valueText: "Apaza Coaquira" },
  { itemText: "nationality", icon: <MdLanguage />, valueText: "Peruvian" },
  { itemText: "address", icon: <MdLocationOn />, valueText: "Perú" },
  { itemText: "phone", icon: <MdPhone />, valueText: "+51 988002346" },
  {
    itemText: "email",
    icon: <MdEmail />,
    valueText: "john.apco.dev@gmail.com",
  },
  { itemText: "degree", icon: <FaGraduationCap />, valueText: "Bachelor" },
  { itemText: "languages", icon: <FaLanguage />, valueText: "Spanish,English" },
];

const skillInfo = [
  { icon: <SiHtml5 color="#E34F26" />, title: "HTML5" },
  { icon: <SiCss3 color="#1572B6" />, title: "CCS" },
  { icon: <SiJavascript color="#F7DF1E" />, title: "Javascript" },
  { icon: <SiReact color="#61DAFB" />, title: "React" },
  { icon: <SiGit color="#F05032" />, title: "Git" },
  { icon: <SiTailwindcss color="#06B6D4" />, title: "Tailwind" },
  { icon: <SiSass color="#CC6699" />, title: "Sass" },
  { icon: <SiNextdotjs color="#000000" />, title: "NextJs" },
  { icon: <SiRedux color="#764ABC" />, title: "Redux" },
  { icon: <SiFirebase color="#FFCA28" />, title: "Firebase" },
  { icon: <SiCplusplus color="#00599C" />, title: "C++" },
  { icon: <SiWordpress color="#21759B" />, title: "Wordpress" },
];

const expInfo = [
  {
    time: "2020-2022",
    title: "Design and Development Assistant",
    place: "Lontec",
    description:
      "Design and implementation of web pages using Wordpress, CSS and HTML. Application development with Kodular. Development of processing scripts in Python for people detection and tracking using Tensorflow and Raspberry Pi. Electronic design (schematic and layout) using the Eagle program. Development of algorithms in C++ for an ARM microcontroller.",
  },
  {
    time: "2019",
    title: "Maintenance trainee",
    place: "Repsol",
    description:
      "Planning corrective, preventive and predictive work. Support in carrying out maintenance indicators at the end of the month. Expense analysis of the different maintenance items. Internal warehouse management, Instrumentation area. Monitoring of instrumentation works in the plant. Daily reports of executed and pending jobs.",
  },
  {
    time: "2018",
    title: "Researcher",
    place: "Control SAC",
    description:
      "Development of IoT project for pest control. Circuit design using Eagle and PCB printing. Programming of the microcontrollers with the programming logic to link the system with the web server to send project notifications.",
  },
];

const eduInfo = [
  {
    time: "2023",
    title: "Front End Development Libraries",
    place: "FreeCodeCamp",
    description:
      "I learned how to style your site quickly with Bootstrap and Sass. I built a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.",
  },
  {
    time: "2022",
    title: "JavaScript Algorithms and Data Structures",
    place: "FreeCodeCamp",
    description:
      "I learned the fundamentals of JavaScript including variables, arrays, objects, loops, and functions. I also learned two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).",
  },
  {
    time: "2022",
    title: "Responsive Web Design",
    place: "FreeCodeCamp",
    description:
      "I learned HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design, I learned how to make webpages that respond to different screen sizes with Flexbox and CSS Grid.",
  },
  {
    time: "2015-2019",
    title: "English",
    place: "ICPNA-Instituto Cultural Peruano Norteamericano",
    description:
      "I learned American English with the exclusive Immersia Learning methodology.",
  },
  {
    time: "2017",
    title: "PLC - Electrónica Industrial - II",
    place: "Curso de Extensión Universitaria",
    description:
      "I learned to provide PLC installation and programming services for the control of industrial machines.",
  },
  {
    time: "2016",
    title: "PLC - Electrónica Industrial - I",
    place: "Curso de Extensión Universitaria",
    description:
      "I learned to provide PLC installation and programming services for the control of industrial machines.",
  },
  {
    time: "2013-2018",
    title: "Ing. Electrónica",
    place: "Universidad Nacional de Ingeniería",
    description:
      "I learned to design, develop, test and supervise the manufacture of electrical equipment, such as electric motors, radar and navigation systems, communication systems or power generation equipment.",
  },
  {
    time: "2014",
    title: "Lenguaje de programación C++",
    place: "Curso de Extensión Universitaria",
    description:
      "I learned how to create control flow structures and functions, differentiate between data types and variables, develop the basic structure of a program, and set up a development environment for C++.",
  },
];

const SkillItem = ({ icon, title, ...other }) => {
  return (
    <div className="text-center">
      <div className="mx-auto p-2 border-2 rounded-full w-[1.8em] aspect-square text-7xl lg:text-7xl [&_svg]:mx-auto grid [&_svg]:m-auto hover:border-primary">
        {icon}
      </div>
      <h6 className="uppercase my-0 font-semibold">{title}</h6>
    </div>
  );
};

const ListItem = ({ icon, time, title, place, description, ...other }) => {
  return (
    <div className="relative pl-16 after:content-[''] after:absolute after:border-l-[1px] after:bg-divider after:top-0 after:bottom-0 after:left-5 mb-6">
      <div className="absolute w-10 h-10 left-0 top-0 rounded-full bg-primary text-white grid [&_svg]:m-auto z-10 ">
        {icon}
      </div>
      <span className="bg-divider px-3 rounded-full font-medium tracking-wider ">
        {time}
      </span>
      <h5 className="leading-tight font-medium">
        {title}
        <span className="opacity-80 ">{` - ${place}`}</span>
      </h5>
      <p>{description}</p>
    </div>
  );
};
function About() {
  return (
    <Page title="About">
      <TitleLayout title={"about me"} titleBg={"Resume"}>
        <div className="flex flex-row">
          <div className="grid grid-cols-12 gap-6">
            <div className="w-1/2 lg:w-full mx-auto col-span-12 lg:col-span-5 xl:col-span-5">
              <Image
                src={avatar}
                alt="avatar johnapco"
                style={{ objectFit: "cover" }}
                quality={100}
                className="rounded-full w-4/5 aspect-square m-auto mb-5 bg-divider object-[0%_20%]"
              />
            </div>
            <div className="col-span-12 lg:col-span-7 xl:col-span-7">
              <div className="text-center lg:text-left">
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
              {/* <div className="grid grid-rows-4 grid-flow-col"> */}
              <div className="grid grid-cols-2">
                {personalInfo.map((el, index) => (
                  <InfoItem
                    key={index}
                    icon={el.icon}
                    itemText={el.itemText}
                    valueText={el.valueText}
                  />
                ))}
              </div>
              <div className="my-6">
                <a href="/files/CV_John_Frei_Apaza_Coaquira_2023.pdf" download>
                  <Button icon={<FaDownload />}>Download CV</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <SubTitle>My Skills</SubTitle>
        <div className="xl:mx-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillInfo.map((el, index) => (
            <SkillItem key={index} icon={el.icon} title={el.title} />
          ))}
        </div>
        <Divider />
        <SubTitle>Experience & Education</SubTitle>
        <div className="grid grid-cols-2 gap-x-10 pb-24">
          <div className="col-span-2 lg:col-span-1">
            {expInfo.map((el, index) => (
              <ListItem
                key={index}
                icon={<FaSuitcase />}
                time={el.time}
                title={el.title}
                place={el.place}
                description={el.description}
              />
            ))}
          </div>
          <div className="col-span-2 lg:col-span-1">
            {eduInfo.map((el, index) => (
              <ListItem
                key={index}
                icon={<FaGraduationCap />}
                time={el.time}
                title={el.title}
                place={el.place}
                description={el.description}
              />
            ))}
          </div>
        </div>
      </TitleLayout>
    </Page>
  );
}

About = withTransition(About);
export default About;
