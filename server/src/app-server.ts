const express = require('express')
const app = express()
const port = 4000

import ProductFinder from "./services/finder"
import getData from "./repositories/data-provider"
let productFinder = new ProductFinder(getData);

app.use(express.urlencoded({
  extended: true,
  })
)

app.use(express.static("public"))

app.get("/", (request, response) => {
  response.render("index")
})

app.get("/file", (request, response) => {
  response.render("index", {
    title: "Pug",
    message: "pug message",
  })
})

app.get("/hello", (request: Request, response: Response) => {
  response.setHeader("Content-Type", "application/json");
  response.send({"Hello there": "This is a test"});
});

app.post("/search", (request, response) => {
  let searchedProduct = productFinder.getProduct(request.body.product.toUpperCase());
    if (searchedProduct) {
      response.render("description",{    
        title: "Product Description",
        item: searchedProduct});
    } else {
      response.send("Product Not Found");
    }
});

app.set("view engine", "pug")
app.set("views", "./out/views");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})