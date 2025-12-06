# Framer Motion Animations Guide

This guide covers all the smooth, beautiful animations integrated into the Starbucks website using Framer Motion.

## 📁 File Structure

```
src/animations/
├── motionConfig.ts        # Pre-configured animation variants
├── useScrollAnimation.ts   # Custom hook for scroll-triggered animations
├── AnimationShowcase.tsx   # Complete showcase of all animations
└── README.md              # This file
```

## 🎯 Core Animation Variants

### 1. **Scroll-Triggered Animations**

Animations that trigger when elements enter the viewport.

#### `fadeInUpVariants`
- Element fades in while sliding up from bottom
- Duration: 0.6s
- Easing: easeOut
- **Use Case**: Hero sections, cards, content blocks

```tsx
import { fadeInUpVariants } from '@/animations/motionConfig';
import { useScrollAnimation } from '@/animations/useScrollAnimation';

const Component = () => {
  const { ref, once } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
    >
      Content here
    </motion.div>
  );
};
```

#### `fadeInLeftVariants`
- Element fades in while sliding from left
- Duration: 0.6s
- **Use Case**: Left-aligned text content, left sidebars

```tsx
import { fadeInLeftVariants } from '@/animations/motionConfig';

<motion.div
  variants={fadeInLeftVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  Text content
</motion.div>
```

#### `fadeInRightVariants`
- Element fades in while sliding from right
- Duration: 0.6s
- **Use Case**: Images, right-aligned content

```tsx
import { fadeInRightVariants } from '@/animations/motionConfig';

<motion.div
  variants={fadeInRightVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  <img src="..." />
</motion.div>
```

#### `fadeInScaleVariants`
- Element fades in while scaling up from 0.9 to 1
- Duration: 0.5s
- **Use Case**: Product cards, modal appearances

```tsx
import { fadeInScaleVariants } from '@/animations/motionConfig';

<motion.div
  variants={fadeInScaleVariants}
  initial="hidden"
  animate={once ? "visible" : "hidden"}
>
  Card content
</motion.div>
```

### 2. **Container & Staggered Animations**

Animations for parent containers with staggered children animations.

#### `containerVariants`
- Parent animation that enables staggered children
- Stagger delay: 0.1s between each child
- Initial delay: 0.2s
- **Use Case**: Lists, grids of components

```tsx
import { containerVariants, itemVariants } from '@/animations/motionConfig';

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={itemVariants}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### `itemVariants`
- Individual item animation within container
- Opacity and y-position change
- Duration: 0.5s
- **Use Case**: Must be used as child of containerVariants

### 3. **Interactive/Hover Animations**

Animations triggered by user interaction.

#### `hoverTapVariants`
- Scale up on hover (1.05x)
- Scale down on tap (0.98x)
- Smooth spring transitions
- **Use Case**: Buttons, interactive cards

```tsx
import { hoverTapVariants } from '@/animations/motionConfig';

<motion.button
  variants={hoverTapVariants}
  initial="initial"
  whileHover="whileHover"
  whileTap="whileTap"
>
  Click me
</motion.button>
```

#### `bounceVariants`
- Bouncing up animation on hover
- Y-axis movement: -8px
- Duration: 0.6s
- **Use Case**: Special attention elements, CTAs

```tsx
import { bounceVariants } from '@/animations/motionConfig';

<motion.div
  variants={bounceVariants}
  initial="initial"
  whileHover="whileHover"
>
  Bouncing content
</motion.div>
```

### 4. **Continuous Animations**

Animations that loop indefinitely.

#### `floatingVariants`
- Smooth up-down motion
- Duration: 4s
- Infinite loop
- **Use Case**: Hero images, floating badges

```tsx
import { floatingVariants } from '@/animations/motionConfig';

<motion.div
  variants={floatingVariants}
  animate="animate"
>
  <img src="coffee-cup.svg" />
</motion.div>
```

#### `rotatingVariants`
- Continuous 360° rotation
- Duration: 20s
- Linear easing
- **Use Case**: Loading indicators, decorative elements

```tsx
import { rotatingVariants } from '@/animations/motionConfig';

<motion.div
  variants={rotatingVariants}
  animate="animate"
>
  ↻ Rotating
</motion.div>
```

#### `pulseVariants`
- Scale and opacity pulsing
- Duration: 2s
- Infinite loop
- **Use Case**: Active indicators, attention seekers

```tsx
import { pulseVariants } from '@/animations/motionConfig';

<motion.div
  variants={pulseVariants}
  animate="animate"
>
  Pulsing indicator
</motion.div>
```

#### `glowVariants`
- Box shadow pulsing effect
- Duration: 3s
- **Use Case**: Special highlights, active states

```tsx
import { glowVariants } from '@/animations/motionConfig';

<motion.div
  variants={glowVariants}
  animate="animate"
>
  Glowing element
</motion.div>
```

### 5. **Slide Animations**

#### `slideInLeftVariants`
- Slides in from left (-100px to 0)
- Fade and translate combined
- Duration: 0.7s
- **Use Case**: Side navigation, drawer content

#### `slideInRightVariants`
- Slides in from right (100px to 0)
- Fade and translate combined
- Duration: 0.7s
- **Use Case**: Sidebars, right-aligned drawers

```tsx
import { slideInLeftVariants, slideInRightVariants } from '@/animations/motionConfig';

<motion.div
  variants={slideInLeftVariants}
  initial="hidden"
  animate={isOpen ? "visible" : "hidden"}
>
  Left sidebar
</motion.div>
```

## 🎣 Custom Hook: `useScrollAnimation`

This hook automatically triggers animations when elements enter the viewport.

### Usage

```tsx
import { useScrollAnimation } from '@/animations/useScrollAnimation';
import { fadeInUpVariants } from '@/animations/motionConfig';

const MyComponent = () => {
  // Options: once=true (animate once), amount=0.3 (trigger at 30% visibility)
  const { ref, once } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
    >
      This animates when it enters the viewport
    </motion.div>
  );
};
```

### Hook Configuration

- **once**: Boolean - Animate only once (true) or every time element enters/leaves viewport (false)
- **amount**: Number (0-1) - Percentage of element that must be visible to trigger animation (default: 0.3)
- **margin**: String - Additional margin around viewport for early/late triggering

## 🎨 Animation Patterns Used in Components

### Hero Section (`HeroSection.tsx`)
- Container with staggered children
- Buttons with hover scale + translate
- Text with fade-in from left
- Images with fade-in from right

### Benefits Section (`BenefitsSection.tsx`)
- Card appears with fade-in scale
- Feature icons bounce on hover
- Grid items stagger on scroll

### Products Section (`ProductsSection.tsx`)
- Cards fade-in and scale on scroll
- Hover effect lifts cards up
- Smooth scroll navigation

### Events Section (`EventsSection.tsx`)
- Event cards with staggered appearance
- Scale effect on hover
- Grid layout with contained animations

## 🎛️ Custom Animations

To create custom animations, define new variants:

```tsx
import { Variants } from 'framer-motion';

export const customVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
```

## ⚡ Performance Optimization

1. **Use `once: true` for scroll animations** - Prevents re-animation
2. **Throttle expensive animations** - Use `duration` wisely
3. **Prefer `opacity` and `transform`** - GPU-accelerated properties
4. **Avoid animating layout** - Use `layoutId` sparingly

## 🔧 Spring Physics

Many animations use spring transitions for natural motion:

```tsx
transition={{
  type: 'spring',
  stiffness: 400,   // Higher = snappier (0-1000)
  damping: 10,      // Higher = less bouncy (0-100)
  mass: 1,          // Affects acceleration
}}
```

## 📱 Responsive Considerations

Animations are disabled on very small screens to save performance:

```tsx
// In motion components, use conditional rendering
whileHover={!isMobile ? { scale: 1.05 } : { scale: 1 }}
```

## 🎯 Best Practices

1. **Keep animations under 600ms** - Faster feels more responsive
2. **Use easeOut for entrance animations** - easeIn for exit
3. **Chain animations with stagger** - Not all at once
4. **Test on real devices** - Especially for scroll animations
5. **Provide fallbacks** - For users with `prefers-reduced-motion`

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Showcase Component](./AnimationShowcase.tsx) - Live examples
- [Motion Config](./motionConfig.ts) - All predefined animations

## 🚀 Quick Start

Import and use in any component:

```tsx
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/animations/motionConfig';
import { useScrollAnimation } from '@/animations/useScrollAnimation';

export const MyComponent = () => {
  const { ref, once } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
    >
      ✨ Animated content ✨
    </motion.div>
  );
};
```

That's it! Your component will now animate beautifully as users scroll through the page.
