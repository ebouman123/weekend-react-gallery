import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

export default function GalleryList({galleryItems, getGalleryItems}) {


    return (
        <>
      <div data-testid="galleryList" className="gallery">
        {galleryItems.map((picture) => {
          return (
            <GalleryItem
              getGalleryItems={getGalleryItems}
              key={picture.id}
              picture={picture}
            />
          );
        })}
      </div>
    </>
    )
}