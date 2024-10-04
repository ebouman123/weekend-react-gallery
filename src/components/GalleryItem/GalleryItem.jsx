import axios from "axios";
import "./GalleryItem.css";
import { useState } from "react";

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

  return (
    <div data-testid="galleryItem" className="picture">
      <p className="title">{picture.title}</p>
      <div data-testid="toggle" onClick={flipPicture} className="imageDiv">
        {isFlipped ? <p className="description">{picture.description}</p> : <img src={picture.url} />}
      </div>
      <button data-testid="like" onClick={loveIt}>
        Love it!! 😻
      </button>
      <p>{picture.likes} People love this!</p>
    </div>
  );
}
