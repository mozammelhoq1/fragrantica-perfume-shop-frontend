import { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://arcane-sea-21908.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default UseProducts;
