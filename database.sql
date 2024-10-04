DROP TABLE "gallery";

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
('images/cat-stare.jpg', 'Cat Stare', 'Photo of a cat staring at the camera'),
('images/curious-cat.jpg', 'Curious Cat', 'Photo of a curious cat'),
('images/upside-down-cat.jpg', 'Upside-down Cat', 'Photo of a cat hanging upside-down'),
('images/sun-cat.jpg', 'Cat in the Sun', 'Photo of a cat basking in the morning sun'),
('images/trail-cat.jpg', 'Cat on the Trail', 'Photo of a cat walking on a wooden trail'),
('images/sleeping-kitty.jpg', 'Cat sleeping soundly', 'Photo of a cat sleeping with their human'),
('images/big-ears.jpg', 'Big Ears', 'Photo of a cat with large ears'),
('images/window-cats.jpg', 'Window Cats', 'Photo of two cats looking out of a window');
  
