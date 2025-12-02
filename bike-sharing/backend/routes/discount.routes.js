const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM discount");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM discount WHERE discount_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(discount_id),0)+1 AS nextId FROM discount");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query("INSERT INTO discount (discount_id, discount_code, discount_per, num_of_use, ex_date) VALUES (?,?,?,?,?)", [nextId, data.discount_code, data.discount_per, data.num_of_use, data.ex_date]);
      const [rows] = await db.query("SELECT * FROM discount WHERE discount_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE discount SET ? WHERE discount_id = ?", [req.body, id]);
      const [rows] = await db.query("SELECT * FROM discount WHERE discount_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM discount WHERE discount_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
