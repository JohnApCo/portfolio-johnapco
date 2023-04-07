import PropTypes from "prop-types";
// components
import NavMenu from "../components/NavMenu";
import { AnimatePresence } from "framer-motion";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      <main className="min-h-screen bg-background">{children}</main>
    </>
  );
}
