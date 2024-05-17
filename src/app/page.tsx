"use client"

import { GridBackgroundDemo } from "@/components/aceternity/gridBackgroundDemo";
import { About } from "@/components/ui/about";
import { Assessments } from "@/components/ui/assessments";
import { Brands } from "@/components/ui/brands";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { HowWeWork } from "@/components/ui/howWeWork";
import { Presentation } from "@/components/ui/presentation";
import { Range } from "@/components/ui/range";
import { Services } from "@/components/ui/services";
import { VideoPlay } from "@/components/ui/videoPlay";
import { WhyMarketing } from "@/components/ui/whyMarketing";

import { useAppContext } from "@/hooks/useVideo"

export default function Home() {
  const { isOpen } = useAppContext()

  return (
   <>
      <Header />
      
      <GridBackgroundDemo>
        <Hero />
      </GridBackgroundDemo>

      <Presentation />

      <WhyMarketing />
      <Services />
      
      <HowWeWork />
      <Range />
      <Assessments />
      {/* <Brands /> */}

      <About />
      <Footer />

      { isOpen && <VideoPlay />}
  </>
  );
}
