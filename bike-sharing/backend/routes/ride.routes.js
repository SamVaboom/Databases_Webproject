const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all
router.get("/", async (req, res) => {
   try {
      const [rows] = await db.query("SELECT * FROM ride");
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by persona
router.get("/persona/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM ride WHERE persona_id = ?", [id]);
      res.json(rows);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// GET by id
router.get("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      const [rows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// POST create
router.post("/", async (req, res) => {
   try {
      const [idRow] = await db.query("SELECT COALESCE(MAX(ride_id),0)+1 AS nextId FROM ride");
      const nextId = idRow[0].nextId;
      const data = req.body;
      await db.query("INSERT INTO ride (ride_id, bike_id, persona_id, start_time, end_time, ride_feedback, customer_comment) VALUES (?,?,?,?,?,?,?)", [nextId, data.bike_id, data.persona_id, data.start_time, data.end_time, data.ride_feedback, data.customer_comment]);
      const [rows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [nextId]);
      res.json(rows[0]);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// PUT update
router.put("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("UPDATE ride SET ? WHERE ride_id = ?", [req.body, id]);
      const [rows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// DELETE
router.delete("/:id", async (req, res) => {
   const id = req.params.id;
   try {
      await db.query("DELETE FROM ride WHERE ride_id = ?", [id]);
      res.json({ success: true });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// Start ride
router.post("/start", async (req, res) => {
   const { persona_id, station_id } = req.body;
   try {
      const [bikeRows] = await db.query("SELECT bike_id FROM bike WHERE station_id = ? LIMIT 1", [station_id]);
      if (bikeRows.length === 0) {
         return res.status(400).send("No bikes available at this station");
      }
      const bikeId = bikeRows[0].bike_id;
      const [rideIdRow] = await db.query("SELECT COALESCE(MAX(ride_id),0)+1 AS nextId FROM ride");
      const rideId = rideIdRow[0].nextId;
      await db.query("INSERT INTO ride (ride_id, bike_id, persona_id, start_time) VALUES (?,?,?,NOW())", [rideId, bikeId, persona_id]);
      await db.query("UPDATE bike SET station_id = NULL WHERE bike_id = ?", [bikeId]);
      res.json({ ride_id: rideId, bike_id: bikeId, station_id });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// End ride
router.post("/end", async (req, res) => {
   const { ride_id, station_id } = req.body;
   try {
      const [rideRows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [ride_id]);
      if (rideRows.length === 0) return res.status(404).send("Ride not found");
      await db.query("UPDATE ride SET end_time = NOW() WHERE ride_id = ?", [ride_id]);
      const [updatedRideRows] = await db.query("SELECT *, TIMESTAMPDIFF(MINUTE, start_time, end_time) AS duration FROM ride WHERE ride_id = ?", [ride_id]);
      const ride = updatedRideRows[0];
      await db.query("UPDATE bike SET station_id = ? WHERE bike_id = ?", [station_id, ride.bike_id]);
      const [personaRows] = await db.query("SELECT subscription_id FROM persona WHERE persona_id = ?", [ride.persona_id]);
      let cost = 0;
      if (personaRows.length > 0) {
         const subscriptionId = personaRows[0].subscription_id;
         const [subRows] = await db.query("SELECT price_per_minute FROM subscription WHERE subscription_id = ?", [subscriptionId]);
         if (subRows.length > 0) {
            cost = Number((ride.duration * subRows[0].price_per_minute).toFixed(2));
         }
      }
      res.json({ ride_id, bike_id: ride.bike_id, station_id, duration: ride.duration, cost });
   } catch (error) {
      res.status(500).send(error.message);
   }
});

// Feedback
router.post("/:id/feedback", async (req, res) => {
   const id = req.params.id;
   const { rating, comment } = req.body;
   try {
      await db.query("UPDATE ride SET ride_feedback = ?, customer_comment = ? WHERE ride_id = ?", [rating, comment, id]);
      const [rows] = await db.query("SELECT * FROM ride WHERE ride_id = ?", [id]);
      res.json(rows[0] || null);
   } catch (error) {
      res.status(500).send(error.message);
   }
});

module.exports = router;
