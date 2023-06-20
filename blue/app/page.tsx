"use client";

import Navbar from "@/components/Navbar/navbar";
import HomepageDesign from "../components/HompageDesign/Homepage";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomepageDesign />

      <Search />
    </>
  );
}
