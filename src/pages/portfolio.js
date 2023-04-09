import Image from "next/image";
import withTransition from "../components/animate/withTransition";
import TitleLayout from "../layouts/TitleLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const portfolioInfo = [
  {
    imgUrl: "/img/Random-Quote-Machine.png",
    title: "Random quote machine",
    detail: "React",
    projectUrl: "https://github.com/JohnApCo/random-quote-machine",
  },
  {
    imgUrl: "/img/Markdown-previewer.png",
    title: "Markdown previewer",
    detail: "React",
    projectUrl: "https://github.com/JohnApCo/markdown-previewer",
  },
  {
    imgUrl: "/img/Drum-Machine.png",
    title: "Drum machine",
    detail: "React",
    projectUrl: "https://github.com/JohnApCo/drum-machine",
  },
  {
    imgUrl: "/img/Javascript-calculator.png",
    title: "Javascript calculator",
    detail: "React",
    projectUrl: "https://github.com/JohnApCo/javascript-calculator",
  },
  {
    imgUrl: "/img/Pomodoro-Timer.png",
    title: "Pomodoro timer",
    detail: "React",
    projectUrl: "https://github.com/JohnApCo/pomodoro-timer",
  },
];

const PortfolioItem = ({
  imgUrl = "",
  title = "Project",
  detail = "Detail",
  projectUrl = "/",
}) => {
  const imgMotion = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textMotion = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.figure
      initial="initial"
      whileHover={"hover"}
      animate="initial"
      className="relative"
    >
      <div className="rounded-xl overflow-hidden">
        <motion.div variants={imgMotion} className="aspect-[3/2]">
          <Image
            src={imgUrl}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="object-cover rounded-xl  "
            alt="Full Project 2"
            decoding="async"
            title=""
          />
          <Link
            href={projectUrl}
            className="absolute top-0 left-0 right-0 bottom-0 z-[3] block"
          ></Link>
        </motion.div>
      </div>

      <h4 className="bg-primary text-white absolute rounded-md top-4 left-4 text-xs py-1 px-3 m-0">
        {title}
      </h4>
      <motion.span
        variants={textMotion}
        className="bg-primary text-white absolute rounded-md bottom-4 left-4 text-xs py-1 px-3 m-0"
      >
        {detail}
      </motion.span>
    </motion.figure>
  );
};
function Portfolio() {
  return (
    <TitleLayout title={"my portfolio"} titleBg={"Works"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {portfolioInfo.map((el, index) => (
          <PortfolioItem
            key={index}
            imgUrl={el.imgUrl}
            title={el.title}
            detail={el.detail}
            projectUrl={el.projectUrl}
          />
        ))}
      </div>
    </TitleLayout>
  );
}

Portfolio = withTransition(Portfolio);
export default Portfolio;
