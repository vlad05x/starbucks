import React, { memo, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ui/ProductCard";
import { GlowCircle } from "../ui/GlowCircle";
import { products } from "@/data/products";
import { Section } from "@components/ui/Section";
import { ScrollButton } from "@/components/ui/ScrollButton";
import type { ScrollDirection } from "@/components/ui/ScrollButton";
import {
  bodyTextSx,
  gradientHeadlineTextSx,
  sectionHeadingSx,
} from "@/constants/typography";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { fadeIn } from "@/utils/animations";

const ProductsSection: React.FC = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleScroll = useCallback((direction: ScrollDirection) => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.clientWidth ?? 277;
    const gap =
      typeof window === "undefined"
        ? 24
        : window.innerWidth < 600
        ? 16
        : window.innerWidth < 960
        ? 24
        : 54;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const scrollLeft = useCallback(() => handleScroll("left"), [handleScroll]);
  const scrollRight = useCallback(() => handleScroll("right"), [handleScroll]);

  return (
    <motion.div
      ref={sectionRef}
      variants={fadeIn}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Section className="py-8 sm:py-10 md:py-16 lg:py-20">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: "72px" },
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            ...sectionHeadingSx,
            mb: { xs: 2, md: 0 },
            position: "relative",
          }}
        >
          New Our
          <br />
          <Box component="span" sx={{ ...gradientHeadlineTextSx }}>
            Products
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: { md: 50 },
              left: { md: 80 },
              zIndex: 0,
            }}
          >
            <GlowCircle
              size={150}
              blur={140}
              gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
            />
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            ...bodyTextSx,
            maxWidth: { xs: "100%", md: "444px" },
            mt: { xs: 2, md: 0 },
          }}
        >
          Have time to buy the most harmonious drinks in the new Starbucks coffee
          and don't forget about the discount! Starbucks coffee and don't forget
          about the discount!
        </Typography>
      </Box>

      <Box sx={{ position: "relative", mt: "63px", width: "100%" }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            left: { md: -100 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <ScrollButton direction="left" onClick={scrollLeft} />
        </Box>

        <Box
          sx={{
            width: "100%",
            overflow: "visible",
            position: "relative",
            maxWidth: { xs: "100%", md: "1270px" },
            mx: "auto",
            py: 2,
          }}
        >
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 2, sm: 3, md: "54px" },
              overflowX: "auto",
              overflowY: "visible",
              scrollBehavior: "smooth",
              width: "100%",
              scrollSnapType: { xs: "x mandatory", md: "none" },
              py: { xs: 1, md: 2 },
              px: { xs: 2, md: 0 },
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((product) => (
              <Box
                key={product.title}
                sx={{
                  flexShrink: 0,
                  width: {
                    xs: "calc(100vw - 64px)",
                    sm: "320px",
                    md: "277px",
                  },
                  minWidth: {
                    xs: "calc(100vw - 64px)",
                    sm: "320px",
                    md: "277px",
                  },
                  scrollSnapAlign: { xs: "start", md: "none" },
                }}
              >
                <ProductCard {...product} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: { md: -100 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <ScrollButton direction="right" onClick={scrollRight} />
        </Box>
      </Box>
    </Section>
    </motion.div>
  );
});

export default ProductsSection;
