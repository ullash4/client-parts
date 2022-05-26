import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://morning-refuge-94486.herokuapp.com/parts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return [products];
}

export default useProducts;
