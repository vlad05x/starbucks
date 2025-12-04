import { memo, lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import HeroSection from "./components/section/HeroSection";

const BenefitsSection = lazy(() =>
  import("./components/section/BenefitsSection").then((module) => ({
    default: module.BenefitsSection,
  }))
);
const PromoSection = lazy(() => import("./components/section/PromoSection"));
const ProductsSection = lazy(() =>
  import("./components/section/ProductsSection")
);
const EventsSection = lazy(() => import("./components/section/EventsSection"));
const Contact = lazy(() => import("./components/section/Contact"));
const Footer = lazy(() =>
  import("./components/layout/Footer").then((module) => ({
    default: module.Footer,
  }))
);

const App = memo(() => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <>
            <BenefitsSection />
            <PromoSection />
            <ProductsSection />
            <EventsSection />
            <Contact />
          </>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
});

App.displayName = "App";

export default App;
