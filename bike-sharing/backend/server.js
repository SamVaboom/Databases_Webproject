const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.json());

// >>> SERVE THE FRONTEND (IMPORTANT) <<<
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/persona", require("./routes/persona.routes"));
app.use("/api/subscription", require("./routes/subscription.routes"));
app.use("/api/bike", require("./routes/bike.routes"));
app.use("/api/station", require("./routes/station.routes"));
app.use("/api/discount", require("./routes/discount.routes"));
app.use("/api/payment", require("./routes/payment.routes"));
app.use("/api/maintenance", require("./routes/maintenance.routes"));
app.use("/api/ride", require("./routes/ride.routes"));

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
