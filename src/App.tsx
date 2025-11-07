import { memo } from "react";
import { Header } from "./components/layout/Header";
import HeroSection from "./components/section/HeroSection";
import { BenefitsSection } from "./components/section/BenefitsSection";
import PromoSection from "./components/section/PromoSection";
import ProductsSection from "./components/section/ProductsSection";

const App = memo(() => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PromoSection />
        <ProductsSection />
      </main>
    </>
  );
});

App.displayName = "App";

export default App;
