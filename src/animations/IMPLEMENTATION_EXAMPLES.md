# Real Implementation Examples

## Complete Real-World Examples from the Project

### 1. Hero Section Implementation ✨

**File**: `src/components/section/HeroSection.tsx`

```tsx
// Import statements
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/animations/motionConfig";

const HeroSection: React.FC = memo(() => {
  // Hook for scroll-triggered animation
  const { ref, once } = useScrollAnimation();

  return (
    <section ref={ref}>
      <Container>
        {/* Staggered container for all children */}
        <Box
          component={motion.div}
          className="flex flex-col md:flex-row items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
        >
          {/* Right column - Image with fade-in animation */}
          <Box
            component={motion.div}
            variants={itemVariants}
            className="md:w-1/2 flex justify-center order-1 md:order-2 relative w-full"
          >
            <Box
              component="img"
              src={CupCoffee}
              alt="Starbucks Coffee Cup"
              className="relative z-10 animate-floating hover:rotate-12 hover:scale-105 transition-transform duration-700"
            />
          </Box>

          {/* Left column - Text content with animation */}
          <Box
            component={motion.div}
            variants={itemVariants}
            className="md:w-1/2 flex flex-col order-2 md:order-1 w-full"
          >
            <Typography variant="h1">
              New Cafe <br /> by <span>StarBucks</span>
            </Typography>
            
            {/* Animated buttons with hover effects */}
            <Box
              component={motion.div}
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
            >
              {/* Primary CTA button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CustomButton variantType="gradient">
                  Select a coffee
                </CustomButton>
              </motion.div>

              {/* Secondary button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CustomButton variantType="dark">
                  More
                </CustomButton>
              </motion.div>
            </Box>

            {/* Stats block with animation */}
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{ width: "100%", mt: { xs: 2, md: 0 } }}
            >
              <StatsBlock />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
});
```

**Key Animations**:
- Container stagger: All children fade in and slide up with 0.1s delay between each
- Buttons: Scale up slightly on hover, bounce down on click
- Stats: Fade in last with slight delay

---

### 2. Benefits Section Implementation 🎯

**File**: `src/components/section/BenefitsSection.tsx`

```tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/animations/motionConfig";

// Feature item component with hover animation
const FeatureItem: React.FC<{ feature: FeatureType }> = memo(
  ({ feature }) => (
    <Box
      component={motion.div}
      variants={itemVariants}
      className="flex flex-col items-center text-center"
    >
      {/* Icon with bounce animation on hover */}
      <motion.div
        className="relative w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Box className="absolute bg-gradient rounded-full" />
        <Box component="img" src={feature.icon} alt={feature.iconAlt} />
      </motion.div>

      {/* Title and description fade in */}
      <Typography variant="h5" className="mb-2 mt-3">
        {feature.title}
      </Typography>

      <Typography variant="body1">
        {feature.description}
      </Typography>
    </Box>
  )
);

export const BenefitsSection: React.FC = memo(() => {
  const { ref, once } = useScrollAnimation();

  return (
    <Box
      component="section"
      className="relative flex justify-center items-center"
      ref={ref}
    >
      {/* Card with fade-in animation */}
      <Card
        component={motion.div}
        variants={itemVariants}
        animate={once ? "visible" : "hidden"}
        initial="hidden"
        sx={{
          borderRadius: "46px",
          background: "linear-gradient(...)",
        }}
      >
        {/* Staggered feature items */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </Box>
      </Card>
    </Box>
  );
});
```

**Key Animations**:
- Feature icons bounce up on hover
- Grid items stagger in from bottom
- Card fades and scales when entering viewport

---

### 3. Product Card Implementation 🛍️

**File**: `src/components/ui/ProductCard.tsx`

```tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import { fadeInScaleVariants } from "@/animations/motionConfig";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  price,
  volume,
}) => {
  // Hook triggers animation when card enters viewport
  const { ref, once } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInScaleVariants}
      initial="hidden"
      animate={once ? "visible" : "hidden"}
      style={{ width: "100%" }}
    >
      <Card
        elevation={0}
        className="flex flex-col justify-between items-center text-center bg-transparent border border-transparent hover:border-[#2ecc71] transition-all duration-300"
        sx={{
          width: "100%",
          borderRadius: "29px",
          p: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* Product image with gradient background */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 2, sm: 2.5, md: 3 },
            width: { xs: 140, sm: 170, md: 200 },
            height: { xs: 140, sm: 170, md: 200 },
          }}
        >
          {/* Gradient circle background */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: 120, sm: 150, md: 180 },
              height: { xs: 120, sm: 150, md: 180 },
              borderRadius: "50%",
              background: "linear-gradient(245deg, #237249 0%, #35c66b 100%)",
              boxShadow: "0 5px 52px 0 rgba(0, 0, 0, 0.39)",
              zIndex: 1,
            }}
          />

          {/* Product image */}
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "rotate(-6deg)",
              filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.4))",
              position: "relative",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Product info */}
        <Typography variant="h6" sx={{ fontWeight: 500, mb: "12px" }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ mb: "12px", minHeight: "80px" }}>
          {subtitle}
        </Typography>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: "25px" }}>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 500 }}>
            {price}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
            {volume}
          </Typography>
        </Box>

        {/* CTA Button */}
        <CustomButton variantType="gradient">
          Select a coffee
        </CustomButton>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
```

**Key Animations**:
- Card fades in and scales from 0.9 to 1.0 when entering viewport
- Single variant simplifies implementation
- Perfect for carousel/grid layouts

---

### 4. Event Section Implementation 🎪

**File**: `src/components/section/EventsSection.tsx`

```tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/animations/motionConfig";

const EventsSection: React.FC = memo(() => {
  const { ref, once } = useScrollAnimation();

  return (
    <section ref={ref}>
      <Container>
        {/* Staggered header content */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:gap-[72px]"
        >
          {/* Header text */}
          <Box sx={{ /* layout styles */ }}>
            <Typography variant="h1">
              Our New <br />
              <span>Events</span>
            </Typography>

            <Typography variant="body1">
              Only in 2021 we have made more than 100,000 orders...
            </Typography>
          </Box>
        </Box>

        {/* First event grid (2 columns) */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full mt-[54px]"
        >
          {events.slice(0, 2).map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <EventCard
                title={event.title}
                image={event.image}
                buttonText="More"
                onButtonClick={() => console.log(`Clicked ${event.title}`)}
              />
            </motion.div>
          ))}
        </Box>

        {/* Second event grid (3 columns) */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full mt-[23px]"
        >
          {events.slice(2).map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <EventCard
                title={event.title}
                image={event.image}
                buttonText="More"
                onButtonClick={() => console.log(`Clicked ${event.title}`)}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </section>
  );
});
```

**Key Animations**:
- Header content stagger
- Event cards individually wrapped with hover scale
- Smooth spring physics on hover

---

### 5. Contact Section Implementation 📞

**File**: `src/components/section/Contact.tsx`

```tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/animations/motionConfig";

const Contact: React.FC = memo(() => {
  const { ref, once } = useScrollAnimation();

  return (
    <section ref={ref}>
      <Container>
        {/* Main container with stagger */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left content */}
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "52px",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography variant="h1">
              Our <br /> <span>Contacts</span>
            </Typography>

            <Typography variant="body1">
              Contact text here...
            </Typography>

            {/* Contact info items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <InstagramIcon width={44} height={44} />
                <Typography sx={{ fontSize: "32px" }}>
                  @supercoffee
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <PhoneIcon width={44} height={44} />
                <Typography sx={{ fontSize: "32px" }}>
                  +7-999-999-99-99
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right image */}
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              component="img"
              src={promoImageGreen}
              alt="Promo Green"
              sx={{
                width: "100%",
                maxWidth: "354px",
                height: "521px",
                transform: "scaleX(-1)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
});
```

**Key Animations**:
- Left and right columns both fade in with stagger
- Contact info appears with slight delay
- Image scales and translates on entry

---

## Animation Timing Reference

```tsx
// Standard timing values used throughout
const TIMING = {
  // Scroll animation entry speeds
  SCROLL_ENTER: 0.5,        // 500ms - quick but smooth
  
  // Interactive animations
  HOVER_FAST: 0.2,          // 200ms - instant feedback
  HOVER_MEDIUM: 0.3,        // 300ms - balanced
  
  // Stagger delays
  STAGGER_CHILD: 0.1,       // 100ms between children
  STAGGER_INITIAL: 0.2,     // 200ms before first child
  
  // Continuous animations
  FLOAT_LOOP: 4,            // 4 seconds - gentle bobbing
  ROTATE_LOOP: 20,          // 20 seconds - slow rotation
  PULSE_LOOP: 2,            // 2 seconds - active indicator
};

// Spring physics used
const SPRING_PHYSICS = {
  SNAPPY: { stiffness: 400, damping: 10 },      // Quick, slight bounce
  SMOOTH: { stiffness: 300, damping: 15 },      // Balanced
  SLOW: { stiffness: 200, damping: 20 },        // Sluggish, no bounce
};
```

---

## Performance Checklist

✅ **GPU-Accelerated Properties**
- Uses `transform` and `opacity` only
- Avoid `width`, `height`, `left`, `top` changes

✅ **Scroll Animation Optimization**
- `once: true` prevents re-animation
- Margin config reduces unnecessary triggers

✅ **Event Listener Efficiency**
- IntersectionObserver for scroll detection
- No manual scroll event listeners

✅ **Component Memoization**
- All sections use `React.memo()`
- Prevents unnecessary re-renders

✅ **Browser Performance**
- 60fps animations on modern devices
- Smooth on mobile devices

---

## Next Steps

1. **Extend animations** - Add new variants to `motionConfig.ts`
2. **Create custom animations** - Use provided patterns as templates
3. **Test on devices** - Verify smooth performance on target devices
4. **Gather feedback** - Monitor user experience and adjust timing
5. **Document patterns** - Add new patterns to this guide

For questions or improvements, refer to the main [README](./README.md) in the animations folder.
