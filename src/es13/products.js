import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');   // ya noso es nesesario usar la palabra reservada 'async'
const products = await response.json();

export { products };