import PropTypes from "prop-types";
// components
import NavMenu from "../components/NavMenu";
import { AnimatePresence } from "framer-motion";
import SwitchTheme from "../components/SwitchTheme";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <>
      <SwitchTheme />
      <NavMenu />
      <main className="min-h-screen bg-background">{children}</main>
    </>
  );
}
