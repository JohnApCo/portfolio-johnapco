import Head from "next/head";
/* import Image from "next/image"; */
import { Inter } from "next/font/google";
import Page from "../components/Page";
import Image from "next/image";
/* import styles from "@/styles/Home.module.css"; */
import avatar from "../../public/img/john_apco_v3.png";
import Button from "../components/Button";
import Layout from "../layouts";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import withTransition from "../components/animate/withTransition";

/* const inter = Inter({ subsets: ["latin"] }); */

function Home() {
  return (
    <>
      <Page
        title="Home"
        className="text-text flex items-center min-h-full px-4"
      >
        <div className="hidden lg:block bg-primary fixed w-full h-[200%] -rotate-[15deg] -left-[83%] -top-2/4"></div>
        <div className="bg-background w-full h-screen flex flex-row items-center justify-center">
          <div className="overflow-hidden hidden lg:block bg-slate-100 w-2/6 h-[calc(100vh-80px)] rounded-3xl fixed left-10 top-10 z-30 shadow-[0_0_7px_rgba(0,0,0,0.3)]">
            <Image
              src={avatar}
              alt="avatar johnapco desktop"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="object-top"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:ml-[33.3%] text-center lg:text-left">
            <div className="max-w-2xl lg:max-w-lg xl:max-w-xl m-auto ">
              <Image
                src={avatar}
                alt="avatar johnapco"
                style={{ objectFit: "cover" }}
                quality={100}
                className="clock lg:hidden rounded-full w-64 aspect-square m-auto mb-5 bg-slate-100 object-[0%_20%]"
              />
              <h1 className="font-extrabold my-0 uppercase leading-tight text-primary relative xl:before:block xl:pl-16 xl:before:content-[''] xl:before:absolute xl:before:w-10 xl:before:h-1 xl:before:top-8 xl:before:left-0 xl:before:bg-primary">
                I&apos;m John ApCo.
                <br />
                <span className="inline-block text-text border-r-4 border-primary w-0 overflow-hidden whitespace-nowrap animate-typing">
                  Web Developer
                </span>
              </h1>
              <p className="mt-2 mb-8 leading-loose ">
                I&apos;m a Peruvian based web designer & front‑end developer
                focused on crafting clean & user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              <Link href="/about">
                <Button href="/about" icon={<FaArrowRight />}>
                  More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}

Home = withTransition(Home);
export default Home;
