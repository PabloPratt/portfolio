import Header from "@/components/Header";
import ReadingShelf from "@/components/ReadingShelf";
import Footer from "@/components/Footer";

export default function ReadingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ReadingShelf />
      </main>
      <Footer />
    </>
  );
}
