import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";
import './App.css'

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
      <main>
        <GalleryForm getGalleryItems={getGalleryItems} />
        <GalleryList
          galleryItems={galleryItems}
          getGalleryItems={getGalleryItems}
        />
      </main>
    </div>
  );
}

export default App;
