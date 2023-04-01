import PropTypes from "prop-types";
// components
import NavMenu from "../components/NavMenu";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      <main>{children}</main>
    </>
  );
}
