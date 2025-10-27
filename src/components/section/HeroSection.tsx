import theme from "@/theme";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "@components/ui/Button";
import StatsBlock from "@components/ui/StatsBlock";
import CupCoffee from "@/assets/images/CupCoffeMain.svg";
import { GlowCircle } from "@components/ui/GlowCircle";
import { StarBadge } from "@components/ui/StarBadge";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20">
      <Container maxWidth={false} sx={{ maxWidth: 1290, mx: "auto", px: 2 }}>
        <Box className="flex flex-col md:flex-row items-center gap-[155px]">
          <Box className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
            <GlowCircle
              size={400}
              blur={150}
              gradient="rgba(255,255,255,0.04)"
              className="-top-20 -left-16 z-0"
            />
            <GlowCircle
              size={350}
              blur={175}
              gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
              className="-bottom-10 -right-12 z-0"
            />

            <Box
              component="img"
              src={CupCoffee}
              alt="Hero Coffee"
              className="animate-floating hover:rotate-25 hover:scale-105 transition-transform duration-700 ease-in-out "
              sx={{
                width: { xs: 255, sm: "100%" },
                height: { xs: 343, sm: "auto" },
                maxWidth: { md: 500 },
                zIndex: 10,
                position: "relative",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: { xs: 0, sm: 60 },
                right: { xs: 0, sm: 150 },
                zIndex: 20,
                transform: "translate(50%, -50%)",
              }}
            >
              <StarBadge
                label="45%"
                size={220}
                textColor="#fff"
                fontSize="3.4375rem"
                className="rotate-[-15deg] hover:rotate-25 transition-transform duration-500"
              />
            </Box>
          </Box>

          <Box className="md:w-1/2 flex flex-col gap-[54px] order-2 md:order-1">
            <Box className="relative">
              <GlowCircle
                size={180}
                blur={100}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                className="top-5 z-0"
              />

              <Typography
                variant="h1"
                sx={{
                  width: { xs: "100%", sm: 543 },
                  lineHeight: 1.2,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                  position: "relative",
                  zIndex: 10,
                }}
              >
                New Cafe
                <br />
                by{" "}
                <Box
                  component="span"
                  sx={{
                    ...theme.typography.h1Gradient,
                    width: { xs: "100%", sm: 543 },
                    lineHeight: 1.2,
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                  }}
                >
                  StarBucks
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Have time to buy the most harmonious drinks in the new Starbucks
              coffee and don't forget about the discount!
            </Typography>

            <Box className="flex flex-col sm:flex-row gap-4">
              <CustomButton
                variantType="gradient"
                sx={{
                  width: { xs: "100%", sm: 333 },
                  height: { xs: 60, sm: 74 },
                }}
              >
                Select a coffee
              </CustomButton>
              <Box className="relative">
                <CustomButton
                  variantType="dark"
                  sx={{
                    width: { xs: "100%", sm: 167 },
                    height: { xs: 60, sm: 74 },
                    zIndex: 10,
                  }}
                >
                  More
                </CustomButton>

                <GlowCircle
                  size={300}
                  blur={156}
                  className="-top-25 -left-20 z-0"
                />
              </Box>
            </Box>

            <StatsBlock />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
