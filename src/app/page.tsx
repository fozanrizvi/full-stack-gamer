import { About } from "@/components/About";
import { ContentCards } from "@/components/ContentCards";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Schedule } from "@/components/Schedule";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="font-pixel sr-only border-[3px] border-ink bg-mint px-4 py-3 text-xs text-ink focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ContentCards />
        <Schedule />
        <About />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
