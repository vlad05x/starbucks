import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import clsx from "clsx";
import CustomButton from "./Button";

type EventCardProps = {
  title: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export const EventCard: React.FC<EventCardProps> = ({
  title,
  image,
  buttonText = "More",
  onButtonClick,
  height = 260,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ height }}
      className={clsx("relative rounded-2xl overflow-hidden w-full md:w-auto", className)}
    >
      <Card className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: { xs: "100%", sm: "100%", md: "100%" }, height: { xs: "100%", sm: "100%", md: "100%" } }}
          className="w-full h-full object-cover brightness-90"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
          <Typography
            variant="h6"
            component="h3"
            className="text-white mb-3 whitespace-pre-line"
            sx={{ fontWeight: 500, fontSize: { xs: "24px", sm: "28px", md: "32px" } }}
          >
            {title}
          </Typography>

          <CustomButton
            sx={{
              width: { xs: "140px", sm: "160px", md: "167px" },
              height: { xs: "56px", sm: "64px", md: "74px" },
            }}
            onClick={onButtonClick}
          >
            {buttonText}
          </CustomButton>
        </div>
      </Card>
    </motion.div>
  );
};
