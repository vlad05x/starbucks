import { memo } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomButton from "./Button";
import type { Product } from "@/data/products";

export type ProductCardProps = Product;

const ProductCardComponent = ({
  image,
  title,
  subtitle,
  price,
  volume,
}: ProductCardProps) => {
  return (
    <Card
      elevation={0}
      component="div"
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 320, md: 277 },
        minHeight: { xs: 550, sm: 650, md: 700 },
        borderRadius: { xs: "20px", sm: "25px", md: "29px" },
        backgroundColor: "transparent",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#DADADA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 3, sm: 4, md: 6 },
        transition: "border-color 0.3s ease, transform 0.3s ease",
        "&:hover": {
          borderColor: "#2ecc71",
          transform: { xs: "translateY(-4px)", md: "translateY(-8px)" },
        },
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
            boxShadow: {
              xs: "0 3px 30px 0 rgba(0, 0, 0, 0.3)",
              md: "0 5px 52px 0 rgba(0, 0, 0, 0.39)",
            },
          }}
        />

        <Box
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "rotate(-6deg)",
            filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.4))",
            position: "relative",
            zIndex: 1,
          }}
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

const ProductCard = memo(ProductCardComponent);

ProductCard.displayName = "ProductCard";

export default ProductCard;
