import { memo } from "react";
import { Header } from "./components/layout/Header";
import HeroSection from "./components/section/HeroSection";
import { BenefitsSection } from "./components/section/BenefitsSection";

const App = memo(() => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
      </main>
    </>
  );
});

App.displayName = "App";

export default App;
