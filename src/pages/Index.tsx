
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Hero />
      <Features />
      <Stats />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
