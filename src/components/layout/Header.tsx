import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const links = ["Home", "Select", "Shop"];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box className="w-full bg-bg fixed top-0 left-0 z-50">
      <Container
        maxWidth="lg"
        className="flex items-center justify-between py-4"
      >
        {/* Заголовок */}
        <h1
          className="font-montserrat font-extrabold text-[37px] leading-[109%] tracking-[-0.03em]"
          style={{
            background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          StarBucks
        </h1>

        {/* Десктопное меню */}
        <Box className="hidden md:flex gap-8 text-gray-200 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-green-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </Box>

        {/* Бургер меню */}
        <IconButton
          className="block lg:hidden text-gray-200"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer мобильное меню */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List className="w-64 bg-bg h-full">
            {links.map((link) => (
              <ListItemButton key={link} onClick={() => setOpen(false)}>
                <ListItemText
                  primary={link}
                  className="text-green-400 font-bold text-lg"
                />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Container>
    </Box>
  );
};
