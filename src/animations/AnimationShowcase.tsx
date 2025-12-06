/**
 * Animation Showcase Component
 * This component demonstrates various Framer Motion animations used throughout the application.
 * Includes scroll-triggered animations, hover effects, and interactive transitions.
 */

import React from "react";
import { motion } from "framer-motion";
import { Typography, Container } from "@mui/material";
import { useScrollAnimation } from "./useScrollAnimation";
import {
  fadeInUpVariants,
  containerVariants,
  itemVariants,
  floatingVariants,
  pulseVariants,
  glowVariants,
  bounceVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "./motionConfig";

/**
 * Example 1: Scroll-triggered fade-in with slide from bottom
 */
const ScrollFadeInExample: React.FC = () => {
  const { ref, once } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
      className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white"
    >
      <h3 className="text-2xl font-bold mb-2">Fade-in from Bottom</h3>
      <p>This element fades in and slides up when it enters the viewport</p>
    </motion.div>
  );
};

/**
 * Example 2: Hover animation with scale and translate
 */
const HoverScaleExample: React.FC = () => {
  return (
    <motion.div
      className="p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className="text-2xl font-bold mb-2">Hover Scale Effect</h3>
      <p>Hover over this card to see scale and translate animation</p>
    </motion.div>
  );
};

/**
 * Example 3: Staggered container with child animations
 */
const StaggeredContainerExample: React.FC = () => {
  const { ref, once } = useScrollAnimation();

  const items = [
    "First item with slide animation",
    "Second item with fade effect",
    "Third item with scale transition",
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="p-4 bg-indigo-500 text-white rounded-lg"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Example 4: Floating animation (continuous loop)
 */
const FloatingExample: React.FC = () => {
  return (
    <motion.div
      variants={floatingVariants}
      animate="animate"
      className="p-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-white text-center"
    >
      <h3 className="text-2xl font-bold mb-2">Floating Animation</h3>
      <p>This element continuously floats up and down</p>
    </motion.div>
  );
};

/**
 * Example 5: Pulsing animation for attention
 */
const PulseExample: React.FC = () => {
  return (
    <motion.div
      variants={pulseVariants}
      animate="animate"
      className="p-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white text-center"
    >
      <h3 className="text-2xl font-bold mb-2">Pulsing Effect</h3>
      <p>This element scales and fades rhythmically</p>
    </motion.div>
  );
};

/**
 * Example 6: Glow effect animation
 */
const GlowExample: React.FC = () => {
  return (
    <motion.div
      variants={glowVariants}
      animate="animate"
      className="p-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-center"
    >
      <h3 className="text-2xl font-bold mb-2">Glow Effect</h3>
      <p>This element has a pulsing glow around it</p>
    </motion.div>
  );
};

/**
 * Example 7: Bounce animation on hover
 */
const BounceExample: React.FC = () => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="initial"
      whileHover="whileHover"
      className="p-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white text-center cursor-pointer"
    >
      <h3 className="text-2xl font-bold mb-2">Bounce Effect</h3>
      <p>Hover to trigger bounce animation</p>
    </motion.div>
  );
};

/**
 * Example 8: Rotating animation
 */
const RotatingExample: React.FC = () => {
  return (
    <motion.div
      className="w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <span className="text-sm font-bold text-center">Rotating</span>
    </motion.div>
  );
};

/**
 * Example 9: Slide animations
 */
const SlideAnimationsExample: React.FC = () => {
  const { ref, once } = useScrollAnimation();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        variants={slideInLeftVariants}
        initial="hidden"
        animate={once ? "visible" : "hidden"}
        className="p-8 bg-blue-500 text-white rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-2">Slide from Left</h3>
        <p>This element slides in from the left side</p>
      </motion.div>

      <motion.div
        variants={slideInRightVariants}
        initial="hidden"
        animate={once ? "visible" : "hidden"}
        className="p-8 bg-green-500 text-white rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-2">Slide from Right</h3>
        <p>This element slides in from the right side</p>
      </motion.div>
    </div>
  );
};

/**
 * Example 10: Tap animation with scale feedback
 */
const TapFeedbackExample: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg cursor-pointer"
    >
      Click Me - Tap Animation
    </motion.button>
  );
};

/**
 * Main Showcase Component
 */
export const AnimationShowcase: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" className="text-center mb-12 font-bold">
        Framer Motion Animation Showcase
      </Typography>

      <div className="space-y-12">
        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            1. Scroll-Triggered Animations
          </Typography>
          <ScrollFadeInExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            2. Hover Animations
          </Typography>
          <HoverScaleExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            3. Staggered Container with Children
          </Typography>
          <StaggeredContainerExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            4. Continuous Floating Animation
          </Typography>
          <FloatingExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            5. Pulsing Animation
          </Typography>
          <PulseExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            6. Glow Effect
          </Typography>
          <GlowExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            7. Bounce Animation
          </Typography>
          <BounceExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            8. Rotating Animation
          </Typography>
          <RotatingExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            9. Slide-In Animations
          </Typography>
          <SlideAnimationsExample />
        </section>

        <section>
          <Typography variant="h5" className="mb-4 font-bold">
            10. Tap Feedback Animation
          </Typography>
          <TapFeedbackExample />
        </section>
      </div>
    </Container>
  );
};

export default AnimationShowcase;
