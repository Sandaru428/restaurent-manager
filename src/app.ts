import express, { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});