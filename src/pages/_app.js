import "@/src/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
