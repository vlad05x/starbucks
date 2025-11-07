import React, { memo, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "@/theme";
import ProductCard from "../ui/ProductCard";
import { products } from "@/data/products";

const ProductsSection: React.FC = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector("div") as HTMLElement;
      const cardWidth = firstCard?.clientWidth || 277;
      const gap = window.innerWidth < 600 ? 16 : window.innerWidth < 960 ? 24 : 54;
      const scrollAmount = cardWidth + gap;
      const amount = direction === "right" ? scrollAmount : -scrollAmount;

      container.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  const ScrollButton: React.FC<{
    direction: "left" | "right";
    onClick: () => void;
  }> = ({ direction, onClick }) => {
    const isLeft = direction === "left";
    const arrowPath = isLeft
      ? "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
      : "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z";

    return (
      <Box
        onClick={onClick}
        sx={{
          width: 84,
          height: 84,
          borderRadius: "29px",
          backgroundColor: "transparent",
          flexShrink: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid transparent",
          transition: "all 0.3s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "29px",
            padding: "1px",
            background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            transition: "all 0.3s ease",
          },
          "&:hover": {
            transform: "scale(1.05)",
            "&::before": {
              background: "linear-gradient(223deg, #35c66b 0%, #237249 100%)",
            },
            "& svg": {
              transform: isLeft ? "translateX(-3px)" : "translateX(3px)",
            },
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "relative",
            zIndex: 1,
            transition: "transform 0.3s ease",
          }}
        >
          <defs>
            <linearGradient
              id={`arrowGradient-${direction}`}
              x1={isLeft ? "0%" : "100%"}
              y1="0%"
              x2={isLeft ? "100%" : "0%"}
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#237249" />
              <stop offset="100%" stopColor="#35c66b" />
            </linearGradient>
          </defs>
          <path d={arrowPath} fill={`url(#arrowGradient-${direction})`} />
        </svg>
      </Box>
    );
  };

  return (
    <section
      className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-10 md:py-16 lg:py-20"
      style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1290,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        <Box
          className="flex flex-col md:flex-row md:gap-[72px]"
          sx={{
            justifyContent: "flex-start",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              width: { xs: "100%", sm: "100%", md: 543 },
              lineHeight: 1.2,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
              position: "relative",
              zIndex: 10,
              mb: { xs: 2, md: 0 },
            }}
          >
            New Our
            <br />
            <Box
              component="span"
              sx={{
                ...theme.typography.h1Gradient,
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "5rem",
                },
                lineHeight: 1.2,
              }}
            >
              Products
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
              maxWidth: { xs: "100%", md: "444px" },
              mt: { xs: 2, md: 0 },
            }}
          >
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount! Starbucks coffee and
            don't forget about the discount!
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            mt: "63px",
            width: "100%",
          }}
        >
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
            <ScrollButton
              direction="left"
              onClick={() => handleScroll("left")}
            />
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
              {products.map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    flexShrink: 0,
                    width: { xs: "calc(100vw - 64px)", sm: "320px", md: "277px" },
                    minWidth: { xs: "calc(100vw - 64px)", sm: "320px", md: "277px" },
                    maxWidth: { xs: "calc(100vw - 64px)", sm: "320px", md: "277px" },
                    scrollSnapAlign: { xs: "start", md: "none" },
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    "&:hover": {
                      transform: { xs: "translateY(-4px) scale(1.01)", md: "translateY(-8px) scale(1.02)" },
                      "& > *": {
                        transition: "all 0.3s ease",
                      },
                    },
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
            <ScrollButton
              direction="right"
              onClick={() => handleScroll("right")}
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
});

export default ProductsSection;
