import { PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface IProps {
  onClick?: () => unknown;
}

function PlayButton({ onClick = () => undefined }: IProps) {
  return (
    <Button size="small" onClick={onClick}>
      <PlayArrow />
    </Button>
  );
}

export default PlayButton;
