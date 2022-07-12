import { Add, YouTube } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { useAtom } from "jotai";
import React, { FormEvent } from "react";
import { useState } from "react";
import { urlsAtom } from "../../stores/videos";

function AddForm() {
  const [urls, setUrls] = useAtom(urlsAtom);
  const [url, setUrl] = useState<string>("");

  const handleAddVideo = (e: FormEvent) => {
    e.preventDefault();
    setUrls([...urls, url]);
  };

  const handlePlayVideo = () => {
    window.open(url, "_blank");
  };

  return (
    <Paper
      component="form"
      elevation={3}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
      onSubmit={handleAddVideo}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add Youtube Video URL"
        inputProps={{ "aria-label": "add Youtube video" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handlePlayVideo}
        disabled={!url}
      >
        <YouTube />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="add"
        type="submit"
        disabled={!url}
      >
        <Add />
      </IconButton>
    </Paper>
  );
}

export default AddForm;
