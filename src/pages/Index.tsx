import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingButtons from "@/components/FloatingButtons";

const Credibility = lazy(() => import("@/components/Credibility"));
const Benefits = lazy(() => import("@/components/Benefits"));
const HighEnd = lazy(() => import("@/components/HighEnd"));
const Apartments = lazy(() => import("@/components/Apartments"));
const About = lazy(() => import("@/components/About"));
const Process = lazy(() => import("@/components/Process"));
const Technologies = lazy(() => import("@/components/Technologies"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Differentials = lazy(() => import("@/components/Differentials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <Credibility />
        <Benefits />
        <HighEnd />
        <Apartments />
        <About />
        <Process />
        <Technologies />
        <Testimonials />
        <Differentials />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
      <FloatingButtons />
    </main>
  );
};

export default Index;
