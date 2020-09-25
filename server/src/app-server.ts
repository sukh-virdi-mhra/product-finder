import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Finder from "./services/finder";
import bodyParser from "body-parser";
import OrderService from "./services/order-service"
import models, { connectDb } from "./models";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
let finder;

app.get("/menu", (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.send(finder.menu)
})

app.post("/order", (req, res) => {
  const order = new OrderService()
  order.createOrder(req.body.customerId, req.body.plNumber).then(() => res.sendStatus(201))
})

// app.post("/product", (req: Request, res: Response) => {
//   let product = search(req.body.plNumber);
//   if (product) {
//     res.render("product", {
//       product: product,
//     });
//   } else {
//     res.send("The product you are looking for was not found");
//   }
// });

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

connectDb().then(async () => {
  finder = new Finder();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});