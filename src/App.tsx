import { memo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import HeroSection from "./components/section/HeroSection";
import { staggerContainer, pageTransition } from "./utils/animations";

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
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <HeroSection />
          <Suspense fallback={null}>
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <BenefitsSection />
              <PromoSection />
              <ProductsSection />
              <EventsSection />
              <Contact />
            </motion.div>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
});

App.displayName = "App";

export default App;
