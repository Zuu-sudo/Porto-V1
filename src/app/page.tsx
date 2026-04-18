import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./lib/JsonLd";

export const metadata: Metadata = {
  title: "Ananta Naufal Imamul Hikam | Junior Web Developer",
  description:
    "Halo! Perkenalkan saya Ananta Naufal Imamul Hikam, mahasiswa Informatika Universitas Negeri Surabaya. Junior Web Developer yang passionate membangun aplikasi web modern.",
  openGraph: {
    title: "Ananta Naufal Imamul Hikam — Portfolio",
    description:
      "Perkenalkan, saya Ananta Naufal — Junior Web Developer dari Universitas Negeri Surabaya. Mari lihat karya-karya saya.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--background)" }}>
        <Hero />
        <About />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
