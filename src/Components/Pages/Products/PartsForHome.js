import React from 'react'
import useProducts from '../../Hooks/useProducts';

import PartsCard from './PartsCard';

function PartsForHome() {
    const [products] = useProducts();
    
    return (
      <div className="px-10 my-10">
        <h1 className='max-w-xl text-3xl font-bold sm:text-6xl mb-20'>Our 
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-3">
          <span className="relative text-white mx-1 px-1"> Collections</span>
        </span>
        
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <PartsCard key={product._id} product={product}></PartsCard>
          ))}
        </div>
      </div>
    );
}

export default PartsForHome