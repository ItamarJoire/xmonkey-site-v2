import { GridBackgroundDemo } from "@/components/aceternity/gridBackgroundDemo";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";

export default function Home() {
  return (
    <>
      <Header />
      
      <GridBackgroundDemo>
        <Hero />
      </GridBackgroundDemo>
    </>
  );
}
