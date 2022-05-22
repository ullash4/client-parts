import React from "react";
import useProducts from "../../Hooks/useProducts";
import Loading from "../../Shared/Loading";
import PartsCard from "./PartsCard";

function ShowAllParts() {
  const [products, isLoading] = useProducts();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-10">
      <div>ShowAllParts {products.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product) => (
          <PartsCard key={product._id} product={product}></PartsCard>
        ))}
      </div>
    </div>
  );
}

export default ShowAllParts;
