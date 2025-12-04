import { memo } from "react";
import clsx from "clsx";
import { Box, Container } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { ContainerProps } from "@mui/material/Container";

export interface SectionProps extends BoxProps<"section"> {
  containerProps?: ContainerProps;
}

const SectionComponent = ({
  children,
  className,
  containerProps,
  sx,
  ...rest
}: SectionProps) => {
  const { sx: containerSx, className: containerClassName, ...restContainer } =
    containerProps ?? {};

  return (
    <Box
      component="section"
      className={clsx("w-full px-4 sm:px-6 lg:px-8 xl:px-20", className)}
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        ...sx,
      }}
      {...rest}
    >
      <Container
        maxWidth={false}
        className={containerClassName}
        sx={{
          maxWidth: 1290,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          width: "100%",
          ...containerSx,
        }}
        {...restContainer}
      >
        {children}
      </Container>
    </Box>
  );
};

export const Section = memo(SectionComponent);

Section.displayName = "Section";
