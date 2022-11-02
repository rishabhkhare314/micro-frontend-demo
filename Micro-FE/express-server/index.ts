import express from "express";
const Products = require("./products.json");
const app = express();
const port = 7002;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello from express-server");
});

app.get("/products", (req, res) => {
  res.send(Products);
});

app.get("/product/:id", (req, res) => {
  const data = Products.find(
    (product: any) => product.id === Number(req.params.id)
  );
  res.send(data);
});

app.listen(port, () => {
  console.log(`express-server listening at http://localhost:${port}`);
});
