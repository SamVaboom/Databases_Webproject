const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM subscription");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM subscription WHERE subscription_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(subscription_id),0)+1 AS nextId FROM subscription");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query("INSERT INTO subscription (subscription_id, subscription_name, free_time_per_day, num_of_bikes, price_per_month, price_per_minute, subscription_runtime_days) VALUES (?,?,?,?,?,?,?)", [nextId, data.subscription_name, data.free_time_per_day, data.num_of_bikes, data.price_per_month, data.price_per_minute, data.subscription_runtime_days]);
      const [rows] = await db.query("SELECT * FROM subscription WHERE subscription_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE subscription SET ? WHERE subscription_id = ?", [req.body, id]);
      const [rows] = await db.query("SELECT * FROM subscription WHERE subscription_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM subscription WHERE subscription_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
