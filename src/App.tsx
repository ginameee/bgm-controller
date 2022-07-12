import React from "react";
import Header from "./components/organisms/Header";
import MainTemplate from "./components/templates/MainTemplate";
import VideoList from "./components/organisms/VideoList";
import GlobalController from "./components/organisms/GlobalController";
import { Box, Divider } from "@mui/material";

function App() {
  return (
    <MainTemplate
      header={<Header />}
      main={<VideoList />}
      footer={
        <Box>
          <Divider />
          <GlobalController />
        </Box>
      }
    />
  );
}

export default App;
