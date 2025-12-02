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
    const { 
        username, firstname, lastname, email,
        phonenum, adress, city, zipcode, password
    } = req.body;

    try {
        await db.query(
            `INSERT INTO persona 
            (username, firstname, lastname, email, phonenum, adress, city, zipcode, password, 
             subscription_id, payment_method, account_created)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 2, 'twint', CURDATE())`,
            [
                username,
                firstname,
                lastname,
                email,
                phonenum,
                adress,
                city,
                zipcode,
                password
            ]
        );

        return res.json({ success: true });

    } catch (err) {
        console.error(err);
        return res.json({ success: false, message: err.sqlMessage });
    }
});


module.exports = router;
