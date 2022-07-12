import { Mic, Stop } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface IProps {
  onClick?: () => unknown;
}

function StopButton({ onClick = () => undefined }: IProps) {
  return (
    <Button size="small" onClick={onClick}>
      <Stop />
    </Button>
  );
}

export default StopButton;
