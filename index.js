const express = require("express");
const dotenv = require("dotenv");
const taskRoute = require("./routes/tasks.routes");
const connectDb = require("./db/connect");

dotenv.config();
const URL = process.env.URI;
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.status(200).render("index.html");
});
app.use("/api/v1/tasks", taskRoute);

const start = async (url) => {
  try {
    await connectDb(url);
    app.listen(PORT, () => {
      console.log("🚀 is running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start(URL);
