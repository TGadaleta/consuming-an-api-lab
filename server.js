import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000...");
});
