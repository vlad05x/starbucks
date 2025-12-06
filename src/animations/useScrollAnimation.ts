import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook to trigger animations when element enters viewport
 * Returns ref to attach to element and once boolean indicating visibility
 *
 * @param options - Configuration options for intersection observer
 * @returns Object with ref to attach and once/twice flags for animation state
 *
 * @example
 * const { ref, once } = useScrollAnimation();
 * return (
 *   <motion.div
 *     ref={ref}
 *     variants={fadeInUpVariants}
 *     initial="hidden"
 *     animate={once ? "visible" : "hidden"}
 *   >
 *     Content here
 *   </motion.div>
 * );
 */
export const useScrollAnimation = (options = { once: true, amount: 0.3 as const }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once,
    amount: options.amount,
    margin: "0px 0px -100px 0px", // Start animation 100px before element enters viewport
  });

  return { ref, once: isInView };
};
