import React, { memo, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Section } from "@components/ui/Section";
import {
  bodyTextSx,
  gradientHeadlineTextSx,
  sectionHeadingSx,
} from "@/constants/typography";
import { EventCard } from "@/components/ui/EventCard";
import { events } from "@/data/events";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { fadeIn } from "@/utils/animations";

const EventsSection: React.FC = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const leadEvents = events.slice(0, 2);
  const secondaryEvents = events.slice(2);

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
          gap: { xs: 2, md: 0 },
          justifyContent: { xs: "flex-start", md: "flex-end" },
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            ...bodyTextSx,
            maxWidth: { xs: "100%", md: "444px" },
            order: { xs: 2, md: 1 },
            mt: { xs: 2, md: 0 },
          }}
        >
          Only in 2021 we have made more than 100,000 orders for you, your loved
          ones, all of you, and in 2022 we are ready to destroy the market
        </Typography>
        <Typography
          variant="h1"
          sx={{
            ...sectionHeadingSx,
            textAlign: { xs: "left", md: "right" },
            order: { xs: 1, md: 2 },
          }}
        >
          Our New
          <br />
          <Box component="span" sx={{ ...gradientHeadlineTextSx }}>
            Events
          </Box>
        </Typography>
      </Box>

      <Box
        className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full"
        sx={{ gap: "23px", mt: "54px" }}
      >
        {leadEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            width={event.width}
            height={event.height}
            buttonText="More"
          />
        ))}
      </Box>
      <Box
        className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full"
        sx={{ gap: "23px", mt: "23px" }}
      >
        {secondaryEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            width={event.width}
            height={event.height}
            buttonText="More"
          />
        ))}
      </Box>
    </Section>
    </motion.div>
  );
});

export default EventsSection;
