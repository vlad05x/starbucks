import React, { memo } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import theme from "@/theme";
import { EventCard } from "@/components/ui/EventCard";
import { events } from "@/data/events";
import { useScrollAnimation } from "@/animations/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
} from "@/animations/motionConfig";

const EventsSection: React.FC = memo(() => {
  // Trigger animations when section enters viewport
  const { ref, once } = useScrollAnimation();

  return (
    <section
      className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-10 "
      style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
      ref={ref}
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
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:gap-[72px]"
          sx={{
            justifyContent: { xs: "flex-start", md: "flex-end" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              textAlign: { xs: "left", md: "right" },
              gap: { xs: 2, md: 0 },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "444px" },
                mt: { xs: 2, md: 0 },
                textAlign: { xs: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              Only in 2021 we have made more than 100,000 orders for you, your
              loved ones, all of you, and in 2022 we are ready to destroy the
              market
            </Typography>
            <Typography
              variant="h1"
              sx={{
                width: { xs: "100%", sm: "100%", md: 543 },
                lineHeight: 1.2,
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
                position: "relative",
                zIndex: 10,
                mb: { xs: 2, md: 0 },
                textAlign: { xs: "left", md: "right" },
                order: { xs: 1, md: 2 },
              }}
            >
              Our New
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
                Events
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full mt-[54px]"
          sx={{ gap: "23px" }}
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
                width={event.width}
                height={event.height}
                buttonText="More"
                onButtonClick={() => console.log(`Clicked ${event.title}`)}
              />
            </motion.div>
          ))}
        </Box>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={once ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full mt-[23px]"
          sx={{ gap: "23px"} }
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
                width={event.width}
                height={event.height}
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

export default EventsSection;
