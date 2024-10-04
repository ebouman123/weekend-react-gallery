import axios from "axios";
import './GalleryItem.css'

export default function GalleryItem({ getGalleryItems, picture }) {
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
    <>
      <div data-testid="galleryItem" className="picture">
        <img src={picture.url} />
        <button onClick={loveIt}>Love it!! 😻</button>
        <p>{picture.likes} People love this!</p>
      </div>
    </>
  );
}
