import "@/src/styles/globals.css";
import Head from "next/head";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import withTransition from "../components/animate/withTransition";
import Layout from "../layouts";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}
