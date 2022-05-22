import React from 'react'
import useProducts from '../../Hooks/useProducts'
import Loading from '../../Shared/Loading'

function ShowAllParts() {
    const [products, isLoading] = useProducts()
    if(isLoading){
      return <Loading />
  }
  return (
    <div>ShowAllParts {products.length}</div>
  )
}

export default ShowAllParts