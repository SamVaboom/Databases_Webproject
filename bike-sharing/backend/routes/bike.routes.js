const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM bike");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM bike WHERE bike_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(bike_id),0)+1 AS nextId FROM bike");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query("INSERT INTO bike (bike_id, station_id, latitude, longitude, brand, color, framenum) VALUES (?,?,?,?,?,?,?)", [nextId, data.station_id, data.latitude, data.longitude, data.brand, data.color, data.framenum]);
      const [rows] = await db.query("SELECT * FROM bike WHERE bike_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE bike SET ? WHERE bike_id = ?", [req.body, id]);
      const [rows] = await db.query("SELECT * FROM bike WHERE bike_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM bike WHERE bike_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
