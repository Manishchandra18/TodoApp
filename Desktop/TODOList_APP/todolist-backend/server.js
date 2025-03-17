const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/users", require("./routes/userRoutes"));
app.use("/todos", require("./routes/todoRoutes"));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
