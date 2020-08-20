const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

const getHandler = (request, response) => {
  console.log("I'm listening!")
  response.sendFile(__dirname + "/views/index.html")
}

app.get("/", getHandler)

app.get("/rereouted", (request, response) => {
    response.send("You have been rerouted!")
})

app.get("/mirror/:word", (request, response) => {
    console.log(request.params.word)
    response.send(request.parms.word)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})