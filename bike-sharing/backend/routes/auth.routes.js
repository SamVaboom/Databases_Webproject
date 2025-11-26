const express = require("express");
const router = express.Router();
const db = require("../db");

// LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const [rows] = await db.query(
        "SELECT * FROM persona WHERE username = ? AND password = ?",
        [username, password]
    );

    if (rows.length > 0) {
        return res.json({ success: true });
    } else {
        return res.json({ success: false });
    }
});

// SIGNUP (minimal insert)
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        await db.query(
            "INSERT INTO persona (persona_id, username, firstname, lastname, email, phonenum, password, adress, city, zipcode, subscription_id, payment_method, account_created) VALUES (NULL, ?, '', '', '', NULL, ?, '', '', 0, 2, '', CURDATE())",
            [username, password]
        );
        return res.json({ success: true });
    } catch (err) {
        return res.json({ success: false, message: err.sqlMessage });
    }
});

module.exports = router;
