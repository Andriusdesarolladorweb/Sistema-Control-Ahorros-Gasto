import express from "express";
import fetch from "node-fetch"; // Asegúrate de instalar node-fetch

const app = express();
const port = 3002;

app.use(express.json());

app.get("/entradas", async (req, res) => {
  try {
    const response = await fetch("http://localhost:3001/entradas"); // URL de la API externa
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
