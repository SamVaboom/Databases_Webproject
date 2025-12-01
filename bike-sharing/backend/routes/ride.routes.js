const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   const [rows] = await db.query("SELECT * FROM ride");
   res.json(rows);
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   const [rows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [id]);
   res.json(rows[0] || null);
});

module.exports = router;
