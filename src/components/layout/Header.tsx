import React, { useState } from "react";
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
import { useTheme } from "@mui/material/styles";

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const links = ["Home", "Select", "Shop"];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="header" className="bg-transparent">
      <Container maxWidth={false} sx={{ maxWidth: 1290, mx: "auto", px: 2 }}>
        <Box className="flex items-center justify-between pt-12 pb-20">
          <Box
            className="flex items-center"
            style={{ gap: isMobile ? 0 : 100 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-family)",
              }}
            >
              StarBucks
            </Typography>

            {!isMobile && (
              <Box className="flex gap-20 text-[#d9d9d9] ">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:opacity-70 transition"
                    style={{ fontSize: 19 }}
                  >
                    {link}
                  </a>
                ))}
              </Box>
            )}
          </Box>

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon
                sx={{
                  background:
                    "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </IconButton>
          )}
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className="w-60 bg-[#121618] h-full text-white">
          {links.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
