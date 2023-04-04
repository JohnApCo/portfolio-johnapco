import PropTypes from "prop-types";
import { motion } from "framer-motion";
// hooks
/* import useResponsive from "../../hooks/useResponsive"; */
//
import { varContainer } from ".";

// ----------------------------------------------------------------------

MotionViewport.propTypes = {
  children: PropTypes.node.isRequired,
  disableAnimatedMobile: PropTypes.bool,
};

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}) {
  /*   const isDesktop = useResponsive("up", "sm");

  if (!isDesktop && disableAnimatedMobile) {
    return <div {...other}>{children}</div>;
  } */

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </motion.div>
  );
}
