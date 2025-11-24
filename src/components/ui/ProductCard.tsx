import React from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomButton from "./Button";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  volume: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  price,
  volume,
}) => {
  return (
    <Card
      elevation={0}
      component="div"
      className="flex flex-col justify-between items-center text-center bg-transparent border border-transparent hover:border-[#2ecc71] transition-all duration-300"
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 320, md: 277 },
        height: { xs: "auto", sm: 650, md: 700 },
        minHeight: { xs: 550, sm: 650, md: 700 },
        borderRadius: { xs: "20px", sm: "25px", md: "29px" },
        backgroundColor: "transparent",
        boxShadow: "none",
        borderWidth: 2,
        borderColor: "#DADADA",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, sm: 4, md: 6 },
      }}
    >
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
        <Box
          sx={{
            position: "absolute",
            width: { xs: 120, sm: 150, md: 180 },
            height: { xs: 120, sm: 150, md: 180 },
            borderRadius: "50%",
            background: "linear-gradient(245deg, #237249 0%, #35c66b 100%)",
            boxShadow: { xs: "0 3px 30px 0 rgba(0, 0, 0, 0.3)", md: "0 5px 52px 0 rgba(0, 0, 0, 0.39)" },
            zIndex: 1,
          }}
        />

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
          className="w-full h-full object-contain"
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          color: "#fff",
          mb: { xs: "8px", md: "12px" },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          maxWidth: { xs: "100%", sm: 180, md: 200 },
          mb: { xs: "8px", md: "12px" },
          minHeight: { xs: "60px", sm: "70px", md: "80px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {subtitle}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1.5, md: 2 },
          mb: { xs: "15px", sm: "20px", md: "25px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          {price}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          }}
        >
          {volume}
        </Typography>
      </Box>

      <CustomButton
        variantType="gradient"
        sx={{
          width: { xs: "100%", sm: "100%", md: 185 },
          height: { xs: 50, sm: 56, md: 54 },
          maxWidth: 280,
          fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.0625rem" },
        }}
      >
        Select a coffee
      </CustomButton>
    </Card>
  );
};

export default ProductCard;
