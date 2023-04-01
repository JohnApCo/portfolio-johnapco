import { forwardRef } from "react";
import PropTypes from "prop-types";
// next
import Head from "next/head";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | JohnApCo`}</title>
      {meta}
    </Head>

    <div ref={ref} {...other}>
      {children}
    </div>
  </>
));

Page.displayName = "Page";

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
