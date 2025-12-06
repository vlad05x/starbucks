# 🎨 Framer Motion Animations Implementation Guide

## Overview

This project now includes a comprehensive animation system using Framer Motion with:
- ✨ **Scroll-triggered animations** - Elements animate as they enter the viewport
- 🎯 **Hover effects** - Interactive scale, translate, and transform effects
- 🔄 **Staggered animations** - Child elements animate with delayed start times
- 🎪 **Continuous animations** - Floating, pulsing, and rotating effects

## Quick Start

### 1. Basic Scroll Animation

```tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import { fadeInUpVariants } from "@/animations/motionConfig";

const MyComponent = () => {
  const { ref, once } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
    >
      Content fades in from bottom when entering viewport
    </motion.div>
  );
};
```

### 2. Hover Animation

```tsx
import { motion } from "framer-motion";

const HoverButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Hover me!
    </motion.button>
  );
};
```

### 3. Staggered Children

```tsx
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/animations/motionConfig";
import { useScrollAnimation } from "@/animations/useScrollAnimation";

const ItemList = ({ items }) => {
  const { ref, once } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

## Available Animation Variants

### Scroll-Triggered (Entry Animations)

| Variant | Effect | Use Case |
|---------|--------|----------|
| `fadeInUpVariants` | Fade + slide up | Cards, content blocks |
| `fadeInLeftVariants` | Fade + slide left | Left-aligned text |
| `fadeInRightVariants` | Fade + slide right | Images, right content |
| `fadeInScaleVariants` | Fade + scale up | Product cards |
| `slideInLeftVariants` | Slide from left (-100px) | Sidebars, drawers |
| `slideInRightVariants` | Slide from right (+100px) | Right sidebars |

### Container & Stagger

| Variant | Effect | Use Case |
|---------|--------|----------|
| `containerVariants` | Parent config for stagger | Grid/list containers |
| `itemVariants` | Child animation timing | Items in containers |

### Interaction/Hover

| Variant | Effect | Use Case |
|---------|--------|----------|
| `hoverTapVariants` | Scale on hover/tap | Buttons, cards |
| `bounceVariants` | Bouncing motion | Call-to-action elements |

### Continuous Animations

| Variant | Effect | Use Case |
|---------|--------|----------|
| `floatingVariants` | Up-down float | Hero images, badges |
| `rotatingVariants` | 360° rotation | Loading, decorative |
| `pulseVariants` | Scale + opacity pulse | Attention seekers |
| `glowVariants` | Box shadow pulse | Highlights, focus states |

## Implementation Patterns Used

### Pattern 1: Single Element with Scroll Animation

```tsx
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import { fadeInUpVariants } from "@/animations/motionConfig";

const MyCard = () => {
  const { ref, once } = useScrollAnimation();

  return (
    <Box
      component={motion.div}
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
      sx={{ /* MUI styles */ }}
    >
      Card content
    </Box>
  );
};
```

### Pattern 2: Container with Staggered Children

```tsx
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import { containerVariants, itemVariants } from "@/animations/motionConfig";

const MyGrid = ({ items }) => {
  const { ref, once } = useScrollAnimation();

  return (
    <Box
      component={motion.div}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          component={motion.div}
          variants={itemVariants}
        >
          {item.content}
        </Box>
      ))}
    </Box>
  );
};
```

### Pattern 3: Hover Interactions with Spring Physics

```tsx
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/Button";

const InteractiveButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,  // Higher = snappier
        damping: 10,     // Higher = less bouncy
      }}
    >
      <CustomButton>Click me</CustomButton>
    </motion.div>
  );
};
```

## Customization

### Creating Custom Animation Variants

```tsx
// src/animations/customVariants.ts
import type { Variants } from "framer-motion";

export const customFadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
```

### Configuring the Scroll Hook

```tsx
const { ref, once } = useScrollAnimation({
  once: true,              // Animate only once
  amount: 0.5,            // Trigger at 50% visibility
  // margin: "0px 0px -100px 0px"  // Advanced: custom trigger area
});
```

## File Structure

```
src/animations/
├── motionConfig.ts          # Pre-configured variants (centralized)
├── useScrollAnimation.ts    # Custom hook for scroll triggers
├── AnimationShowcase.tsx    # Live component examples
├── index.ts                 # Barrel exports for easy importing
└── README.md               # Detailed documentation

Updated Components:
├── src/components/section/HeroSection.tsx
├── src/components/section/BenefitsSection.tsx
├── src/components/section/PromoSection.tsx
├── src/components/section/EventsSection.tsx
├── src/components/section/Contact.tsx
└── src/components/ui/ProductCard.tsx
```

## Performance Best Practices

1. **Use GPU-accelerated properties only**
   - ✅ Good: `opacity`, `transform`, `scale`
   - ❌ Avoid: `width`, `height`, `left`, `top`

2. **Prefer spring physics for interactive elements**
   ```tsx
   transition={{ type: "spring", stiffness: 400, damping: 10 }}
   ```

3. **Keep animation durations reasonable**
   - Entry animations: 0.5-0.8s
   - Hover interactions: 0.2-0.4s
   - Continuous: 3-5s loops

4. **Use `once: true` for scroll animations**
   - Prevents re-triggering while scrolling
   - Better performance on large pages

5. **Lazy load animation showcase** (if needed)
   ```tsx
   const AnimationShowcase = lazy(() => 
     import('@/animations/AnimationShowcase')
  );
   ```

## Browser Support

All animations use standard CSS transforms and Framer Motion which supports:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ IE 11: Not supported (use polyfills if needed)

## Accessibility

### Respecting Motion Preferences

```tsx
import { useReducedMotion } from "framer-motion";

const ResponsiveAnimation = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1] }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      Content
    </motion.div>
  );
};
```

## Debugging

### Enable Animation Debugging

```tsx
// Add to development environment
import { AnimationControls } from "framer-motion";

if (process.env.NODE_ENV === "development") {
  // Framer Motion DevTools can be enabled here
}
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Animations not triggering | Ensure `ref` is properly attached |
| Animations play multiple times | Add `once: true` to scroll hook |
| Jittery motion | Use spring over linear easing |
| Page feels slow | Profile with DevTools, reduce animation count |

## Examples

### Featured in Current Implementation

1. **Hero Section**
   - Staggered text and buttons appear on scroll
   - Buttons lift on hover with spring animation

2. **Benefits Section**
   - Feature icons bounce on hover
   - Grid items stagger into view

3. **Product Cards**
   - Scale and fade animation on scroll entry
   - Hover effects lift cards

4. **Event Cards**
   - Staggered appearance with scale
   - Smooth hover transitions

5. **Contact Section**
   - Staggered content with scroll triggers

## Further Learning

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Showcase Component](./src/animations/AnimationShowcase.tsx)
- [Motion Config Reference](./src/animations/motionConfig.ts)

## Contributing

When adding new animations:
1. Define variants in `motionConfig.ts`
2. Add documentation in comments
3. Export from `index.ts`
4. Update this guide with new patterns
5. Test on multiple devices

---

**Happy Animating! 🎬✨**
