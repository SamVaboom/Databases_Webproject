const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM maintanance");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM maintanance WHERE maintanance_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(maintanance_id),0)+1 AS nextId FROM maintanance");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query(`INSERT INTO maintanance (maintanance_id, bike_id, ride_id, responsible_employee, issue_report, last_customer, issue_date, fix_complete) VALUES (?,?,?,?,?,?,NOW(),0)`,
         [nextId, data.bike_id, data.ride_id, data.responsible_employee || null, data.issue_report, data.last_customer]);
      const [rows] = await db.query("SELECT * FROM maintanance WHERE maintanance_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE maintanance SET ? WHERE maintanance_id = ?", [req.body, id]);
      const [rows] = await db.query("SELECT * FROM maintanance WHERE maintanance_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// Mark complete
router.put("/:id/complete", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE maintanance SET fix_complete = 1 WHERE maintanance_id = ?", [id]);
      const [rows] = await db.query("SELECT * FROM maintanance WHERE maintanance_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM maintanance WHERE maintanance_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
