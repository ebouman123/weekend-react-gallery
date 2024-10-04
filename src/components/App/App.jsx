import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  const getGalleryItems = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getGalleryItems();
  }, []);

  return (
    <div data-testid="app">
      <Header />
      <GalleryList
        galleryItems={galleryItems}
        getGalleryItems={getGalleryItems}
      />
    </div>
  );
}

export default App;
