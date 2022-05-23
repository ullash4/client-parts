import { useQuery } from "react-query";

function useProducts() {
  const { isLoading, refetch, data: products } = useQuery("allProducts", () =>
    fetch("http://localhost:5000/parts",{
      method: "GET"
    }).then((res) => res.json())
  );
  
  return [products,isLoading, refetch];
}

export default useProducts;
