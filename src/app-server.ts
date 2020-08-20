const express = require('express')
const app = express()
const port = 3000

import ProductFinder from "./services/finder"
import getData from "./repositories/data-provider"
let productFinder = new ProductFinder(getData);

app.use(express.static("public"))

const getHandler = (request, response) => {
  console.log("I'm listening!")
  response.render("index", {title: "pug", message: "pug message"})
}

app.get("/", getHandler)

app.get("/rereouted", (request, response) => {
    response.send("You have been rerouted!")
})

app.get("/search/:products", (request, response) => {
    let searchedProduct = productFinder.getProduct(request.params.products);
    if (searchedProduct) {
      response.send(searchedProduct);
    } else {
      response.send("Product Not Found");
    }
  });

app.set("view engine", "pug")
app.set("views", "./out/views");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})