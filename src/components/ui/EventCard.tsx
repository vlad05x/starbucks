import { memo, useCallback } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import clsx from "clsx";
import CustomButton from "./Button";

export interface EventCardProps {
  title: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const EventCardComponent = ({
  title,
  image,
  buttonText = "More",
  onButtonClick,
  width = "100%",
  height = 260,
  className,
}: EventCardProps) => {
  const handleButtonClick = useCallback(() => {
    onButtonClick?.();
  }, [onButtonClick]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ height, width }}
      className={clsx("relative rounded-2xl overflow-hidden", className)}
    >
      <Card
        className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
        sx={{ height: "100%", width: "100%" }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: "100%", height: "100%" }}
          className="object-cover brightness-90"
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
            onClick={handleButtonClick}
          >
            {buttonText}
          </CustomButton>
        </div>
      </Card>
    </motion.div>
  );
};

export const EventCard = memo(EventCardComponent);

EventCard.displayName = "EventCard";
