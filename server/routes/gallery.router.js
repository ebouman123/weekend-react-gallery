const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  const pictureId = [req.params.id];

  let queryText = `
        UPDATE "gallery" SET "likes"="likes" + 1
        WHERE "id"=$1;
        `;

  pool
    .query(queryText, pictureId)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error("Error making PUT query", err);
      res.sendStatus(500);
    });});

// GET /gallery
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY "title";`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
