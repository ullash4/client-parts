import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSignleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://morning-refuge-94486.herokuapp.com/parts/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product, id];
};

export default useSignleProduct;
