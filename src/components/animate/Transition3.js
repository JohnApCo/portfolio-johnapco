import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Transition3 = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.4,
      },
    },
    out: {
      x: "-100%",
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
    in: {
      scale: 0.8,
      y: 100,
      x: "100%",
      transition: {
        duration: 0.4,
      },
    },
    center: {
      x: 0,
      scale: 0.8,
      transformOrigin: "top",
      transition: {
        duration: 0.4,
      },
    },
    scaleUp: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="effect-3">
      <motion.div
        key={asPath}
        variants={variants}
        initial="in"
        animate={["center", "scaleUp"]}
        exit={["scaleDown", "out"]}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition3;
