import "./App.css";
import Product from "./components/product/Product";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  console.log(products);

  return (
    <>
      <Product products={products} />
    </>
  );
}

export default App;
