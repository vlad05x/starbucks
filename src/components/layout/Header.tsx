import React, { useState, memo, useCallback } from "react";
import {
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const LINKS = ["Home", "Select", "Shop"] as const;

export const Header: React.FC = memo(() => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <Box
      component="header"
      className="bg-transparent"
      sx={{
        position: "relative",
        zIndex: 1000,
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1290, mx: "auto", px: { xs: 2, sm: 3 } }}
      >
        <Box
          className="flex items-center justify-between"
          sx={{
            pt: { xs: 3, sm: 6, md: 8, lg: "48px" },
            pb: { xs: 4, sm: 8, md: 12, lg: 0 },
          }}
        >
          <Box
            className="flex items-center"
            sx={{
              gap: { xs: 0, md: 8, lg: 20 },
              flexWrap: "wrap",
            }}
          >
            <Typography
              component="a"
              href="/"
              variant="h4"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "var(--font-family)",
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
                  lg: "2.125rem",
                },
                textDecoration: "none",
                display: "block",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              StarBucks
            </Typography>

            {!isMobile && (
              <Box
                component="nav"
                className="flex gap-12 lg:gap-20 text-[#d9d9d9]"
                sx={{
                  gap: { md: 12, lg: 20 },
                }}
              >
                {LINKS.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href={`#${link.toLowerCase()}`}
                    className="hover:opacity-70 transition-opacity duration-200"
                    sx={{
                      fontSize: { md: "17px", lg: "19px" },
                      color: "#d9d9d9",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>

          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open menu"
              sx={{
                color: "#d9d9d9",
                padding: 1,
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: "2rem",
                  background:
                    "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              />
            </IconButton>
          )}
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "#121618",
            width: { xs: "70vw", sm: 280 },
            minWidth: 240,
          },
        }}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 2 }}>
          {LINKS.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton
                onClick={handleLinkClick}
                sx={{
                  py: 2,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{
                    sx: {
                      color: "#d9d9d9",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
});

Header.displayName = "Header";
