import readline = require("readline")
import ProductFinder from "./services/finder"

let rl = readline.createInterface(process.stdin, process.stdout)

function inputHandler(answer: string, finder: ProductFinder): void {
  if (answer === "Q") {
    rl.close()
    return null
  }

  let result = finder.getProduct(answer)
  if (result) {
    console.log(result.toString())
  } else {
    console.log("Product doesn't exist", answer)
  }

  getInput(finder)
}

export default function getInput(finder: ProductFinder): void {
  rl.question("Input your medical licence number or Q to quit: ", (answer) =>
    inputHandler(answer, finder)
  )
}
