import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/gadiel", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, (res, req) => {
  console.log(`Server running on port ${port}. `);
});

// netstat -ano | findstr "LISTENING"  __ marca los puertos disponibles en el equipo.
