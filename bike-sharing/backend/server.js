const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.json());

// >>> SERVE THE FRONTEND (IMPORTANT) <<<
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api/auth", require("./routes/auth.routes"));

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
