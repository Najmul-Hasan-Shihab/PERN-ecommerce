const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "PERN Ecommerce API is running" });
});

// TODO: Add your routes here
// app.use("/api/products", require("./routes/products"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
