const consultBDD = async () => {
   const response = await fetch("./json/products.json");
   const products = await response.json();
   return products;
}

export default consultBDD;