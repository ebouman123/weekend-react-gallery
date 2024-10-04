import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList({galleryItems, getGalleryItems}) {


    return (
        <>
      <div data-testid="galleryList">
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