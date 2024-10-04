CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.'),
('images/cat-stare.jpg', 'Cat Stare', 'Photo of a cat staring at the camera'),
('images/curious-cat.jpg', 'Curious Cat', 'Photo of a curious cat'),
('images/upside-down-cat.jpg', 'Upside-down Cat', 'Photo of a cat hanging upside-down');
  