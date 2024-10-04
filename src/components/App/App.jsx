import axios from "axios";
import { useState,useEffect } from "react";

import GalleryList from "../GalleryList/GalleryList";

function App() {

  let [galleryItems, setGalleryItems] = useState([])
    
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
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList galleryItems={galleryItems} getGalleryItems={getGalleryItems} />

      </div>
    );
}

export default App;
