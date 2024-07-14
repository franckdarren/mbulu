import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <p>Header</p>
  );
};

const Section1 = () => {
  return (
    <p>Section 1</p>
  );
};

const Section2 = () => {
  return (
    <p>Section 2</p>
  );
};

const Section3 = () => {
  return (
    <p>Section 3</p>
  );
};

const Section4 = () => {
  return (
    <p>Section 4</p>
  );
};