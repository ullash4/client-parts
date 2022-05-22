import { useQuery } from "react-query";

function useProducts() {
  const { isLoading, refetch, data: products } = useQuery("repoData", () =>
    fetch("fakeparts.json").then((res) => res.json())
  );
  
  return [products,isLoading, refetch];
}

export default useProducts;
