import axios from "axios";
import "./GalleryItem.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

export default function GalleryItem({ getGalleryItems, picture }) {
  let [isFlipped, setIsFlipped] = useState(false);

  const flipPicture = () => {
    setIsFlipped(!isFlipped);
  };

  const loveIt = () => {
    axios
      .put(`/api/gallery/like/${picture.id}`)
      .then((response) => {
        getGalleryItems();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteImage = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/gallery/${picture.id}`)
          .then((response) => {
            getGalleryItems();
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your image has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div data-testid="galleryItem" className="picture">
      <p className="title">{picture.title}</p>
      <div data-testid="toggle" onClick={flipPicture} className="imageDiv">
        {isFlipped ? (
          <p className="description">{picture.description}</p>
        ) : (
          <img src={picture.url} />
        )}
      </div>
      <div className="imageInfo">
        <Button
          variant="contained"
          color="success"
          data-testid="like"
          onClick={loveIt}
        >
          Love it!! 😻
        </Button>
        <p className="likesText">{picture.likes} People love this!</p>
        <Button
          variant="outlined"
          color="error"
          onClick={deleteImage}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
