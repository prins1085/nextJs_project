import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Testing Website" />
        <meta name="keywords" content="HTML, TailwindCSS, JavaScript, Next Js" />
        <meta name="author" content="Prins Harkhani" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <div>Hello World!</div>
    </>
  );
}
