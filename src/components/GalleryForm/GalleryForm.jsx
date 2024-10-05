import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import './GalleryForm.css'

export default function GalleryForm({ getGalleryItems }) {
  let [URL, setURL] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/gallery", {
        URL: URL,
        title: title,
        description: description,
      })
      .then((response) => {
        event.target.reset();
        getGalleryItems();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <div className="catForm">
      <h2>Add a Cat!</h2>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        autoComplete="off"
        onSubmit={handleSubmit}
        alignItems="center"
        display="flex"
      >
        <TextField
          required
          id="imageURL"
          label="Required"
          helperText="Image URL"
          variant="filled"
          onChange={(event) => setURL(event.target.value)}
        />
        <TextField
          required
          id="titleInput"
          label="Required"
          helperText="Give your photo a title"
          variant="filled"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          required
          id="descriptionInput"
          label="Required"
          helperText="Describe the photo"
          variant="filled"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Add Cat 🐈
        </Button>
      </Box>
      </div>
    </>
  );
}
