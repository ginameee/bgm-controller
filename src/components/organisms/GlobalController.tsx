import { Box, Button, Input, Stack } from "@mui/material";
import React from "react";
import ControlButtons from "../molecules/ControlButtons";

function GlobalController() {
  return (
    <Box>
      <Stack direction="row">
        <ControlButtons />
        <Button>마이크</Button>
        <Box component="span">
          {" "}
          fade out ratio:
          <Input />
        </Box>
      </Stack>
    </Box>
  );
}

export default GlobalController;
