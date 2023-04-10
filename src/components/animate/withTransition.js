import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  const MyComp = (props) => {
    return (
      <>
        <OriginalComponent />
        <motion.div
          className="fixed w-full h-screen top-0 left-0 bg-divider origin-left z-[999]"
          key="in"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          key="out"
          className="fixed w-full h-screen top-0 left-0 bg-divider origin-right z-[999]"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </>
    );
  };
  MyComp.displayName = "test";
  return MyComp;
};
export default withTransition;
