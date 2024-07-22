import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
    return<main className="dark:bg-black dark:text-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </main>    
}
