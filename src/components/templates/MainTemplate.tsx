import { Box, Stack } from "@mui/material";
import React from "react";

interface IProps {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
}

const styles = {
  header: {
    position: "fixed",
    width: "100vw",
    height: "80px",
  },
  get main() {
    return {
      paddingTop: this.header.height,
      height: `calc(100vh - ${this.header.height})`,
    };
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
  },
};

function MainTemplate({ header, main, footer }: IProps) {
  return (
    <Box>
      {header && (
        <Box component="header" sx={styles.header}>
          {header}
        </Box>
      )}
      {main && (
        <Box component="main" sx={styles.main}>
          <Stack height="100%">{main}</Stack>
        </Box>
      )}
      {footer && (
        <Box component="footer" sx={styles.footer}>
          {footer}
        </Box>
      )}
    </Box>
  );
}

export default MainTemplate;
