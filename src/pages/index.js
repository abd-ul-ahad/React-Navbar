import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
  const [sidebarIndex, setSideBarIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Mutire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/mu-fav.ico" />
      </Head>

     
    </>
  );
};
