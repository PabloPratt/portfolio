import Header from "@/components/Header";
import About from "@/components/About";
import Studio from "@/components/Studio";
import Press from "@/components/Press";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <About />
        <Studio />
        <Press />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
