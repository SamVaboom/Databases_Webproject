// ================================
// SERVER INITIALIZATION
// ================================
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// ================================
// MIDDLEWARE
// ================================

// Allow JSON bodies (REQUIRED for POST/PUT)
app.use(express.json());

// Allow form bodies (REQUIRED for POST/PUT)
app.use(express.urlencoded({ extended: true }));

// CORS (REQUIRED for browser POST)
app.use(cors());


// ================================
// SERVE FRONTEND
// ================================
app.use(express.static(path.join(__dirname, "../frontend")));


// ================================
// API ROUTES
// ================================
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/persona", require("./routes/persona.routes"));
app.use("/api/subscription", require("./routes/subscription.routes"));
app.use("/api/bike", require("./routes/bike.routes"));
app.use("/api/station", require("./routes/station.routes"));
app.use("/api/discount", require("./routes/discount.routes"));
app.use("/api/payment", require("./routes/payment.routes"));
app.use("/api/maintenance", require("./routes/maintenance.routes"));
app.use("/api/ride", require("./routes/ride.routes"));


// ================================
// START SERVER
// ================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
