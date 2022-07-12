import { Pause } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

interface IProps {
  onClick?: () => unknown;
}

function PauseButton({ onClick = () => undefined }: IProps) {
  return (
    <Button size="small" onClick={onClick}>
      <Pause />
    </Button>
  );
}

export default PauseButton;
