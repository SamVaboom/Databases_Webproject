const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM persona");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM persona WHERE persona_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(persona_id),0)+1 AS nextId FROM persona");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query(`INSERT INTO persona (persona_id, username, firstname, lastname, email, phonenum, password, adress, city, zipcode, subscription_id, payment_method, account_created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
         [nextId, data.username, data.firstname, data.lastname, data.email, data.phonenum, data.password, data.adress, data.city, data.zipcode, data.subscription_id, data.payment_method, data.account_created]);
      const [rows] = await db.query("SELECT * FROM persona WHERE persona_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   const data = req.body;
   try {
      await db.query("UPDATE persona SET ? WHERE persona_id = ?", [data, id]);
      const [rows] = await db.query("SELECT * FROM persona WHERE persona_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM persona WHERE persona_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
