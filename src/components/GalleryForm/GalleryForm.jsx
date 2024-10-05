import { useState } from "react";
import axios from "axios";

export default function GalleryForm({ getGalleryItems }) {
  let [URL, setURL] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (URL.length > 0 && title.length > 0 && description.length > 0) {
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
    }else{
        alert('Please fill out all inputs')
    }
  };

  return (
    <>
      <h2>Add a Cat!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="urlInput">URL: </label>
        <input
          id="urlInput"
          type="text"
          placeholder="Image URL"
          onChange={(event) => setURL(event.target.value)}
        />
        <label htmlFor="titleInput">Title: </label>
        <input
          id="titleInput"
          type="text"
          placeholder="Give your photo a title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="descriptionInput">Description: </label>
        <input
          id="descriptionInput"
          type="text"
          placeholder="Describe the photo"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add Cat 🐈</button>
      </form>
    </>
  );
}
