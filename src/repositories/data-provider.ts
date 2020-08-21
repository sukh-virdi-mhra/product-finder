import Product from "../models/product"

export default function getData() {
  const product1 = new Product("PL001730050", "Ibugel gel", "10mg", "Ibuprofen", "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca")
  const product2 = new Product("PL001655013", "Anadin Extra", "5mg", "Paracetamol", "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970")
  const product3 = new Product("PL136060206", "Tadalafil", "10mg", "film-coated tablets", "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077")
  const product4 = new Product("PL252980158", "Nabilone", "1mg", "Nabilone", "https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4")
  const product5 = new Product("PL201170079", "Ramipril ", "2.5mg ", "Ramipril", "https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039")
  const products = [product1, product2, product3, product4, product5]

  let productObjects = {}
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    productObjects[product.plNumber.toUpperCase()] = product
  }

  return productObjects
}
