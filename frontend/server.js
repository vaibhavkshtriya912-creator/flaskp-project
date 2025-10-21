import express from "express";
import path from "path";
import bodyParser from "body-parser";
import axios from "axios";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/api/submit", async (req, res) => {
  try {
    const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
    const response = await axios.post(`${backendUrl}/submit`, req.body, {
      headers: { "Content-Type": "application/json" },
    });
    res.json(response.data);
  } catch (err) {
    console.error("Error forwarding request:", err.message);
    res.status(500).json({ ok: false, error: err.message || "Error" });
  }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
