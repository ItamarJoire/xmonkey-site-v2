import { GridBackgroundDemo } from "@/components/aceternity/gridBackgroundDemo";
import { Assessments } from "@/components/ui/assessments";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { HowWeWork } from "@/components/ui/howWeWork";

export default function Home() {
  return (
    <>
      <Header />
      
      <GridBackgroundDemo>
        <Hero />
      </GridBackgroundDemo>

      <HowWeWork />
      <Assessments />
      <Footer />
    </>
  );
}
